# Sniff0x Architecture

## Overview

Sniff0x is a Node.js/Express REST API that aggregates security and market data from multiple sources to provide a unified risk assessment for Clanker tokens on Base chain.

## Data Flow

```
Client Request (address)
        ↓
  Input Validation
        ↓
  ┌─────────────────────────┐
  │  Parallel API Calls     │
  │  ├── GoPlus Labs        │
  │  └── DexScreener        │
  └─────────────────────────┘
        ↓
  Risk Score Calculation
        ↓
  Format & Return Report
```

## Components

### Scanner (`src/scanner.js`)
Orchestrates the full scan pipeline. Validates input, calls both APIs concurrently with `Promise.all`, and assembles the final report.

### GoPlus Integration (`src/api/goplus.js`)
Calls the GoPlus Labs Token Security API for Base chain (chainId: 8453). Returns raw security flags like honeypot status, mintability, blacklist functions, and tax rates.

### DexScreener Integration (`src/api/dexscreener.js`)
Fetches live market data. Filters for Base chain pairs and returns the highest-liquidity pair's stats.

### Risk Score Engine (`src/utils/riskScore.js`)
Weighted penalty system. Starts at 100 and subtracts points for each risk factor detected. Returns a 0–100 safety score with a breakdown of penalties.

### Share Card Generator (`src/ui/card.js`)
Produces styled HTML share cards from scan results, suitable for screenshot sharing on social media.

## Caching Strategy

- Security data: cached for 5 minutes (GoPlus data doesn't change rapidly)
- Market data: cached for 30 seconds (price-sensitive)
- Leaderboard: cached for 60 seconds
