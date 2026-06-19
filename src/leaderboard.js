/**
 * Leaderboard engine
 * Tracks and ranks tokens by safety score
 */

const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 60 });

const leaderboard = [];

/**
 * Add or update a token on the leaderboard
 * @param {string} address
 * @param {string} name
 * @param {number} score
 */
function updateLeaderboard(address, name, score) {
  const idx = leaderboard.findIndex((t) => t.address === address);
  if (idx > -1) {
    leaderboard[idx] = { address, name, score, updatedAt: Date.now() };
  } else {
    leaderboard.push({ address, name, score, updatedAt: Date.now() });
  }
  cache.del('leaderboard');
}

/**
 * Get top tokens sorted by safety score
 * @param {number} limit
 */
async function getLeaderboard(limit = 20) {
  const cached = cache.get('leaderboard');
  if (cached) return cached;

  const sorted = [...leaderboard]
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  cache.set('leaderboard', sorted);
  return sorted;
}

module.exports = { updateLeaderboard, getLeaderboard };
