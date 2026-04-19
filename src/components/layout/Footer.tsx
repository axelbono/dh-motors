const footerLinks = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Crédito', href: '#credito' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border px-[5vw] py-8">
      <div className="flex flex-wrap justify-between items-center gap-6">
        <div className="font-display text-2xl tracking-wider leading-none">
          DH<span className="text-orange">.</span>Motors
        </div>

        <nav className="flex gap-8">
          {footerLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="font-body text-[0.7rem] uppercase tracking-widest text-muted hover:text-cream transition-colors duration-200 cursor-pointer bg-transparent border-0"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <p className="font-body text-[0.7rem] text-muted">
          © {new Date().getFullYear()} DH Motors. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
