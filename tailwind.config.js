/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      container: {
        center:true,
        padding: '16px',
      },
      extend:{
        screens:{
          '2xl':'1320px',
        },
      },
      colors: {
        dark: '#1e1c1c',
        milk: '#e5e5e5',
        primary : '#593D69',
      },
    },
  },
  plugins: [],
}

