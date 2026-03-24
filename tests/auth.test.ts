import assert from "node:assert/strict";
import { createPasswordHash, isAuthConfigured, isValidPasswordHash } from "@/lib/auth";
import { loginRouteTests } from "./login-route.test";

type TestCase = {
  name: string;
  run: () => Promise<void>;
};

const ENV_KEYS = [
  "APP_ADMIN_EMAIL",
  "APP_ADMIN_PASSWORD",
  "APP_ADMIN_PASSWORD_HASH",
  "APP_AUTH_SECRET",
  "DATABASE_URL",
] as const;

function snapshotEnv() {
  return Object.fromEntries(ENV_KEYS.map((key) => [key, process.env[key]]));
}

function restoreEnv(snapshot: Record<string, string | undefined>) {
  for (const key of ENV_KEYS) {
    const value = snapshot[key];
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

const authTests: TestCase[] = [
  {
    name: "createPasswordHash generates a verifiable PBKDF2 hash",
    async run() {
      const password = "senha-forte-123";
      const encodedHash = await createPasswordHash(password);

      assert.match(encodedHash, /^pbkdf2_sha256\$\d+\$[a-f0-9]+\$[a-f0-9]+$/);
      assert.equal(await isValidPasswordHash(password, encodedHash), true);
      assert.equal(await isValidPasswordHash("senha-incorreta", encodedHash), false);
    },
  },
  {
    name: "isValidPasswordHash rejects malformed values",
    async run() {
      assert.equal(await isValidPasswordHash("abc", "hash-invalido"), false);
      assert.equal(await isValidPasswordHash("abc", "pbkdf2_sha256$abc$00ff$1234"), false);
      assert.equal(await isValidPasswordHash("abc", "outro$210000$00ff$1234"), false);
    },
  },
  {
    name: "isAuthConfigured returns true when legacy auth env is complete",
    async run() {
      const snapshot = snapshotEnv();

      delete process.env.DATABASE_URL;
      process.env.APP_ADMIN_EMAIL = "admin@example.com";
      process.env.APP_ADMIN_PASSWORD = "segredo";
      delete process.env.APP_ADMIN_PASSWORD_HASH;
      process.env.APP_AUTH_SECRET = "auth-secret";

      try {
        assert.equal(await isAuthConfigured(), true);
      } finally {
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "isAuthConfigured returns false when auth env is incomplete and database is disabled",
    async run() {
      const snapshot = snapshotEnv();

      delete process.env.DATABASE_URL;
      delete process.env.APP_ADMIN_EMAIL;
      delete process.env.APP_ADMIN_PASSWORD;
      delete process.env.APP_ADMIN_PASSWORD_HASH;
      delete process.env.APP_AUTH_SECRET;

      try {
        assert.equal(await isAuthConfigured(), false);
      } finally {
        restoreEnv(snapshot);
      }
    },
  },
];

const tests = [...authTests, ...loginRouteTests];

async function main() {
  let failed = 0;

  for (const testCase of tests) {
    try {
      await testCase.run();
      console.log(`PASS ${testCase.name}`);
    } catch (error) {
      failed += 1;
      console.error(`FAIL ${testCase.name}`);
      console.error(error);
    }
  }

  if (failed > 0) {
    console.error(`\n${failed} test(s) failed.`);
    process.exitCode = 1;
    return;
  }

  console.log(`\n${tests.length} test(s) passed.`);
}

void main();
