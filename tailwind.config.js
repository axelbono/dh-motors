/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#0a0a0a',
          2: '#141414',
          3: '#1a1a1a',
        },
        orange: {
          DEFAULT: '#F26522',
          light: '#FF8040',
          muted: 'rgba(242,101,34,0.12)',
        },
        cream: '#f5f3ef',
        muted: '#7a7a7a',
        border: 'rgba(255,255,255,0.08)',
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}
