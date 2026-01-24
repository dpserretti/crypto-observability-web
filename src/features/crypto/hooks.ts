import { useEffect, useState, useCallback } from 'react'
import { fetchCryptoMarket } from '@/features/crypto/api'
import type { CryptoMarket } from '@/features/crypto/types'

export function useCryptoMarket(symbol: string) {
  const [data, setData] = useState<CryptoMarket | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    try {
      setLoading(true)
      const result = await fetchCryptoMarket(symbol)
      setData(result)
      setError(null)
    } catch {
      setError('Failed to load market data')
    } finally {
      setLoading(false)
    }
  }, [symbol])

  useEffect(() => {
    load()
    const id = setInterval(load, 30_000)
    return () => clearInterval(id)
  }, [load])


  return { data, loading, error }
}
