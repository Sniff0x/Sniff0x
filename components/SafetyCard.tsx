'use client'

import { Shield, TrendingUp, Users, Lock } from 'lucide-react'
import { ScanResult } from '@/types/scan'
import Badge from './ui/Badge'
import ShareButton from './ShareButton'
import { formatUsd, formatPercent } from '@/lib/utils'

interface Props {
  report: ScanResult
}

export default function SafetyCard({ report }: Props) {
  const { riskScore, riskLevel, security, market } = report

  return (
    <div className="bg-gradient-dark border border-brand-border rounded-2xl p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-xs font-mono mb-1 truncate max-w-xs">
            {report.address}
          </p>
          <Badge level={riskLevel.label} />
        </div>
        <div className="text-right">
          <p className="text-5xl font-black" style={{ color: riskLevel.color }}>
            {riskScore.score}
          </p>
          <p className="text-gray-500 text-xs">/ 100</p>
        </div>
      </div>

      {/* Security Flags */}
      <div className="grid grid-cols-2 gap-3">
        <SecurityRow label="Honeypot" value={security.isHoneypot} danger />
        <SecurityRow label="Mintable" value={security.mintable} danger />
        <SecurityRow label="Blacklist" value={security.hasBlacklist} danger />
        <SecurityRow label="Verified" value={security.isOpenSource} good />
      </div>

      {/* Tax Row */}
      <div className="flex gap-4 text-sm">
        <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
          <p className="text-gray-400 text-xs mb-1">Buy Tax</p>
          <p className="font-bold text-white">{formatPercent(security.buyTax)}</p>
        </div>
        <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
          <p className="text-gray-400 text-xs mb-1">Sell Tax</p>
          <p className="font-bold text-white">{formatPercent(security.sellTax)}</p>
        </div>
        <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
          <p className="text-gray-400 text-xs mb-1">Holders</p>
          <p className="font-bold text-white">{security.holderCount ?? 'N/A'}</p>
        </div>
      </div>

      {/* Market Data */}
      {market && !market.noPairs && (
        <div className="border-t border-brand-border pt-4 grid grid-cols-3 gap-3 text-sm">
          <MarketStat icon={<TrendingUp className="w-3 h-3" />} label="Price" value={`$${market.priceUsd ?? 'N/A'}`} />
          <MarketStat icon={<Users className="w-3 h-3" />} label="Liquidity" value={formatUsd(market.liquidity)} />
          <MarketStat icon={<Lock className="w-3 h-3" />} label="Vol 24h" value={formatUsd(market.volume24h)} />
        </div>
      )}

      {/* Risk Breakdown */}
      {riskScore.penalties.length > 0 && (
        <div className="border-t border-brand-border pt-4">
          <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
            <Shield className="w-3 h-3" /> Risk Factors
          </p>
          <ul className="space-y-1">
            {riskScore.penalties.map((p: { reason: string; penalty: number }, i: number) => (
              <li key={i} className="flex justify-between text-xs">
                <span className="text-gray-300">{p.reason}</span>
                <span className="text-red-400 font-mono">{p.penalty}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Share */}
      <ShareButton report={report} />
    </div>
  )
}

function SecurityRow({ label, value, danger, good }: { label: string; value: boolean; danger?: boolean; good?: boolean }) {
  const active = danger ? value : !value
  const color = good ? (value ? 'text-green-400' : 'text-red-400') : (value ? 'text-red-400' : 'text-green-400')
  return (
    <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 text-xs">
      <span className="text-gray-400">{label}</span>
      <span className={`font-bold ${color}`}>{value ? 'YES' : 'NO'}</span>
    </div>
  )
}

function MarketStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-gray-500 text-xs flex items-center justify-center gap-1 mb-1">{icon} {label}</p>
      <p className="font-bold text-white text-sm">{value}</p>
    </div>
  )
}
