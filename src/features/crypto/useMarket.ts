import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import type { CryptoMarket } from './types'

export function useMarket(symbol: string) {
  const [data, setData] = useState<CryptoMarket | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!symbol) return

    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)

      try {
        const res = await api.get(`/crypto/${symbol}`)
        if (!cancelled) {
          setData(res.data)
        }
      } catch {
        if (!cancelled) {
          setError('Failed to load market data')
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
  }, [symbol])

  return { data, loading, error }
}
