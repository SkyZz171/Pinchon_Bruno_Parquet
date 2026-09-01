/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        lin: {
          50: '#faf7f1',
          100: '#f4ede1',
          200: '#e9dcc6',
          300: '#dcc7a4',
        },
        chene: {
          300: '#cba97d',
          400: '#b58f5f',
          500: '#9c7449',
          600: '#835f3a',
          700: '#6a4c2e',
        },
        terre: {
          400: '#b16a44',
          500: '#9a5533',
          600: '#82462a',
        },
        anthracite: {
          600: '#3a3630',
          700: '#2c2925',
          800: '#211f1b',
          900: '#171512',
        },
      },
      lineHeight: {
        body: '1.5',
        heading: '1.2',
      },
    },
  },
  plugins: [],
};
