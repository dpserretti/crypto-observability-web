import { useEffect, useState } from 'react'
import { api } from '@/services/api'

export interface MarketHistoryPoint {
  timestamp: number
  price: number
}

export function useMarketHistory(symbol: string, days = 7) {
  const [data, setData] = useState<MarketHistoryPoint[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!symbol) return

    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)

      try {
        const res = await api.get(
          `/crypto/${symbol}/history`,
          { params: { days } }
        )

        if (!cancelled) {
          setData(res.data)
        }
      } catch {
        if (!cancelled) {
          setError('Failed to load history')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [symbol, days])

  return { data, loading, error }
}
