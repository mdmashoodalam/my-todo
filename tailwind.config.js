module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          romance: '#FFC0CB',  // soft pink
          isolation: '#6db1c9',  // light steel blue
          darkIsolation: '#2F4F4F', // darker grey/blue
        },
        animation: {
          'gradient-x': 'gradientX 5s ease infinite',
        },
        keyframes: {
          gradientX: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
      },
    },
    plugins: [],
  }
  