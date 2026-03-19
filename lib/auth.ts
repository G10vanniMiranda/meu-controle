import { prisma } from "@/lib/prisma";

export const AUTH_COOKIE_NAME = "sushiflow_session";

const PBKDF2_ALGO = "pbkdf2_sha256";
const PBKDF2_ITERATIONS = 210000;
const PBKDF2_HASH_BYTES = 32;

type LegacyAuthConfig = {
  email: string;
  secret: string;
  password?: string;
  passwordHash?: string;
};

function getLegacyAuthConfig() {
  const email = process.env.APP_ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.APP_ADMIN_PASSWORD;
  const passwordHash = process.env.APP_ADMIN_PASSWORD_HASH;
  const secret = process.env.APP_AUTH_SECRET;

  if (!email || !secret || (!password && !passwordHash)) {
    return null;
  }

  return { email, password, passwordHash, secret } satisfies LegacyAuthConfig;
}

function getAuthSecret() {
  return process.env.APP_AUTH_SECRET ?? null;
}

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function fromHex(value: string) {
  if (value.length % 2 !== 0) {
    return null;
  }

  const bytes = new Uint8Array(value.length / 2);
  for (let index = 0; index < value.length; index += 2) {
    const parsed = Number.parseInt(value.slice(index, index + 2), 16);
    if (Number.isNaN(parsed)) {
      return null;
    }

    bytes[index / 2] = parsed;
  }

  return bytes;
}

async function digestValue(value: string, secret: string) {
  const content = new TextEncoder().encode(`${secret}:${value}`);
  const digest = await crypto.subtle.digest("SHA-256", content);
  return toHex(digest);
}

async function derivePbkdf2Hash(password: string, salt: ArrayBuffer, iterations: number) {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"],
  );

  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt,
      iterations,
    },
    keyMaterial,
    PBKDF2_HASH_BYTES * 8,
  );

  return toHex(bits);
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let index = 0; index < a.length; index += 1) {
    result |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }

  return result === 0;
}

export async function createPasswordHash(password: string) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await derivePbkdf2Hash(password, salt.buffer, PBKDF2_ITERATIONS);
  return `${PBKDF2_ALGO}$${PBKDF2_ITERATIONS}$${toHex(salt.buffer)}$${hash}`;
}

export async function isValidPasswordHash(inputPassword: string, encodedHash: string) {
  const parts = encodedHash.split("$");
  if (parts.length !== 4) {
    return false;
  }

  const [algorithm, iterationValue, saltHex, hashHex] = parts;
  if (algorithm !== PBKDF2_ALGO) {
    return false;
  }

  const iterations = Number.parseInt(iterationValue, 10);
  if (Number.isNaN(iterations) || iterations <= 0) {
    return false;
  }

  const salt = fromHex(saltHex);
  if (!salt) {
    return false;
  }

  const saltBuffer = salt.buffer.slice(salt.byteOffset, salt.byteOffset + salt.byteLength);
  const inputHash = await derivePbkdf2Hash(inputPassword, saltBuffer, iterations);
  return safeEqual(inputHash, hashHex);
}

async function findTeamMemberByEmail(email: string) {
  if (!process.env.DATABASE_URL) {
    return null;
  }

  try {
    return await prisma.teamMember.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        passwordHash: true,
        status: true,
      },
    });
  } catch {
    return null;
  }
}

async function findTeamMemberById(id: string) {
  if (!process.env.DATABASE_URL) {
    return null;
  }

  try {
    return await prisma.teamMember.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        passwordHash: true,
        status: true,
      },
    });
  } catch {
    return null;
  }
}

async function hasDatabaseAuthUsers() {
  if (!process.env.DATABASE_URL) {
    return false;
  }

  try {
    const count = await prisma.teamMember.count({
      where: {
        status: "ativo",
        passwordHash: { not: null },
      },
    });

    return count > 0;
  } catch {
    return false;
  }
}

async function createLegacySessionTokenFromConfig(config: LegacyAuthConfig) {
  if (config.passwordHash) {
    return `legacy:${await digestValue(config.passwordHash, config.secret)}`;
  }

  if (!config.password) {
    return null;
  }

  return `legacy:${await digestValue(config.password, config.secret)}`;
}

async function createDatabaseSessionToken(user: { id: string; passwordHash: string }) {
  const secret = getAuthSecret();
  if (!secret) return null;

  const signature = await digestValue(`${user.id}:${user.passwordHash}`, secret);
  return `user:${user.id}:${signature}`;
}

export async function isAuthConfigured() {
  if (getLegacyAuthConfig()) {
    return true;
  }

  return hasDatabaseAuthUsers();
}

export async function authenticateUser(inputEmail: string, inputPassword: string) {
  const normalizedEmail = inputEmail.trim().toLowerCase();
  const teamMember = await findTeamMemberByEmail(normalizedEmail);

  if (teamMember && teamMember.status === "ativo" && teamMember.passwordHash) {
    const valid = await isValidPasswordHash(inputPassword, teamMember.passwordHash);
    if (valid) {
      const sessionToken = await createDatabaseSessionToken({
        id: teamMember.id,
        passwordHash: teamMember.passwordHash,
      });

      if (sessionToken) {
        return { sessionToken, source: "database" as const, userId: teamMember.id };
      }
    }
  }

  const legacyConfig = getLegacyAuthConfig();
  if (!legacyConfig) {
    return null;
  }

  if (!safeEqual(normalizedEmail, legacyConfig.email)) {
    return null;
  }

  if (legacyConfig.passwordHash) {
    const valid = await isValidPasswordHash(inputPassword, legacyConfig.passwordHash);
    if (!valid) return null;
  } else {
    if (!legacyConfig.password) {
      return null;
    }

    const expectedDigest = await digestValue(legacyConfig.password, legacyConfig.secret);
    const inputDigest = await digestValue(inputPassword, legacyConfig.secret);
    if (!safeEqual(inputDigest, expectedDigest)) {
      return null;
    }
  }

  const sessionToken = await createLegacySessionTokenFromConfig(legacyConfig);
  if (!sessionToken) {
    return null;
  }

  return { sessionToken, source: "legacy" as const };
}

export async function isValidSessionToken(token: string | undefined) {
  if (!token) return false;

  if (token.startsWith("user:")) {
    const [prefix, userId, signature] = token.split(":");
    if (prefix !== "user" || !userId || !signature) {
      return false;
    }

    const teamMember = await findTeamMemberById(userId);
    if (!teamMember || teamMember.status !== "ativo" || !teamMember.passwordHash) {
      return false;
    }

    const expectedToken = await createDatabaseSessionToken({
      id: teamMember.id,
      passwordHash: teamMember.passwordHash,
    });

    return expectedToken ? safeEqual(token, expectedToken) : false;
  }

  if (token.startsWith("legacy:")) {
    const legacyConfig = getLegacyAuthConfig();
    if (!legacyConfig) {
      return false;
    }

    const expectedToken = await createLegacySessionTokenFromConfig(legacyConfig);
    return expectedToken ? safeEqual(token, expectedToken) : false;
  }

  return false;
}
