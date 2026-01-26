import type { CryptoMarket } from '../types'
import { formatUSD, formatCompactUSD, formatPercentage } from '@/utils/formatters'

interface Props {
  market: CryptoMarket
}

export function MarketCard({ market }: Props) {
  if (!market || market.price_usd == null) {
    return null
  }

  const priceChangeClass =
    market.price_change_percentage_24h != null
      ? market.price_change_percentage_24h >= 0
        ? 'text-emerald-400'
        : 'text-red-400'
      : 'text-slate-400'

  return (
    <div className="rounded-lg bg-slate-900 p-6 shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold uppercase">
          {market.symbol}
        </h3>

        {market.cached && (
          <span className="rounded bg-yellow-200 px-2 py-1 text-xs text-black">
            cached
          </span>
        )}
      </div>

      <div className="mt-4 text-3xl font-bold">
        {formatUSD(market.price_usd)}
      </div>

      <div className={`mt-1 text-sm ${priceChangeClass}`}>
        {formatPercentage(market.price_change_percentage_24h)} (24h)
      </div>

      <div className="mt-3 text-sm text-slate-400">
        Market cap: {formatCompactUSD(market.market_cap_usd)}
      </div>

      <div className="text-sm text-slate-400">
        Volume 24h: {formatCompactUSD(market.volume_24h_usd)}
      </div>
    </div>
  )
}
