/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0E6B5C', tealDark: '#0A4F44', tealLight: '#E3F1EE',
          amber: '#F5B301', amberDark: '#C88F00',
          cream: '#FFFDF6', ink: '#22303C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
