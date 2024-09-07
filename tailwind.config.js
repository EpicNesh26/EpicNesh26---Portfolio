/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
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