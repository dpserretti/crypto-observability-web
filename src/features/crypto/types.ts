export interface CryptoCoin {
    id: string
    symbol: string
    name: string
}

export interface CryptoMarket {
    symbol: string
    price_usd: number
    price_change_24h: number
    price_change_percentage_24h: number
    market_cap_usd: number
    volume_24h_usd: number
    cached: boolean
    last_updated: string
}