/**
 * DexScreener API wrapper
 * Fetches live market data for tokens on Base chain
 */

const axios = require('axios');

const BASE_URL = process.env.DEXSCREENER_BASE_URL || 'https://api.dexscreener.com/latest';

/**
 * Fetch token market data from DexScreener
 * @param {string} address - Token contract address
 * @returns {Promise<Object>} Market data (price, volume, liquidity, etc.)
 */
async function getMarketData(address) {
  const url = `${BASE_URL}/dex/tokens/${address}`;

  const { data } = await axios.get(url, { timeout: 10000 });

  if (!data.pairs || data.pairs.length === 0) {
    return { noPairs: true };
  }

  // Return the most liquid Base chain pair
  const basePairs = data.pairs.filter((p) => p.chainId === 'base');
  const best = basePairs.sort((a, b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0))[0];

  return {
    priceUsd: best?.priceUsd,
    volume24h: best?.volume?.h24,
    liquidity: best?.liquidity?.usd,
    fdv: best?.fdv,
    pairAddress: best?.pairAddress,
    dexId: best?.dexId,
  };
}

module.exports = { getMarketData };
