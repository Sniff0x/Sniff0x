/**
 * Core token security scanner
 * Aggregates GoPlus + DexScreener data into a unified risk report
 */

const { getSecurityData } = require('./api/goplus');
const { getMarketData } = require('./api/dexscreener');
const { calculateRiskScore } = require('./utils/riskScore');
const { formatReport } = require('./utils/formatter');

/**
 * Scan a token contract address and return a full security report
 * @param {string} address - Token contract address on Base chain
 * @returns {Promise<Object>} Security report with risk score
 */
async function scanToken(address) {
  if (!address || !/^0x[a-fA-F0-9]{40}$/.test(address)) {
    throw new Error('Invalid contract address');
  }

  const [securityData, marketData] = await Promise.all([
    getSecurityData(address),
    getMarketData(address),
  ]);

  const riskScore = calculateRiskScore(securityData);
  return formatReport({ address, securityData, marketData, riskScore });
}

module.exports = { scanToken };
