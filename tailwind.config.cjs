/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'sampul-web': "url('/assets/sampul_web.png')",
      },
      colors: {
        primary: "#E6FCF5",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    textStyles: {
      myCustomText: {
        xs: 'ml-6',
        fontFamily: { poppins: ["Poppins", "sans-serif"], },
        textAlign: 'justify',
        fontWeight: 'normal',
        textBase: '14px',
        sx: {
          maxWidth: '200px',
        },
        maxWidth: '450px',
        leading: '24px',
        marginBottom: '2',
      },
    },
  },
  plugins: [],

  corePlugins: {
    // Define the class for your reusable text style

  },
};