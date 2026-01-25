import type { CryptoMarket } from '../types'
import { MarketCard } from './MarketCard'

type Props = {
  data: CryptoMarket[]
}

export function MarketGrid({ data }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {data.map((market) => (
        <MarketCard key={market.symbol} market={market} />
      ))}
    </div>
  )
}
