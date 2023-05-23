/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend Deca', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      animation: {
        blob: 'blob 8s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '33%': {
            transform: 'translate(0px, -60px)',
          },
          '66%': {
            transform: 'translate(0px, 60px)',
          },
          '100%': {
            transform: 'translate(0px,0px)',
          },
        },
      }
    }
  },
  plugins: [],
}
