/**
 * GoPlus Labs API client
 * Base Chain ID: 8453
 */

import axios from 'axios'

const BASE_URL = process.env.GOPLUS_BASE_URL ?? 'https://api.gopluslabs.io/api/v1'
const CHAIN_ID = '8453'

export interface GoPlusResult {
  is_honeypot?: string
  is_mintable?: string
  is_blacklisted?: string
  is_open_source?: string
  is_proxy?: string
  buy_tax?: string
  sell_tax?: string
  holder_count?: string
  top10_holder_ratio?: string
  lp_holder_count?: string
  total_supply?: string
  creator_address?: string
  owner_address?: string
}

/**
 * Fetch security analysis from GoPlus Labs for a token on Base chain
 */
export async function getSecurityData(address: string): Promise<GoPlusResult> {
  const url = `${BASE_URL}/token_security/${CHAIN_ID}?contract_addresses=${address.toLowerCase()}`

  const headers: Record<string, string> = {}
  if (process.env.GOPLUS_API_KEY) {
    headers['Authorization'] = `Bearer ${process.env.GOPLUS_API_KEY}`
  }

  const { data } = await axios.get(url, { headers, timeout: 12000 })

  if (data.code !== 1) {
    throw new Error(`GoPlus error: ${data.message ?? 'Unknown error'}`)
  }

  return (data.result?.[address.toLowerCase()] as GoPlusResult) ?? {}
}
