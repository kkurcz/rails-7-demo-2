module.exports = {
  content: ["./app/**/*.{html,js,erb}"],
  theme: {
    extend: {
      minHeight: {
        '20vh': '20vh',
        '50vh': '50vh',
      }
    },
  },
  plugins: [],
  purge: {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  }
}