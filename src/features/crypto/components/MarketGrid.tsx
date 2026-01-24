import type { CryptoMarket } from '@/features/crypto/types'
import { MarketCard } from '@/features/crypto/components/MarketCard'

type Props = {
  markets: CryptoMarket[]
}

export function MarketGrid({ markets }: Props) {
  if (markets.length === 0) {
    return (
      <div className="py-10 text-center text-gray-500">
        No market data available
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {markets.map((market) => (
        <MarketCard
          key={market.symbol}
          market={market}
        />
      ))}
    </div>
  )
}
