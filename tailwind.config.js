/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        basic: '#fffdf6',
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
}

