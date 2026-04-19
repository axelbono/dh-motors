import { useState, FormEvent, useRef, useEffect } from 'react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import emailjs from '@emailjs/browser'

interface FormState {
  nombre: string
  telefono: string
  correo: string
  tipo: string
  mensaje: string
}

const initialForm: FormState = {
  nombre: '',
  telefono: '',
  correo: '',
  tipo: 'Información sobre un auto',
  mensaje: '',
}

const tipoOptions = [
  'Información sobre un auto',
  'Tramitar crédito',
  'Cotización',
  'Otro',
]
const steps = [
  {
    num: '01',
    title: 'Elige tu auto',
    desc: 'Dinos qué modelo te interesa o cuál es tu presupuesto.',
  },
  {
    num: '02',
    title: 'Recibe asesoría',
    desc: 'Un asesor te llama para resolver dudas y orientarte.',
  },
  {
    num: '03',
    title: 'Tramita tu crédito',
    desc: 'Te apoyamos con el proceso de financiamiento completo.',
  },
]

export default function Contacto() {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState<FormState>(initialForm)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // Pre-fill message when "Consultar" is clicked in Catalogo
  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent
      if (customEvent.detail?.mensaje) {
        setForm(prev => ({ ...prev, mensaje: customEvent.detail.mensaje }))
      }
    }

    window.addEventListener('prefillContact', handlePrefill)
    return () => window.removeEventListener('prefillContact', handlePrefill)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)
    setError(false)

    // ============================================================
    // USANDO VARIABLES DE ENTORNO (VITE_) PARA SEGURIDAD
    // ============================================================
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    // ============================================================

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log('Email enviado:', result.text)
          setLoading(false)
          setSent(true)
          setForm(initialForm)
          setTimeout(() => setSent(false), 5000)
      }, (error) => {
          console.error('Error al enviar:', error.text)
          setLoading(false)
          setError(true)
          setTimeout(() => setError(false), 5000)
      })
  }

  const inputClass =
    'w-full bg-white/[0.04] border border-border text-cream font-body text-sm font-light px-4 py-3 outline-none focus:border-orange transition-colors duration-200 placeholder:text-muted/50'

  const labelClass = 'block font-body text-[0.65rem] uppercase tracking-widest text-muted mb-1.5'

  return (
    <section
      id="contacto"
      className="border-t border-border px-[5vw] py-24 grid md:grid-cols-2 gap-16 md:gap-24 items-start"
    >
      {/* Left — intro */}
      <div>
        <SectionHeader
          label="Contáctanos"
          title="Solicita<br/>información"
          subtitle="Déjanos tus datos y un asesor te contactará en menos de 24 horas."
        />

        <div className="flex flex-col gap-6 mt-8">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-5 items-start">
              <span className="font-display text-xl text-orange leading-none pt-0.5 min-w-[2rem]">
                {s.num}
              </span>
              <div>
                <p className="font-body text-sm text-cream mb-0.5">{s.title}</p>
                <p className="font-body text-xs text-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <div className="bg-black-2 border border-border p-8">
        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className={labelClass} htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                name="nombre" // Esto será {{nombre}} en tu template de EmailJS
                type="text"
                required
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                name="telefono" // Esto será {{telefono}} en tu template de EmailJS
                type="tel"
                required
                placeholder="Tu número"
                value={form.telefono}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className={labelClass} htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              name="correo" // Esto será {{correo}} en tu template de EmailJS
              type="email"
              required
              placeholder="correo@ejemplo.com"
              value={form.correo}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="mb-4">
            <label className={labelClass} htmlFor="tipo">Tipo de solicitud</label>
            <select
              id="tipo"
              name="tipo" // Esto será {{tipo}} en tu template de EmailJS
              value={form.tipo}
              onChange={handleChange}
              className={inputClass + ' cursor-pointer'}
              style={{ backgroundColor: '#141414' }}
            >
              {tipoOptions.map((o) => (
                <option key={o} value={o} style={{ background: '#1a1a1a' }}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className={labelClass} htmlFor="mensaje">Mensaje (opcional)</label>
            <textarea
              id="mensaje"
              name="mensaje" // Esto será {{mensaje}} en tu template de EmailJS
              rows={4}
              placeholder="¿Qué auto te interesa? ¿Tienes alguna pregunta?"
              value={form.mensaje}
              onChange={handleChange}
              className={inputClass + ' resize-none'}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className={`w-full justify-center transition-all ${sent ? '!bg-green-700' : error ? '!bg-red-700' : ''}`}
            disabled={loading || sent}
          >
            {sent ? '✓ Solicitud enviada' : error ? '✕ Error al enviar' : loading ? 'Enviando...' : 'Enviar solicitud'}
          </Button>
          
          {error && (
            <p className="mt-4 font-body text-xs text-red-500 text-center">
              Hubo un problema. Por favor intenta de nuevo o contáctanos por otro medio.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
