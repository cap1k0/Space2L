"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "BLEU", human: 1.0, ai: 0.78 },
  { name: "chrF", human: 1.0, ai: 0.84 },
  { name: "WER", human: 0.0, ai: 0.22 },
];

export default function MetricsChart() {
  return (
    <div className="rounded-lg border border-neutral-200 p-4">
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="name" tick={{ fontSize: 13 }} />
          <YAxis tick={{ fontSize: 13 }} domain={[0, 1]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="human" name="Human" fill="#171717" radius={[4, 4, 0, 0]} />
          <Bar dataKey="ai" name="Qwen2.5-14B" fill="#2563eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
