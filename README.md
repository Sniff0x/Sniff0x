<div align="center">

<img src="https://iili.io/Cxpjjqu.png" width="200" alt="Sniff0x Logo">

# Sniff0x 🐶

### The #1 Scam Sniffer for Clanker Tokens on Base Chain

**Scan any Clanker token in seconds. Stay safe. Ape smarter.**

[![Follow @Sniff0x](https://img.shields.io/badge/Follow_@Sniff0x-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Sniff0x)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Base Chain](https://img.shields.io/badge/Base_Chain-0052FF?style=for-the-badge&logo=coinbase&logoColor=white)](https://base.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Sniff0x-4facfe?style=for-the-badge)](https://sniff0x.vercel.app)

---

> 🐶 *Sniff0x sniffs out scams before they sniff out your wallet.*

</div>

---

## 📸 Screenshots

<div align="center">

| Scanner | Safety Card | Leaderboard |
|:---:|:---:|:---:|
| ![Scanner](https://placehold.co/280x180/1a1a2e/4facfe?text=Token+Scanner) | ![Safety Card](https://placehold.co/280x180/1a1a2e/00C853?text=Safety+Card) | ![Leaderboard](https://placehold.co/280x180/1a1a2e/FFD600?text=Leaderboard) |
| *Paste any contract address* | *Instant risk report* | *Community rankings* |

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **Real-time Security Analysis** | GoPlus Labs integration — honeypot detection, rug pull risk, mint authority & more |
| 📊 **Live Market Data** | Price, volume, liquidity & holder stats powered by DexScreener |
| 🖼️ **Shareable Scan Cards** | Auto-generated OG-style cards to share scan results anywhere |
| 🏆 **Community Leaderboard** | Live leaderboard of the safest & most dangerous tokens |
| 📱 **Mobile-first Design** | Fully responsive — built for on-the-go sniping |
| 🎯 **Clanker Native** | Deep integration with the Clanker token ecosystem |
| 🔔 **Risk Alerts** | Get alerted before you ape into a honeypot |
| 🌙 **Dark Mode** | Eye-friendly dark UI by default |

---

## 🛡️ Security Checks Performed

```
✅ Honeypot Detection         — Can you actually sell the token?
✅ Mint Authority             — Can the team print more tokens?
✅ Blacklist Functions        — Can wallets be blocked from trading?
✅ LP Lock Verification       — Is the liquidity pool actually locked?
✅ Top Holder Concentration   — Are whales dangerously dominant?
✅ Contract Verification      — Is source code publicly verified?
✅ Buy / Sell Tax Analysis    — Are there hidden trading taxes?
```

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/Sniff0x/Sniff0x.git
cd Sniff0x

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your API keys

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🚀

---

## 🏗️ Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|---|---|---|
| 🖼️ Framework | **Next.js 14** | App Router, SSR, API Routes |
| 💅 Styling | **Tailwind CSS 3.4** | Utility-first responsive design |
| 🔷 Language | **TypeScript 5** | Type-safe development |
| 🛡️ Security API | **GoPlus Labs** | Token threat intelligence |
| 📈 Market Data | **DexScreener** | Live DEX price & liquidity |
| 🔵 Blockchain | **Base Chain** | Fast, cheap EVM transactions |
| 🤖 Launchpad | **Clanker** | Token creation & community |
| 🚀 Deployment | **Vercel** | Edge-optimized hosting |

</div>

---

## 📁 Project Structure

```
sniff0x/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page / scanner
│   ├── leaderboard/
│   │   └── page.tsx        # Community leaderboard
│   └── api/
│       ├── scan/[address]/
│       │   └── route.ts    # Token scan endpoint
│       └── leaderboard/
│           └── route.ts    # Leaderboard endpoint
├── components/
│   ├── Scanner.tsx         # Main token scanner input
│   ├── SafetyCard.tsx      # Risk report card
│   ├── ShareButton.tsx     # Social share functionality
│   ├── Leaderboard.tsx     # Leaderboard table
│   └── ui/
│       ├── Badge.tsx       # Risk level badge
│       ├── Button.tsx      # Reusable button
│       └── Spinner.tsx     # Loading spinner
├── lib/
│   ├── goplus.ts           # GoPlus Labs API client
│   ├── dexscreener.ts      # DexScreener API client
│   ├── riskScore.ts        # Risk scoring algorithm
│   └── utils.ts            # Shared utilities
├── public/
│   └── og-card.png         # Open Graph image
├── docs/
│   ├── API.md              # API reference
│   └── ARCHITECTURE.md     # Architecture overview
├── .github/
│   └── workflows/
│       └── ci.yml          # CI/CD pipeline
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── .env.example
```

---

## 💰 Tokenomics

<div align="center">

| Category | Allocation | Amount | Status |
|---|---|---|---|
| 🌊 Liquidity Pool | **95%** | 95,000,000,000 | 🔒 Locked Forever |
| 🏦 Creator Vault | **5%** | 5,000,000,000 | 🔒 Locked 30 Days |
| **Total Supply** | **100%** | **100,000,000,000** | ✅ Fixed by Clanker |

**💸 Static Fee: 3%** &nbsp;|&nbsp; **No team tokens** &nbsp;|&nbsp; **No presale**

</div>

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a PR.

```bash
# Fork and clone
git checkout -b feat/your-feature

# Make changes, then
npm run lint
npm run test

# Submit a PR 🚀
```

---

## 📄 License

MIT © 2025 [Sniff0x](https://x.com/Sniff0x)

---

<div align="center">

**Made with ❤️ for the Clanker Ecosystem**

*Sniff before you ape. 🐶*

[![Follow @Sniff0x](https://img.shields.io/badge/Follow_@Sniff0x-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/Sniff0x)
&nbsp;
[![Base Chain](https://img.shields.io/badge/Base-0052FF?style=flat-square&logo=coinbase&logoColor=white)](https://base.org)

</div>
