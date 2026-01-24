import { useCryptoMarket } from '@/features/crypto/hooks'
import { MarketGrid } from '@/features/crypto/components/MarketGrid'

export default function DashboardPage() {
  const { data, loading, error } = useCryptoMarket('bitcoin')

  if (loading) return <p>Loading market data...</p>
  if (error) return <p className="text-red-600">{error}</p>
  if (!data) return null

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Bitcoin Market</h1>
      <MarketGrid data={data} />
    </div>
  )
}
