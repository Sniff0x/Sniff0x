'use client'

import { useEffect, useState } from 'react'
import { Trophy, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import Badge from './ui/Badge'

interface LeaderboardEntry {
  rank: number
  address: string
  name: string
  score: number
  riskLevel: string
  volume24h?: number
  updatedAt: number
}

export default function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<'safe' | 'risky'>('safe')

  useEffect(() => {
    fetch('/api/leaderboard')
      .then((r) => r.json())
      .then((data) => setEntries(data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const filtered = tab === 'safe'
    ? [...entries].sort((a, b) => b.score - a.score)
    : [...entries].sort((a, b) => a.score - b.score)

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-6 h-6 text-yellow-400" />
        <h2 className="text-2xl font-bold text-white">Leaderboard</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {(['safe', 'risky'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
              tab === t
                ? 'bg-brand-blue text-brand-dark'
                : 'bg-white/5 text-gray-400 hover:text-white'
            }`}
          >
            {t === 'safe' ? '✅ Safest' : '🚨 Riskiest'}
          </button>
        ))}
      </div>

      {/* Table */}
      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading leaderboard...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-500">No tokens scanned yet. Be the first! 🐶</div>
      ) : (
        <div className="space-y-2">
          {filtered.map((entry, i) => (
            <div
              key={entry.address}
              className="flex items-center gap-4 bg-brand-card border border-brand-border rounded-xl px-4 py-3 hover:border-brand-blue/40 transition-colors"
            >
              <span className="text-gray-500 text-sm font-mono w-6 text-center">{i + 1}</span>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{entry.name || 'Unknown'}</p>
                <p className="text-gray-500 text-xs font-mono truncate">{entry.address}</p>
              </div>
              <Badge level={entry.riskLevel} small />
              <span className="font-bold text-lg" style={{ color: entry.score >= 80 ? '#00C853' : entry.score >= 50 ? '#FFD600' : '#D50000' }}>
                {entry.score}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
