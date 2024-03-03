/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: {
        light: "#F2F5F9",
        medium: "#677489",
        dark: "#111729",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Lato"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

