import { api } from '@/services/api'
import type { CryptoMarket, CryptoCoin } from './types'

export async function fetchCoins(): Promise<CryptoCoin[]> {
  const { data } = await api.get('/crypto/coins')
  return data
}

export async function fetchMarket(symbol: string): Promise<CryptoMarket> {
  const { data } = await api.get(`/crypto/${symbol}/market`)
  return data
}
