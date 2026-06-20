import { clsx } from 'clsx'

interface Props {
  size?: 'sm' | 'md' | 'lg'
}

export default function Spinner({ size = 'md' }: Props) {
  return (
    <div
      className={clsx(
        'animate-spin rounded-full border-2 border-current border-t-transparent',
        {
          'w-3 h-3': size === 'sm',
          'w-5 h-5': size === 'md',
          'w-8 h-8': size === 'lg',
        }
      )}
      role="status"
      aria-label="Loading"
    />
  )
}
