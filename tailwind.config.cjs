/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'element': "var(--Orange)",
        'element-pale': "var(--Pale--orange)",
        'primary': "var(--Very--dark--blue)",
        'secondary': "var(--Dark--grayish--blue)",
        'off': " var(--Grayish--blue)",
        "regular": "var(--Light--grayish--blue)",
        'light': "var(--White)",
      }
    },
  },
  plugins: [],
}