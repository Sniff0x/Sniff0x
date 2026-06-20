interface Props {
  level: string
  small?: boolean
}

const levelMap: Record<string, { emoji: string; color: string; bg: string }> = {
  SAFE:      { emoji: '✅', color: '#00C853', bg: '#00C85322' },
  MODERATE:  { emoji: '⚠️', color: '#FFD600', bg: '#FFD60022' },
  DANGEROUS: { emoji: '🚨', color: '#D50000', bg: '#D5000022' },
}

export default function Badge({ level, small }: Props) {
  const config = levelMap[level] ?? levelMap['MODERATE']
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-bold border ${small ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1'}`}
      style={{ color: config.color, background: config.bg, borderColor: `${config.color}44` }}
    >
      {config.emoji} {level}
    </span>
  )
}
