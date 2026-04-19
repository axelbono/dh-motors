import { Auto } from '../../data/autos'
import { useFilter } from '../../hooks/useFilter'
import CarCard from '../ui/CarCard'
import FilterBtn from '../ui/FilterBtn'
import SectionHeader from '../ui/SectionHeader'

type Filtro = 'todos' | 'nuevo' | 'seminuevo'

const filtros: { value: Filtro; label: string }[] = [
  /*{ value: 'todos', label: 'Todos' },
  { value: 'nuevo', label: 'Nuevos' },
  { value: 'seminuevo', label: 'Seminuevos' },*/
]

export default function Catalogo() {
  const { filtro, setFiltro, autosFiltrados } = useFilter()

  const handleConsultar = (auto: Auto) => {
    // Dispatch custom event to pre-fill the contact form
    const event = new CustomEvent('prefillContact', { 
      detail: { 
        mensaje: `Hola, me interesa obtener más información sobre el ${auto.marca} ${auto.nombre} (${auto.año}).` 
      } 
    })
    window.dispatchEvent(event)

    const el = document.getElementById('contacto')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="catalogo" className="px-[5vw] py-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <SectionHeader
            label="Un poco de nuestro catálogo"
            title="Los más destacados"
            subtitle="Buscas un auto en específico? Contáctanos y te ayudamos a encontrarlo."
            subtitleVariant="label"
          />
        </div>
        {/* <button className="font-body text-[0.7rem] uppercase tracking-widest text-muted border border-border px-4 py-2 hover:text-cream hover:border-white/30 transition-all duration-200 cursor-pointer bg-transparent whitespace-nowrap self-start sm:self-auto mb-6 sm:mb-0">
          Ver todos →
        </button> */}
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-8">
        {filtros.map((f) => (
          <FilterBtn
            key={f.value}
            label={f.label}
            active={filtro === f.value}
            onClick={() => setFiltro(f.value)}
          />
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {autosFiltrados.map((auto) => (
          <CarCard key={auto.id} auto={auto} onConsultar={handleConsultar} />
        ))}
      </div>

      {autosFiltrados.length === 0 && (
        <p className="text-center text-muted font-body text-sm py-16">
          No hay vehículos disponibles con ese filtro.
        </p>
      )}
    </section>
  )
}
