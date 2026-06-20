/**
 * Risk scoring engine (0–100, higher = safer)
 */

import { GoPlusResult } from './goplus'

export interface Penalty {
  reason: string
  penalty: number
}

export interface RiskScore {
  score: number
  penalties: Penalty[]
}

export function calculateRiskScore(data: GoPlusResult): RiskScore {
  let score = 100
  const penalties: Penalty[] = []

  const deduct = (reason: string, amount: number) => {
    score -= amount
    penalties.push({ reason, penalty: -amount })
  }

  if (data.is_honeypot === '1')    deduct('Honeypot detected', 60)
  if (data.is_mintable === '1')    deduct('Token is mintable', 20)
  if (data.is_blacklisted === '1') deduct('Blacklist function exists', 15)
  if (data.is_open_source !== '1') deduct('Contract not verified', 10)
  if (data.is_proxy === '1')       deduct('Proxy contract (upgradeable)', 5)

  const sellTax = parseFloat(data.sell_tax ?? '0')
  if (sellTax > 0.1)  deduct(`High sell tax (${(sellTax * 100).toFixed(1)}%)`, 20)
  else if (sellTax > 0.05) deduct(`Moderate sell tax (${(sellTax * 100).toFixed(1)}%)`, 10)

  const top10 = parseFloat(data.top10_holder_ratio ?? '0')
  if (top10 > 0.8)    deduct(`Top 10 hold ${(top10 * 100).toFixed(0)}% supply`, 15)
  else if (top10 > 0.6) deduct(`Top 10 hold ${(top10 * 100).toFixed(0)}% supply`, 5)

  return { score: Math.max(0, score), penalties }
}

export function getRiskLevel(score: number): { label: string; emoji: string; color: string } {
  if (score >= 80) return { label: 'SAFE',      emoji: '✅', color: '#00C853' }
  if (score >= 50) return { label: 'MODERATE',  emoji: '⚠️', color: '#FFD600' }
  return              { label: 'DANGEROUS', emoji: '🚨', color: '#D50000' }
}
