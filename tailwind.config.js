module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Quicksand"', "sans-serif"],
    },
    extend: {
      textColor: {
        linkedin: "#0a66c2",
        github: "#035bd6",
        twitter: "#1d9bf0",
        medium: "#191919",
        stackOverflow: "#f48225",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
