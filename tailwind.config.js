/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl.5':'1600px',
        '2xl.6':'1700px',
        '2xl.7':'1800px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px'
      },
      backgroundImage: {
        'custom-background': "url('/images/BACKGROUND.jpg')",

      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      borderColor: {
        'custom-gray': '#7B7777',
      },
      height: {
        '0.8': '0.8px',
      },
    },
  },
  plugins: [],
}