import { useState, useEffect } from 'react'
import LogoDHMotors from '../../assets/images/logos/LogoDHMotors-SinFondo.png' // Import the new logo

const navLinks = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Crédito', href: '#credito' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="px-[5vw] py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="leading-none" // Adjust styling for image
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          aria-label="DH Motors inicio"
        >
          <img src={LogoDHMotors} alt="DH Motors Logo" className="h-20 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="font-body text-xs uppercase tracking-widest text-muted hover:text-cream transition-colors duration-200 cursor-pointer bg-transparent border-0"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav('#contacto')}
          className="hidden md:block font-body text-xs uppercase tracking-widest bg-orange text-white px-5 py-2.5 hover:bg-orange-light transition-colors duration-200 cursor-pointer border-0"
        >
          Solicitar información
        </button>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-px bg-cream transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black-2 border-t border-border px-[5vw] py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="font-body text-sm uppercase tracking-widest text-muted hover:text-cream transition-colors text-left cursor-pointer bg-transparent border-0"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contacto')}
            className="mt-2 font-body text-xs uppercase tracking-widest bg-orange text-white px-5 py-3 hover:bg-orange-light transition-colors cursor-pointer border-0 text-left"
          >
            Solicitar info
          </button>
        </div>
      )}
    </header>
  )
}
