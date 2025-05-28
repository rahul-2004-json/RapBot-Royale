/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'battle-dark': '#0F0F1A',
        'battle-darker': '#080812',
        'neon-pink': '#FF00FF',
        'neon-blue': '#00FFFF',
        'neon-purple': '#8A2BE2',
        'neon-yellow': '#FFFF00',
        'neon-green': '#39FF14',
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d'
        },
        warning: {
          50: '#fefce8',
          500: '#eab308',
          700: '#a16207'
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c'
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        }
      },
      fontFamily: {
        'battle': ['"Audiowide"', 'cursive'],
        'display': ['"Rubik Mono One"', 'sans-serif'],
        'body': ['"Roboto"', 'sans-serif'],
      },
      animation: {
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite alternate',
        'voice-wave': 'voice-wave 0.7s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%': { textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #8A2BE2, 0 0 82px #8A2BE2' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 15px #fff, 0 0 25px #fff, 0 0 45px #00FFFF, 0 0 85px #00FFFF' },
        },
        'voice-wave': {
          '0%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0.3)' },
        },
        'float': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      backgroundImage: {
        'neon-grid': "url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg')",
        'rap-stage': "url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg')"
      },
      boxShadow: {
        'neon-pink': '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 15px #FF00FF',
        'neon-blue': '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF',
        'neon-purple': '0 0 5px #8A2BE2, 0 0 10px #8A2BE2, 0 0 15px #8A2BE2',
      }
    },
  },
  plugins: [],
};