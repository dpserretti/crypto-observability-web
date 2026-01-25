import type { CryptoCoin } from '@/features/crypto/types'

interface CoinSelectProps {
  coins: CryptoCoin[]
  value: string
  onChange: (coinId: string) => void
}

export function CoinSelect({ coins, value, onChange }: CoinSelectProps) {
  return (
    <div className="max-w-xs">
      <label className="block text-sm font-medium text-gray-400 mb-1">
        Select coin
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md bg-gray-800 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {coins.map((coin) => (
          <option key={coin.id} value={coin.id}>
            {coin.name} ({coin.symbol.toUpperCase()})
          </option>
        ))}
      </select>
    </div>
  )
}
