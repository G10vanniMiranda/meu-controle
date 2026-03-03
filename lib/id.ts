export function generateId(prefix: string) {
  const randomPart =
    typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36);
  return `${prefix}-${randomPart}`;
}
