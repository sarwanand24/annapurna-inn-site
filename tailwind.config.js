/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f3',
          100: '#f5f0e6',
          200: '#e8dcc4',
          300: '#dbc8a2',
          400: '#c8a360',
          500: '#b8903d',
          600: '#a67c32',
          700: '#8a652a',
          800: '#715228',
          900: '#5e4423',
        },
        accent: {
          50: '#f0f5f0',
          100: '#dce8dc',
          200: '#b9d1b9',
          300: '#8fb58f',
          400: '#6a9a6a',
          500: '#4a7c4a',
          600: '#3a6239',
          700: '#2f4f2e',
          800: '#273f26',
          900: '#213521',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfbf7',
          200: '#faf6ed',
          300: '#f7f1e3',
          400: '#f1e7ce',
          500: '#ebdcb9',
          600: '#d4c5a5',
          700: '#b0a589',
          800: '#8d846e',
          900: '#746c5a',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c8a360 0%, #8a652a 100%)',
        'gradient-cream': 'linear-gradient(135deg, #faf6ed 0%, #f1e7ce 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
