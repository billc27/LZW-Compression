/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title-color':'#DFD2D2',
        'history-sect-color': '#534F4F',
        'history-new-calc-color':'#4D4A4A',
        'history-sect-text-color': '#625E5E',
        'web-color':'#6D6565',
        'input-box-color':'#342929',
        'calc-btn-color':'#AFA5A5',
      },
    },
  },
  plugins: [],
}

