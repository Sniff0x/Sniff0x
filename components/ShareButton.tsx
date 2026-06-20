'use client'

import { useState } from 'react'
import { Share2, Copy, Check, Twitter } from 'lucide-react'
import toast from 'react-hot-toast'
import { ScanResult } from '@/types/scan'

interface Props {
  report: ScanResult
}

export default function ShareButton({ report }: Props) {
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(false)

  const score = report.riskScore.score
  const level = report.riskLevel.label
  const emoji = report.riskLevel.emoji
  const short = `${report.address.slice(0, 6)}...${report.address.slice(-4)}`

  const tweetText = `🐶 Just sniffed ${short} on @Sniff0x\n\n${emoji} Risk Level: ${level}\n📊 Safety Score: ${score}/100\n\nSniff before you ape 👇\nhttps://sniff0x.vercel.app`
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://sniff0x.vercel.app/scan/${report.address}`)
    setCopied(true)
    toast.success('Link copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-brand-border rounded-xl text-sm text-gray-300 hover:border-brand-blue hover:text-white transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Share Result
      </button>

      {open && (
        <div className="absolute bottom-12 left-0 right-0 bg-brand-card border border-brand-border rounded-xl p-3 flex gap-2 shadow-xl">
          <a
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-[#1DA1F2]/10 border border-[#1DA1F2]/20 rounded-lg text-[#1DA1F2] text-xs hover:bg-[#1DA1F2]/20 transition-colors"
          >
            <Twitter className="w-3 h-3" /> Tweet
          </a>
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs hover:bg-white/10 transition-colors"
          >
            {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      )}
    </div>
  )
}
