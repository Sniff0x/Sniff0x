/**
 * Share card generator
 * Creates HTML/SVG-based shareable security report cards
 */

const { getRiskLevel, formatUsd } = require('../utils/formatter');

/**
 * Generate an HTML share card for a scan result
 * @param {Object} report - Full scan report
 * @returns {string} HTML string
 */
function generateShareCard(report) {
  const risk = report.riskLevel;
  const truncated = `${report.address.slice(0, 6)}...${report.address.slice(-4)}`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { margin: 0; font-family: -apple-system, sans-serif; background: #0f0f1a; color: white; }
    .card { width: 600px; padding: 32px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
    .logo { font-size: 32px; font-weight: bold; margin-bottom: 8px; }
    .address { color: #888; font-size: 14px; font-family: monospace; }
    .risk-badge { display: inline-block; padding: 6px 16px; border-radius: 100px; font-weight: bold; font-size: 18px; margin: 16px 0; background: ${risk.color}22; color: ${risk.color}; border: 1px solid ${risk.color}44; }
    .score { font-size: 48px; font-weight: 900; color: ${risk.color}; }
    .footer { margin-top: 24px; color: #555; font-size: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">🐶 Sniff0x</div>
    <div class="address">${truncated}</div>
    <div class="risk-badge">${risk.emoji} ${risk.label}</div>
    <div class="score">${report.riskScore.score}<span style="font-size:24px">/100</span></div>
    <div>💧 Liquidity: ${formatUsd(report.market?.liquidity)}</div>
    <div>📊 24h Volume: ${formatUsd(report.market?.volume24h)}</div>
    <div class="footer">sniff0x.base • @Sniff0x</div>
  </div>
</body>
</html>`;
}

module.exports = { generateShareCard };
