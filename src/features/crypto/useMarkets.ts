import { useEffect, useMemo, useState } from 'react'
import { api } from '@/services/api'
import type { CryptoMarket } from './types'

export function useMarkets(symbols: string[]) {
  const [data, setData] = useState<CryptoMarket[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const symbolsKey = useMemo(
    () => symbols.join(','),
    [symbols]
  )

  useEffect(() => {
    if (symbols.length === 0) return

    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)

      try {
        const responses = await Promise.all(
          symbols.map((symbol) =>
            api
              .get(`/crypto/${symbol}/price`)
              .then((res) => res.data)
          )
        )

        if (!cancelled) {
          setData(responses)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbolsKey])

  return { data, loading, error }
}
