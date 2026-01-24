import type { CryptoMarket } from '@/features/crypto/types'

type Props = {
  market: CryptoMarket
}

export function MarketCard({ market }: Props) {
  const isPositive = market.price_change_24h >= 0

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold uppercase">
          {market.symbol}
        </h3>

        {market.cached && (
          <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
            cached
          </span>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-2xl font-bold">
          ${market.price_usd.toLocaleString()}
        </p>

        <p
          className={`text-sm ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isPositive ? '+' : ''}
          {market.price_change_24h.toFixed(2)} (
          {market.price_change_percentage_24h.toFixed(2)}%)
        </p>

        <div className="pt-2 text-sm text-gray-500">
          <p>
            Market cap:{' '}
            <span className="font-medium text-gray-700">
              ${market.market_cap_usd.toLocaleString()}
            </span>
          </p>

          <p>
            Volume 24h:{' '}
            <span className="font-medium text-gray-700">
              ${market.volume_24h_usd.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
