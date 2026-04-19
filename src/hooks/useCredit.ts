import { useState, useMemo } from 'react'

export function useCredit() {
  const [precio, setPrecio] = useState(280000)
  const [enganchePct, setEnganchePct] = useState(20)
  const [plazo, setPlazo] = useState(36)

  const mensualidad = useMemo(() => {
    const enganche = precio * (enganchePct / 100)
    const financiado = precio - enganche
    const tasaMensual = 0.12 / 12
    if (tasaMensual === 0) return financiado / plazo
    return (
      (financiado * (tasaMensual * Math.pow(1 + tasaMensual, plazo))) /
      (Math.pow(1 + tasaMensual, plazo) - 1)
    )
  }, [precio, enganchePct, plazo])

  return {
    precio, setPrecio,
    enganchePct, setEnganchePct,
    plazo, setPlazo,
    mensualidad: Math.round(mensualidad),
  }
}
