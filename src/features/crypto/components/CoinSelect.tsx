import type { CryptoCoin } from '@/features/crypto/types'

interface CoinSelectProps {
  coins: CryptoCoin[]
  value: string
  onChange: (coinId: string) => void
}

export function CoinSelect({ coins, value, onChange }: CoinSelectProps) {
  return (
    <div className="max-w-xs">
      <label className="mb-1 block text-sm font-medium text-slate-400">
        Select coin
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-md
          bg-slate-800
          border border-slate-700
          px-3 py-2
          text-slate-100
          focus:outline-none
          focus:ring-2 focus:ring-indigo-500
        "
      >
        {coins.map((coin) => (
          <option
            key={coin.id}
            value={coin.id}
            className="bg-slate-800 text-slate-100"
          >
            {coin.name} ({coin.symbol.toUpperCase()})
          </option>
        ))}
      </select>
    </div>
  )
}
