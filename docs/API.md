# Sniff0x API Reference

Base URL: `https://your-deployment.com`

## Endpoints

### GET /health
Health check.

**Response:**
```json
{ "status": "ok", "version": "1.0.0", "chain": "base" }
```

---

### GET /api/scan/:address
Scan a token contract address.

**Parameters:**
- `address` (path) — ERC-20 contract address on Base chain

**Response:**
```json
{
  "address": "0x...",
  "scannedAt": "2025-01-01T00:00:00.000Z",
  "riskScore": { "score": 85, "penalties": [] },
  "riskLevel": { "label": "SAFE", "emoji": "✅", "color": "#00C853" },
  "security": {
    "isHoneypot": false,
    "mintable": false,
    "hasBlacklist": false,
    "isOpenSource": true,
    "buyTax": "0",
    "sellTax": "0",
    "holderCount": "1234"
  },
  "market": {
    "priceUsd": "0.00042",
    "volume24h": 15000,
    "liquidity": 50000
  }
}
```

---

### GET /api/leaderboard
Returns top 20 safest tokens by score.

**Response:**
```json
[
  { "address": "0x...", "name": "MYTOKEN", "score": 95, "updatedAt": 1234567890 }
]
```

---

## Risk Score Guide

| Score | Level | Meaning |
|---|---|---|
| 80–100 | ✅ SAFE | Low risk token |
| 50–79 | ⚠️ MODERATE | Proceed with caution |
| 0–49 | 🚨 DANGEROUS | High risk, likely scam |
