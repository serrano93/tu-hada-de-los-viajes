/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F5F0E6',
        limestone: '#E8DFD1',
        sage: {
          DEFAULT: '#4A5D4E',
          mist: '#8FA392',
          dark: '#38473B',
        },
        terracotta: {
          DEFAULT: '#C86D51',
          hover: '#B2593E',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#DFC58E',
        },
        ink: {
          DEFAULT: '#1E201D',
          muted: '#4A4E48',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 12px 36px -8px rgba(30, 32, 29, 0.07), 0 4px 12px -2px rgba(30, 32, 29, 0.04)',
        'editorial-lg': '0 24px 48px -12px rgba(30, 32, 29, 0.12), 0 8px 20px -4px rgba(30, 32, 29, 0.06)',
        'gold-glow': '0 0 24px rgba(197, 160, 89, 0.28)',
      },
    },
  },
  plugins: [],
};
