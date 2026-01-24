import { api } from '@/services/api'
import type { CryptoMarket } from '@/features/crypto/types'

export async function fetchCryptoMarket(
  symbol: string,
): Promise<CryptoMarket> {
  const { data } = await api.get(`/crypto/${symbol}/market`)
  return data
}
