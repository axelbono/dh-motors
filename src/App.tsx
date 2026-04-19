import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Marcas from './components/sections/Marcas'
import Catalogo from './components/sections/Catalogo'
import Credito from './components/sections/Credito'
import Contacto from './components/sections/Contacto'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marcas />
        <Catalogo />
        <Credito />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
