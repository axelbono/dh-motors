import { useState, useMemo } from 'react'
import { autos, TipoAuto, Auto } from '../data/autos'

type Filtro = 'todos' | TipoAuto

export function useFilter() {
  const [filtro, setFiltro] = useState<Filtro>('todos')

  const autosFiltrados: Auto[] = useMemo(() => {
    if (filtro === 'todos') return autos
    return autos.filter((a) => a.tipo === filtro)
  }, [filtro])

  return { filtro, setFiltro, autosFiltrados }
}
