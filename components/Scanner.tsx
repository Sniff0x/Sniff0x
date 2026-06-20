'use client'

import { useState } from 'react'
import { Search, AlertCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { ScanResult } from '@/types/scan'
import SafetyCard from './SafetyCard'
import Spinner from './ui/Spinner'

const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/

export default function Scanner() {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ScanResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleScan = async () => {
    const trimmed = address.trim()
    if (!ADDRESS_REGEX.test(trimmed)) {
      toast.error('Invalid contract address. Must be a valid 0x… address.')
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch(`/api/scan/${trimmed}`)
      if (!res.ok) throw new Error(`Server error: ${res.status}`)
      const data: ScanResult = await res.json()
      setResult(data)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Scan failed'
      setError(msg)
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full max-w-2xl mx-auto px-4">
      {/* Input Row */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleScan()}
            placeholder="Paste token contract address (0x...)"
            className="w-full pl-10 pr-4 py-3.5 bg-brand-card border border-brand-border rounded-xl text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-brand-blue transition-colors"
          />
        </div>
        <button
          onClick={handleScan}
          disabled={loading}
          className="px-6 py-3.5 bg-gradient-brand text-brand-dark font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
        >
          {loading ? <Spinner size="sm" /> : '🔍 Sniff'}
        </button>
      </div>

      {/* Error State */}
      {error && (
        <div className="mt-4 flex items-center gap-2 text-red-400 text-sm bg-red-900/20 border border-red-900/30 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="mt-6">
          <SafetyCard report={result} />
        </div>
      )}
    </section>
  )
}
