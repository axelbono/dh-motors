interface BadgeProps {
  label: string
  variant?: 'orange' | 'muted'
}

export default function Badge({ label, variant = 'orange' }: BadgeProps) {
  const styles = {
    orange: 'bg-orange text-white',
    muted: 'bg-white/10 text-muted',
  }

  return (
    <span
      className={`inline-block text-[0.6rem] font-body font-medium tracking-widest uppercase px-2.5 py-1 ${styles[variant]}`}
    >
      {label}
    </span>
  )
}
