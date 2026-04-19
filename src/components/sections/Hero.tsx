import Button from '../ui/Button'
import Carousel from '../ui/Carousel' // Import Carousel component
import img1 from '../../assets/images/carrusel/ImgCar1.png'
import img2 from '../../assets/images/carrusel/ImgCar2.png'
import img3 from '../../assets/images/carrusel/ImgCar3.png'

const stats = [
  { num: '6+', lbl: 'Marcas' },
  { num: '50+', lbl: 'Modelos' },
  { num: '100%', lbl: 'Financiable' },
]

const carouselImages = [img1, img2, img3];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen grid md:grid-cols-2 items-center px-[5vw] pt-28 pb-16 gap-12 overflow-hidden">
      {/* Glow bg */}
      <div
        className="absolute top-0 right-0 w-[55vw] h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 70% 30%, rgba(242,101,34,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Left — text */}
      <div className="relative z-10">
        <p className="font-body text-[0.7rem] tracking-widest uppercase text-orange mb-5 flex items-center gap-3 animate-fade-up">
          <span className="inline-block w-7 h-px bg-orange" />
          Distribuidor multimarca
        </p>

        <h1
          className="font-display leading-none tracking-wide mb-6 animate-fade-up animate-fade-up-delay-1"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
        >
          Tu marca favorita<br />
          En {' '}
          <span className="text-orange">un solo lugar.</span>
        </h1>

        <p className="font-body text-sm text-muted leading-relaxed max-w-md mb-8 animate-fade-up animate-fade-up-delay-2">
          Catálogo de autos nuevos y seminuevos de las mejores marcas. Asesoría personalizada y
          opciones de crédito accesibles para ti.
        </p>

        <div className="flex gap-4 flex-wrap animate-fade-up animate-fade-up-delay-3">
          <Button size="lg" onClick={() => scrollTo('catalogo')}>
            Ver catálogo
          </Button>
          <Button variant="secondary" size="lg" onClick={() => scrollTo('credito')}>
            Tramitar crédito
          </Button>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-12 animate-fade-up animate-fade-up-delay-4">
          {stats.map((s) => (
            <div key={s.lbl}>
              <p className="font-display text-4xl text-orange leading-none">{s.num}</p>
              <p className="font-body text-[0.65rem] uppercase tracking-widest text-muted mt-1">
                {s.lbl}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — car illustration */}
      <div className="hidden md:flex items-center justify-center relative z-10">
        <Carousel images={carouselImages} />
      </div>
    </section>
  )
}

