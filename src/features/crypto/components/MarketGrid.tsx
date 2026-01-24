import type { CryptoMarket } from '@/features/crypto/types'
import { MarketCard } from '@/features/crypto/components/MarketCard'

type MarketGridProps = {
  data: CryptoMarket
}

export function MarketGrid({ data }: MarketGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      <MarketCard market={data} />
    </div>
  )
}
