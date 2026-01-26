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

  interface Props {
    data: MarketHistoryPoint[]
  }

  function formatDate(ts: number) {
    return new Date(ts).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    })
  }

  function formatPrice(value: number) {
    return `$${value.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
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
      <div className="h-64 w-full">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />

            <XAxis
              dataKey="timestamp"
              tickFormatter={formatDate}
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />

            <YAxis
              tickFormatter={formatPrice}
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              width={80}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: '#020617',
                border: '1px solid #1e293b',
                color: '#e5e7eb',
              }}
              labelFormatter={formatDate}
              formatter={(value: number) => formatPrice(value)}
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
