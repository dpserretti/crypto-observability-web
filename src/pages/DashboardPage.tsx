import { useState } from 'react'

import { CoinSelect } from '@/features/crypto/components/CoinSelect'
import { MarketCard } from '@/features/crypto/components/MarketCard'
import { MarketCardSkeleton } from '@/features/crypto/components/MarketCardSkeleton'
import { MarketHistoryChart } from '@/features/crypto/components/MarketHistoryChart'
import { MarketHistorySkeleton } from '@/features/crypto/components/MarketHistorySkeleton'
import { DaysToggle } from '@/features/crypto/components/HistoryRangeToggle'

import { useCoins } from '@/features/crypto/useCoins'
import { useMarket } from '@/features/crypto/useMarket'
import { useMarketHistory } from '@/features/crypto/useMarketHistory'

export default function DashboardPage() {
  /** ---------------------------
   * State
   * -------------------------- */
  const [selectedCoin, setSelectedCoin] = useState('bitcoin')
  const [days, setDays] = useState<7 | 30 | 90>(7)

  /** ---------------------------
   * Data hooks
   * -------------------------- */
  const {
    data: coins,
    loading: coinsLoading,
  } = useCoins()

  const {
    data: market,
    loading: marketLoading,
    error: marketError,
  } = useMarket(selectedCoin)

  const {
    data: history,
    loading: historyLoading,
  } = useMarketHistory(selectedCoin, days)

  /** ---------------------------
   * Render
   * -------------------------- */
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-white">
          Crypto Dashboard
        </h1>

        {!coinsLoading && (
          <CoinSelect
            coins={coins}
            value={selectedCoin}
            onChange={setSelectedCoin}
          />
        )}
      </header>

      {/* Market card */}
      <section>
        {marketLoading ? (
          <MarketCardSkeleton />
        ) : marketError ? (
          <p className="text-red-500">
            Failed to load market data
          </p>
        ) : market ? (
          <MarketCard market={market} />
        ) : null}
      </section>

      {/* History + toggle */}
      <section className="rounded-lg bg-slate-900 p-6 shadow space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Price history
          </h2>

          <DaysToggle
            value={days}
            onChange={setDays}
          />
        </div>

        {historyLoading ? (
          <MarketHistorySkeleton />
        ) : (
          <MarketHistoryChart data={history} />
        )}
      </section>
    </div>
  )
}
