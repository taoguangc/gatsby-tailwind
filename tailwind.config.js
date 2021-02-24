module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
    boxShadow: {
      lg: '0 5px 15px rgba(0, 0, 0, 0.06)',
      xl: '0 15px 25px rgba(0, 0, 0, 0.1)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
