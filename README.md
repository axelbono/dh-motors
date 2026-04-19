# DH Motors — Landing Page

Landing page para DH Motors, venta de autos nuevos y seminuevos multimarca.

## Stack

- **React 18** + **TypeScript**
- **Vite 5** — bundler y dev server
- **Tailwind CSS 3** — utilidades de estilo
- **Google Fonts** — Bebas Neue + DM Sans

## Estructura

```
src/
  components/
    layout/       → Navbar, Footer
    sections/     → Hero, Marcas, Catalogo, Credito, Contacto
    ui/           → Button, Badge, CarCard, CarIllustration, FilterBtn, SectionHeader
  data/
    autos.ts      → inventario tipado + marcas
  hooks/
    useFilter.ts  → filtro de catálogo
    useCredit.ts  → calculadora de crédito
  App.tsx
  main.tsx
  index.css
```

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview   # para revisar el build local
```

## Deploy en Vercel (recomendado)

1. Sube el proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com) → **New Project**
3. Importa tu repo — Vercel detecta Vite automáticamente
4. Click **Deploy** — listo, dominio gratis incluido

## Deploy en GitHub Pages

Agrega en `vite.config.ts`:

```ts
export default defineConfig({
  base: '/nombre-de-tu-repo/',
  plugins: [react()],
})
```

Luego instala `gh-pages`:

```bash
npm install -D gh-pages
```

Y en `package.json` scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

## Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Inventario de autos | `src/data/autos.ts` |
| Marcas en el banner | `src/data/autos.ts` → `marcas` |
| Colores principales | `src/index.css` → variables CSS |
| Tasa de interés | `src/hooks/useCredit.ts` |
| Links de navegación | `src/components/layout/Navbar.tsx` |
