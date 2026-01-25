import { useMemo, useState } from 'react'
import { useCoins } from '@/features/crypto/useCoins'
import { useMarkets } from '@/features/crypto/useMarkets'
import { MarketGrid } from '@/features/crypto/components/MarketGrid'
import { CoinSelect } from '@/features/crypto/components/CoinSelect'

export default function DashboardPage() {
  const { data: coins, loading: coinsLoading } = useCoins()
  const [selectedCoinId, setSelectedCoinId] = useState('bitcoin')

  const symbols = useMemo(() => [selectedCoinId], [selectedCoinId])

  const {
    data: markets,
    loading: marketLoading,
    error,
  } = useMarkets(symbols)

  if (coinsLoading) return <p>Loading coins...</p>

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Market Dashboard</h1>

      <CoinSelect
        coins={coins}
        value={selectedCoinId}
        onChange={setSelectedCoinId}
      />

      {marketLoading && <p>Loading market data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <MarketGrid data={markets} />
    </div>
  )
}
