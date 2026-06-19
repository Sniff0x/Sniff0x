/**
 * Risk score calculator (0–100, higher = safer)
 * Weights each security factor and returns a composite score
 */

function calculateRiskScore(data) {
  let score = 100;
  const penalties = [];

  if (data.is_honeypot === '1') {
    score -= 60;
    penalties.push({ reason: 'Honeypot detected', penalty: -60 });
  }

  if (data.is_mintable === '1') {
    score -= 20;
    penalties.push({ reason: 'Token is mintable', penalty: -20 });
  }

  if (data.is_blacklisted === '1') {
    score -= 15;
    penalties.push({ reason: 'Blacklist function exists', penalty: -15 });
  }

  if (data.is_open_source !== '1') {
    score -= 10;
    penalties.push({ reason: 'Contract not verified', penalty: -10 });
  }

  const sellTax = parseFloat(data.sell_tax || '0');
  if (sellTax > 0.1) {
    score -= 20;
    penalties.push({ reason: `High sell tax: ${(sellTax * 100).toFixed(1)}%`, penalty: -20 });
  }

  const top10 = parseFloat(data.top10_holder_ratio || '0');
  if (top10 > 0.8) {
    score -= 15;
    penalties.push({ reason: `Top 10 holders own ${(top10 * 100).toFixed(0)}%`, penalty: -15 });
  }

  return { score: Math.max(0, score), penalties };
}

module.exports = { calculateRiskScore };
