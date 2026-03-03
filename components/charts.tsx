import { moneyFormatter } from "@/lib/formatters";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MiniBarChart({
  title,
  data,
}: {
  title: string;
  data: Array<{ label: string; value: number; tone?: "warm" | "cold" }>;
}) {
  const max = Math.max(...data.map((item) => item.value), 1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {data.map((item) => {
          const width = `${Math.max((item.value / max) * 100, 3)}%`;
          const toneClass =
            item.tone === "cold" ? "from-blue-500 to-blue-300" : "from-yellow-500 to-amber-300";
          return (
            <div key={item.label}>
              <div className="mb-1 flex items-center justify-between text-sm text-blue-100/80">
                <span>{item.label}</span>
                <span>{moneyFormatter.format(item.value)}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-blue-950/60">
                <div className={`h-full rounded-full bg-linear-to-r ${toneClass}`} style={{ width }} />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export function LineChartCard({
  title,
  values,
  labels,
}: {
  title: string;
  values: number[];
  labels: string[];
}) {
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const range = max - min || 1;
  const points = values
    .map((value, index) => {
      const x = (index / Math.max(values.length - 1, 1)) * 100;
      const y = 90 - ((value - min) / range) * 80;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <svg viewBox="0 0 100 100" className="h-40 w-full min-w-65">
            <defs>
              <linearGradient id="lineGradient" x1="0" x2="1">
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <polyline fill="none" stroke="#1e3a8a" strokeWidth="0.8" points="0,90 100,90" />
            <polyline fill="none" stroke="url(#lineGradient)" strokeWidth="2.4" points={points} />
            {values.map((value, index) => {
              const x = (index / Math.max(values.length - 1, 1)) * 100;
              const y = 90 - ((value - min) / range) * 80;
              return <circle key={`${labels[index]}-${value}`} cx={x} cy={y} r="1.7" fill="#facc15" />;
            })}
          </svg>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-blue-100/80 sm:grid-cols-6">
          {labels.map((label, index) => (
            <span key={`${label}-${index}`}>{label}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
