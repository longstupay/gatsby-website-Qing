/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    container:{
      center:true,
      padding:{
        default: '1rem',
        sm:'2rem',
        md:'3rem',
        lg:'4rem',
      }
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
