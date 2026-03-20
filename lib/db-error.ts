export function isDatabaseUnavailableError(error: unknown) {
  if (
    error instanceof Error &&
    error.name === "PrismaClientInitializationError"
  ) {
    return true;
  }

  if (hasPrismaErrorCode(error, "P1001")) {
    return true;
  }

  if (error instanceof Error && /Can't reach database server/i.test(error.message)) {
    return true;
  }

  return false;
}

export function getDatabaseErrorCode(error: unknown) {
  return hasPrismaErrorCode(error) ? error.code : null;
}

function hasPrismaErrorCode(
  error: unknown,
  expectedCode?: string,
): error is { code: string } {
  if (!error || typeof error !== "object" || !("code" in error)) {
    return false;
  }

  const { code } = error as { code?: unknown };
  if (typeof code !== "string") {
    return false;
  }

  return expectedCode ? code === expectedCode : true;
}
