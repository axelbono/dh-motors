interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  subtitleVariant?: 'normal' | 'label'
}

export default function SectionHeader({ label, title, subtitle, subtitleVariant = 'normal' }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="font-body text-[0.7rem] tracking-widest uppercase text-orange mb-2 flex items-center gap-3">
        <span className="inline-block w-6 h-px bg-orange" />
        {label}
      </p>
      <h2
        className="font-display leading-none tracking-wide"
        style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && subtitleVariant === 'label' ? (
        <p className="font-body text-base text-orange mt-3 flex items-center gap-3 tracking-wide">
          <span className="inline-block w-6 h-px bg-orange" />
          {subtitle}
        </p>
      ) : subtitle ? (
        <p className="font-body text-sm text-cream/80 mt-3 max-w-md leading-relaxed tracking-wide">{subtitle}</p>
      ) : null}
    </div>
  )
}
