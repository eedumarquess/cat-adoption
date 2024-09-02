/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',  // Corrigido para incluir o arquivo de configuração do Nuxt.js
  ],
  theme: {
    colors: {
      'main': '#4e2096',
      'primary': '#26203b',
      'secundary': '#4d4e4e',
      'stroke': '#dfe4e8',
      'placeholder': '#b2b2b2',
      'danger': '#e03130',
      'sucess': '#04d58b',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',   // 12px
        'sm': '0.875rem',  // 14px
        'base': '1rem',    // 16px
        'lg': '1.5rem',    // 24px
        'xl': '2rem',      // 32px
        '2xl': '2.5rem',   // 40px
      },
    },
  },
  plugins: [],
}