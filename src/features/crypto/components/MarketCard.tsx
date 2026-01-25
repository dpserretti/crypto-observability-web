import type { CryptoMarket } from '../types'

type Props = {
  market: CryptoMarket
}

export function MarketCard({ market }: Props) {
  const price =
    typeof market.price_usd === 'number'
      ? market.price_usd.toFixed(2)
      : '--'

  const change =
    typeof market.price_change_24h === 'number'
      ? market.price_change_24h.toFixed(2)
      : '--'

  const changePct =
    typeof market.price_change_percentage_24h === 'number'
      ? market.price_change_percentage_24h.toFixed(2)
      : '--'

  return (
    <div className="rounded-lg bg-white p-6 shadow dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold uppercase">
          {market.symbol}
        </h2>

        {market.cached && (
          <span className="rounded bg-yellow-200 px-2 py-0.5 text-xs text-yellow-900">
            cached
          </span>
        )}
      </div>

      <div className="mt-4 text-3xl font-bold">
        ${price}
      </div>

      <div
        className={`mt-2 text-sm ${
          Number(market.price_change_24h) >= 0
            ? 'text-green-500'
            : 'text-red-500'
        }`}
      >
        {change} ({changePct}%)
      </div>

      <div className="mt-4 text-sm text-slate-400">
        <div>
          Market cap: $
          {market.market_cap_usd?.toLocaleString() ?? '--'}
        </div>
        <div>
          Volume 24h: $
          {market.volume_24h_usd?.toLocaleString() ?? '--'}
        </div>
      </div>
    </div>
  )
}
