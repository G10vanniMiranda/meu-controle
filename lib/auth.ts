export const AUTH_COOKIE_NAME = "sushiflow_session";

function getAuthConfig() {
  const email = process.env.APP_ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.APP_ADMIN_PASSWORD;
  const secret = process.env.APP_AUTH_SECRET;

  if (!email || !password || !secret) {
    return null;
  }

  return { email, password, secret };
}

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function digestValue(value: string, secret: string) {
  const content = new TextEncoder().encode(`${secret}:${value}`);
  const digest = await crypto.subtle.digest("SHA-256", content);
  return toHex(digest);
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

export async function isValidAdminPassword(inputPassword: string) {
  const config = getAuthConfig();
  if (!config) return false;

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
  return digestValue(config.password, config.secret);
}

export async function isValidSessionToken(token: string | undefined) {
  if (!token) return false;

  const expectedToken = await createSessionToken();
  if (!expectedToken) return false;

  return safeEqual(token, expectedToken);
}
