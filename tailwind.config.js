/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh : ['Kumbh Sans', 'sans-serif'],
        inter : ['Inter', 'sans-serif'],
        poppins : ['Poppins', 'sans-serif'],
        abeezee : ['ABeeZee', 'sans-serif'],
        mukta : ['Mukta', 'sans-serif'],
        raleway : ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
