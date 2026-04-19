import { Auto } from '../../data/autos'
import Badge from './Badge'
import CarIllustration from './CarIllustration'

interface CarCardProps {
  auto: Auto
  onConsultar: (auto: Auto) => void
}

export default function CarCard({ auto, onConsultar }: CarCardProps) {
  return (
    <article className="bg-black-2 border border-border overflow-hidden transition-all duration-200 hover:border-orange hover:-translate-y-1 cursor-pointer group">
      {/* Image area */}
      <div className="relative w-full aspect-video bg-black-3 flex items-center justify-center overflow-hidden">
        {auto.imagen ? (
          <img 
            src={auto.imagen} 
            alt={`${auto.marca} ${auto.nombre}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <CarIllustration className="w-4/5 transition-transform duration-300 group-hover:scale-105" brand={auto.marca} />
        )}
        <div className="absolute top-3 left-3">
          <Badge label={auto.tipo === 'nuevo' ? 'Nuevo' : 'Seminuevo'} />
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="font-body text-[0.65rem] tracking-widest uppercase text-orange mb-1">
          {auto.marca}
        </p>
        <h3 className="font-display text-2xl tracking-wider leading-none mb-3">
          {auto.nombre}
        </h3>
        <p className="font-body text-xs text-muted leading-relaxed mb-4 line-clamp-2">
          {auto.descripcion}
        </p>

        {/* Specs */}
        <div className="flex gap-4 mb-4">
          <span className="font-body text-[0.7rem] text-muted flex items-center gap-1">
            <span className="text-orange">◇</span> {auto.año}
          </span>
          <span className="font-body text-[0.7rem] text-muted flex items-center gap-1">
            <span className="text-orange">◇</span> {auto.transmision}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end border-t border-border pt-4">
          <button
            onClick={() => onConsultar(auto)}
            className="font-body text-[0.7rem] uppercase tracking-widest text-orange border border-orange px-3 py-2 transition-all duration-200 hover:bg-orange hover:text-white active:scale-95"
          >
            Consultar
          </button>
        </div>
      </div>
    </article>
  )
}
