/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{vue,js,ts,jsx,tsx,mdx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,mdx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ['GBWide']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
