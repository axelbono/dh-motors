import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'font-body uppercase tracking-widest transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange'

  const variants = {
    primary:
      'bg-orange text-white border-0 hover:bg-orange-light hover:-translate-y-0.5 active:scale-95',
    secondary:
      'bg-transparent text-cream border border-white/20 hover:border-white/50 hover:-translate-y-0.5 active:scale-95',
    ghost:
      'bg-transparent text-muted border border-border hover:text-cream hover:border-white/30 active:scale-95',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-sm px-8 py-4',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
