/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0f4ef',
          100: '#d9e5d6',
          200: '#b3cba8',
          300: '#82a876',
          400: '#5a8a4d',
          500: '#3d6b35',
          600: '#2d5228',
          700: '#1e3a1a',
          800: '#162c13',
          900: '#0f1e0d',
        },
        cream:  '#f5f0e8',
        earth:  '#8b6b4a',
        burgundy: '#7a1e2e',
        gold:   '#c9a84c',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

