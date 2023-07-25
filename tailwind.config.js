/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      container: {
        center:true,
        padding: '16px',
      },
      screens:{
          '2xl':'1320px',
      },
      scale: {
        '2.1': '2.1',
      },
      colors: {
        dark: '#1e1c1c',
        milk: '#e5e5e5',
        primary : '#3DB1AA',
      },
    },
  },
  plugins: [],
}

