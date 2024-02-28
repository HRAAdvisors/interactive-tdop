/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './node_modules/@hraadvisors/broadband-charts/**/*.{vue,js,ts,jsx,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        basic: '#fffdf6',
        primary: {
          100: 'rgba(224, 229, 238, 1)',
          200: 'rgba(196, 205, 222, 1)',
          300: 'rgba(168, 181, 206, 1)',
          400: 'rgba(140, 157, 190, 1)',
          500: 'rgba(112, 133, 173, 1)',
          600: 'rgba(84, 110, 156, 1)',
          700: 'rgba(56, 86, 139, 1)',
          800: 'rgba(28, 63, 122, 1)',
          900: 'rgba(0, 39, 104, 1)',
          1000: 'rgba(0, 32, 89, 1)',
          1100: 'rgba(0, 25, 73, 1)',
          1200: 'rgba(0, 19, 56, 1)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.inter'),
              fontWeight: '600',
              fontSize: '3.75rem',
              lineHeight: '150%',
              textTransform: 'uppercase'
            },
            h2: {
              fontFamily: theme('fontFamily.inter'),
              fontWeight: '600',
              fontSize: '1.5rem',
            },
            p: {
              fontFamily: theme('fontFamily.inter'),
              fontSize: '0.75rem',
            },
        },
        },
      }),
    },
  },
  plugins: [    
    require('@tailwindcss/typography'),
],
important: '#root'
}

