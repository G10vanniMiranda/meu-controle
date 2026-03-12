import { webcrypto } from "node:crypto";

const algo = "pbkdf2_sha256";
const iterations = 210000;
const hashBytes = 32;

function toHex(bytes) {
  return Buffer.from(bytes).toString("hex");
}

async function deriveHash(password, salt) {
  const keyMaterial = await webcrypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"],
  );

  const bits = await webcrypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt, iterations },
    keyMaterial,
    hashBytes * 8,
  );

  return new Uint8Array(bits);
}

async function main() {
  const password = process.argv[2];

  if (!password) {
    console.error("Uso: node scripts/generate-admin-hash.mjs \"SUA_SENHA\"");
    process.exit(1);
  }

  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const hash = await deriveHash(password, salt);
  const encoded = `${algo}$${iterations}$${toHex(salt)}$${toHex(hash)}`;

  process.stdout.write(`${encoded}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
