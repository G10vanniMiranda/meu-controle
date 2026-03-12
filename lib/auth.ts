export const AUTH_COOKIE_NAME = "sushiflow_session";

const PBKDF2_ALGO = "pbkdf2_sha256";
const PBKDF2_ITERATIONS = 210000;
const PBKDF2_HASH_BYTES = 32;

type AuthConfig = {
  email: string;
  secret: string;
  password?: string;
  passwordHash?: string;
};

function getAuthConfig() {
  const email = process.env.APP_ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.APP_ADMIN_PASSWORD;
  const passwordHash = process.env.APP_ADMIN_PASSWORD_HASH;
  const secret = process.env.APP_AUTH_SECRET;

  if (!email || !secret || (!password && !passwordHash)) {
    return null;
  }

  return { email, password, passwordHash, secret } satisfies AuthConfig;
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

export function isAuthConfigured() {
  return getAuthConfig() !== null;
}

export async function createPasswordHash(password: string) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await derivePbkdf2Hash(password, salt.buffer, PBKDF2_ITERATIONS);
  return `${PBKDF2_ALGO}$${PBKDF2_ITERATIONS}$${toHex(salt.buffer)}$${hash}`;
}

async function isValidPasswordHash(inputPassword: string, encodedHash: string) {
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

export async function isValidAdminPassword(inputPassword: string) {
  const config = getAuthConfig();
  if (!config) return false;

  if (config.passwordHash) {
    return isValidPasswordHash(inputPassword, config.passwordHash);
  }

  if (!config.password) {
    return false;
  }

  const expectedDigest = await digestValue(config.password, config.secret);
  const inputDigest = await digestValue(inputPassword, config.secret);
  return safeEqual(inputDigest, expectedDigest);
}

export async function isValidAdminCredentials(inputEmail: string, inputPassword: string) {
  const config = getAuthConfig();
  if (!config) return false;

  const normalizedEmail = inputEmail.trim().toLowerCase();
  if (!safeEqual(normalizedEmail, config.email)) {
    return false;
  }

  return isValidAdminPassword(inputPassword);
}

export async function createSessionToken() {
  const config = getAuthConfig();
  if (!config) return null;

  if (config.passwordHash) {
    return digestValue(config.passwordHash, config.secret);
  }

  if (!config.password) {
    return null;
  }

  return digestValue(config.password, config.secret);
}

export async function isValidSessionToken(token: string | undefined) {
  if (!token) return false;

  const expectedToken = await createSessionToken();
  if (!expectedToken) return false;

  return safeEqual(token, expectedToken);
}
