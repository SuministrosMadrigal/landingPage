/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('./fondoAzul.webp')",
        'img-fondo': "url('./fondo.webp')",
        'img-instru': "url('./img3.webp')",
        'img-electronica': "url('./electronica.webp')",
        'triangulo':"url('./triangulo.webp')",
        'suministrosImg': "url('./suministrosImg.webp')",
        'metalm': "url('./metalm.webp')",
        'lampara1': "url('./lampara1.webp')",
        'lampara2': "url('./lampara2.webp')",
        'panelsolar': "url('./panelsolar.webp')",
        'techiot': "url('./techiot.webp')",
        'grua': "url('./grua.webp')",
        'trianguloC': "url('./trianguloCompleto.webp')",
      }
    },
  },
  plugins: [],
}

