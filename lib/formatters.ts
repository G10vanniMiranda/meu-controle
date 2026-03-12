export const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export function formatDateOnly(dateValue: string) {
  const [year, month, day] = dateValue.split("-").map((part) => Number(part));
  if (!year || !month || !day) {
    return dateValue;
  }

  return dateFormatter.format(new Date(year, month - 1, day));
}
