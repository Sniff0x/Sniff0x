/**
 * Data formatters for scan reports and UI output
 */

function formatReport({ address, securityData, marketData, riskScore }) {
  return {
    address,
    scannedAt: new Date().toISOString(),
    riskScore,
    riskLevel: getRiskLevel(riskScore),
    security: {
      isHoneypot: securityData.is_honeypot === '1',
      mintable: securityData.is_mintable === '1',
      hasBlacklist: securityData.is_blacklisted === '1',
      isProxyContract: securityData.is_proxy === '1',
      isOpenSource: securityData.is_open_source === '1',
      buyTax: securityData.buy_tax,
      sellTax: securityData.sell_tax,
      holderCount: securityData.holder_count,
      top10HolderRatio: securityData.top10_holder_ratio,
    },
    market: marketData,
  };
}

function getRiskLevel(score) {
  if (score >= 80) return { label: 'SAFE', emoji: '✅', color: '#00C853' };
  if (score >= 50) return { label: 'MODERATE', emoji: '⚠️', color: '#FFD600' };
  return { label: 'DANGEROUS', emoji: '🚨', color: '#D50000' };
}

function formatUsd(value) {
  if (!value) return 'N/A';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact' }).format(value);
}

module.exports = { formatReport, getRiskLevel, formatUsd };
