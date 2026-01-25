import type { CryptoMarket } from '../types'

interface Props {
  market: CryptoMarket
}

export function MarketCard({ market }: Props) {
  if (!market || market.price_usd == null) {
    return null
  }

  const price = market.price_usd.toFixed(2)

  return (
    <div className="rounded-lg bg-slate-900 p-6 shadow">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold uppercase">
          {market.symbol}
        </h3>

        {market.cached && (
          <span className="rounded bg-yellow-200 px-2 py-1 text-xs text-black">
            cached
          </span>
        )}
      </div>

      <div className="mt-4 text-3xl font-bold">${price}</div>

      <div className="mt-2 text-sm text-gray-400">
        Market cap: ${market.market_cap_usd?.toLocaleString() ?? '-'}
      </div>
      <div className="text-sm text-gray-400">
        Volume 24h: ${market.volume_24h_usd?.toLocaleString() ?? '-'}
      </div>
    </div>
  )
}
