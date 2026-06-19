/**
 * GoPlus Labs API wrapper
 * Fetches token security data for Base chain (chainId: 8453)
 */

const axios = require('axios');

const BASE_URL = process.env.GOPLUS_BASE_URL || 'https://api.gopluslabs.io/api/v1';
const CHAIN_ID = '8453'; // Base chain

/**
 * Fetch security analysis from GoPlus Labs
 * @param {string} address - Token contract address
 * @returns {Promise<Object>} GoPlus security result
 */
async function getSecurityData(address) {
  const url = `${BASE_URL}/token_security/${CHAIN_ID}?contract_addresses=${address}`;

  const headers = {};
  if (process.env.GOPLUS_API_KEY) {
    headers['Authorization'] = `Bearer ${process.env.GOPLUS_API_KEY}`;
  }

  const { data } = await axios.get(url, { headers, timeout: 10000 });

  if (data.code !== 1) {
    throw new Error(`GoPlus error: ${data.message}`);
  }

  return data.result[address.toLowerCase()] || {};
}

module.exports = { getSecurityData };
