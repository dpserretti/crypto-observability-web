import { useEffect, useState } from 'react'
import { fetchCoins } from '@/features/crypto/api'
import type { CryptoCoin } from '@/features/crypto/types'

export function useCoins() {
  const [data, setData] = useState<CryptoCoin[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchCoins()
      .then(setData)
      .catch(() => setError('Failed to load coins'))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
