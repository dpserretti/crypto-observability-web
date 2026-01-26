import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

import type { MarketHistoryPoint } from '../useMarketHistory'
import {
  formatUSD,
  formatShortDate,
} from '@/utils/formatters'

interface Props {
  data: MarketHistoryPoint[]
}

export function MarketHistoryChart({ data }: Props) {
  if (data.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-500">
        No history available
      </div>
    )
  }

  return (
    <div className="h-64 w-full rounded-lg bg-slate-900 p-4">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />

          <XAxis
            dataKey="timestamp"
            tickFormatter={(value) => formatShortDate(value as number)}
            stroke="#94a3b8"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />

          <YAxis
            tickFormatter={(value) => formatUSD(value as number)}
            stroke="#94a3b8"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            width={90}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: '#020617',
              border: '1px solid #1e293b',
              color: '#e5e7eb',
            }}
            labelFormatter={(label) =>
              formatShortDate(label as number)
            }
            formatter={(value) => formatUSD(value as number)}
          />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#6366f1"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
