export interface RiskLevel {
  label: 'SAFE' | 'MODERATE' | 'DANGEROUS'
  emoji: string
  color: string
}

export interface RiskScore {
  score: number
  penalties: Array<{ reason: string; penalty: number }>
}

export interface SecurityData {
  isHoneypot: boolean
  mintable: boolean
  hasBlacklist: boolean
  isProxyContract: boolean
  isOpenSource: boolean
  buyTax?: string
  sellTax?: string
  holderCount?: string
  top10HolderRatio?: string
}

export interface MarketData {
  priceUsd?: string
  volume24h?: number
  liquidity?: number
  fdv?: number
  pairAddress?: string
  dexId?: string
  noPairs?: boolean
}

export interface ScanResult {
  address: string
  scannedAt: string
  riskScore: RiskScore
  riskLevel: RiskLevel
  security: SecurityData
  market: MarketData
}
