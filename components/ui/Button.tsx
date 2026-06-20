import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export default function Button({ variant = 'primary', size = 'md', className, children, ...props }: Props) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-gradient-brand text-brand-dark hover:opacity-90': variant === 'primary',
          'bg-white/5 text-white border border-white/10 hover:bg-white/10': variant === 'secondary',
          'text-gray-400 hover:text-white': variant === 'ghost',
          'text-xs px-3 py-2': size === 'sm',
          'text-sm px-4 py-2.5': size === 'md',
          'text-base px-6 py-3.5': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
