/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "tentang.html", "kontak.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      screens: {
        "2xl": "1320px",
      },
      colors: {
        dark: "#1e1c1c",
        milk: "#e5e5e5",
        primary: "#F1B424",
        secprimary: "#D19003",
      },
    },
  },
  plugins: [],
};
