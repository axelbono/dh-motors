import versaImg from '../assets/images/vehicles/Versa2026.png'
import ram700Img from '../assets/images/vehicles/RAM700.png'
import k3Img from '../assets/images/vehicles/K3.png'
import aveoImg from '../assets/images/vehicles/Aveo.png'
import mg5Img from '../assets/images/vehicles/MG5.png'
import jettaImg from '../assets/images/vehicles/Jetta.png'

export type TipoAuto = 'nuevo' | 'seminuevo'

export interface Auto {
  id: number
  marca: string
  nombre: string
  tipo: TipoAuto
  precio: number
  año: number
  km: number
  transmision: string
  descripcion: string
  imagen: string
}

export const autos: Auto[] = [
  {
    id: 1,
    marca: 'Nissan',
    nombre: 'Versa',
    tipo: 'nuevo',
    precio: 289900,
    año: 2026,
    km: 0,
    transmision: 'Manual y Automático',
    descripcion: 'Sedán compacto ideal para ciudad. Eficiencia y confort en cada viaje.',
    imagen: versaImg,
  },
  {
    id: 2,
    marca: 'RAM',
    nombre: '700 TRADESMAN',
    tipo: 'nuevo',
    precio: 312000,
    año: 2026,
    km: 0,
    transmision: 'Solamente Manual',
    descripcion: 'Pickup compacta que ofrece una capacidad de carga de 650kg.',
    imagen: ram700Img,
  },
  {
    id: 3,
    marca: 'KIA',
    nombre: 'K3',
    tipo: 'seminuevo',
    precio: 185000,
    año: 2027,
    km: 32000,
    transmision: 'Manual y Automático',
    descripcion: 'Sedán subcompacto destacado por su gran amplitud interior y cajuela.',
    imagen: k3Img,
  },
  {
    id: 4,
    marca: 'Chevrolet',
    nombre: 'Aveo Sedán',
    tipo: 'nuevo',
    precio: 590000,
    año: 2026,
    km: 0,
    transmision: 'Manual y Automático',
    descripcion: 'Diseño renovado, conectividad avanzada y motor eficiente.',
    imagen: aveoImg,
  },
  {
    id: 5,
    marca: 'MG',
    nombre: 'MG5',
    tipo: 'nuevo',
    precio: 498000,
    año: 2027,
    km: 0,
    transmision: 'Manual y Automático',
    descripcion: 'Sedán con un diseño único, equilibra potencia, eficiencia y manejo confiable.',
    imagen: mg5Img,
  },
  {
    id: 6,
    marca: 'Volkswagen',
    nombre: 'Jetta',
    tipo: 'seminuevo',
    precio: 265000,
    año: 2026,
    km: 18500,
    transmision: 'Tiptronic',
    descripcion: 'Destaca por su motor LTSI eficiente y tecnología moderna.',
    imagen: jettaImg,
  },
]

export const marcas = ['Nissan', 'KIA', 'MG', 'Chevrolet', 'Ram', 'Peugeot', 'Volkswagen', 'Fiat', 'Jeep']
