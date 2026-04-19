interface FilterBtnProps {
  label: string
  active: boolean
  onClick: () => void
}

export default function FilterBtn({ label, active, onClick }: FilterBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`font-body text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200 cursor-pointer ${
        active
          ? 'bg-orange text-white border-orange'
          : 'bg-transparent text-muted border-border hover:text-cream hover:border-white/30'
      }`}
    >
      {label}
    </button>
  )
}
