/**
 * DexScreener API client
 */

import axios from 'axios'

const BASE_URL = process.env.DEXSCREENER_BASE_URL ?? 'https://api.dexscreener.com/latest'

export interface MarketData {
  priceUsd?: string
  volume24h?: number
  liquidity?: number
  fdv?: number
  pairAddress?: string
  dexId?: string
  noPairs?: boolean
}

/**
 * Fetch live market data for a token on Base chain
 */
export async function getMarketData(address: string): Promise<MarketData> {
  const { data } = await axios.get(`${BASE_URL}/dex/tokens/${address}`, { timeout: 10000 })

  if (!data.pairs?.length) return { noPairs: true }

  const basePairs = (data.pairs as any[]).filter((p) => p.chainId === 'base')
  if (!basePairs.length) return { noPairs: true }

  const best = basePairs.sort((a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0))[0]

  return {
    priceUsd: best.priceUsd,
    volume24h: best.volume?.h24,
    liquidity: best.liquidity?.usd,
    fdv: best.fdv,
    pairAddress: best.pairAddress,
    dexId: best.dexId,
  }
}
