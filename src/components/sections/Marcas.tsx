import { marcas } from '../../data/autos'

export default function Marcas() {
  return (
    <div className="border-t border-b border-border px-[5vw] py-8">
      <p className="font-body text-[0.65rem] uppercase tracking-widest text-center mb-5">
        Marcas que puedes encontrar en DH Motors
      </p>
      <ul className="flex flex-wrap justify-center gap-8 md:gap-12 list-none">
        {marcas.map((marca) => (
          <li
            key={marca}
            className="font-display text-xl tracking-widest text-white/20 hover:text-cream transition-colors duration-200 cursor-default"
          >
            {marca}
          </li>
        ))}
      </ul>
    </div>
  )
}
