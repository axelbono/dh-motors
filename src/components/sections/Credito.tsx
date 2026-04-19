import { useCredit } from '../../hooks/useCredit'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'

interface SliderRowProps {
  label: string
  min: number
  max: number
  step: number
  value: number
  display: string
  onChange: (v: number) => void
}

function SliderRow({ label, min, max, step, value, display, onChange }: SliderRowProps) {
  return (
    <div className="mb-5">
      <p className="font-body text-[0.65rem] uppercase tracking-widest text-muted mb-2">{label}</p>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-orange h-px"
        style={{ accentColor: '#F26522' }}
      />
      <p className="font-display text-2xl tracking-wide mt-1">{display}</p>
    </div>
  )
}

export default function Credito() {
  const { precio, setPrecio, enganchePct, setEnganchePct, plazo, setPlazo, mensualidad } =
    useCredit()

  const scrollToContacto = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="credito"
      className="border-t border-border px-[5vw] py-24 grid md:grid-cols-2 gap-16 md:gap-24 items-center"
    >
      {/* Left — copy */}
      <div>
        <SectionHeader
          label="Financiamiento fácil"
          title="Tramita tu<br/>crédito"
          subtitle="Sin importar tu historial crediticio, tenemos una opción para ti. Calcula tu mensualidad y aplica desde esta página."
        />
        <Button size="lg" className="mt-2" onClick={scrollToContacto}>
          Aplicar ahora
        </Button>
      </div>

      {/* Right — calculator */}
      <div className="bg-black-2 border border-border p-8 relative">
        {/* Orange left accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-orange" />

        <p className="font-display text-lg uppercase tracking-wider text-muted mb-6">
          Calculadora de mensualidad
        </p>

        <SliderRow
          label="Precio del auto"
          min={100000}
          max={800000}
          step={10000}
          value={precio}
          display={`$${precio.toLocaleString('es-MX')}`}
          onChange={setPrecio}
        />
        <SliderRow
          label="Enganche"
          min={0}
          max={40}
          step={5}
          value={enganchePct}
          display={`${enganchePct}%`}
          onChange={setEnganchePct}
        />
        <SliderRow
          label="Plazo"
          min={12}
          max={60}
          step={12}
          value={plazo}
          display={`${plazo} meses`}
          onChange={setPlazo}
        />

        {/* Result */}
        <div className="mt-4 border border-orange/20 bg-orange/5 px-5 py-4 flex justify-between items-center">
          <div>
            <p className="font-body text-[0.65rem] uppercase tracking-widest text-muted">
              Mensualidad estimada
            </p>
            <p className="font-body text-[0.6rem] text-muted/60 mt-0.5">Tasa ref. 12% anual</p>
          </div>
          <p className="font-display text-3xl text-orange tracking-wide">
            ${mensualidad.toLocaleString('es-MX')}
          </p>
        </div>
      </div>
    </section>
  )
}
