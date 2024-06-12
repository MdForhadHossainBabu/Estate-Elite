/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        poppins: "'Poppins', sans-serif",
        space: " 'Space Grotesk', sans-serif",
        nunito: " 'Nunito', sans-serif",
        fira: "'Fira Code', monospace"
      },
    },
  },
  plugins: [require('daisyui')],
};
