import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import type { CryptoMarket } from '@/features/crypto/types'

export function useCryptoMarkets(symbols: string[]) {
  const [data, setData] = useState<CryptoMarket[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const results = await Promise.all(
          symbols.map(async (symbol) => {
            const res = await api.get(`/crypto/${symbol}/price`)
            return res.data
          }),
        )
        setData(results)
      } catch {
        setError('Failed to load market data')
      } finally {
        setLoading(false)
      }
    }

    if (symbols.length) load()
  }, [symbols])

  return { data, loading, error }
}
