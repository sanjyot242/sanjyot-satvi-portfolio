/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['BebasNeue'],
        inter: ['Inter'],
        manrope: ['Manrope'],
      },
      colors: {
        neturalOffWhite: '#C7C7C7',
        imagebackground: '#1A1A1A',
        primary: '#D3E97A',
        accent: '#F59E0B',
        // Add more colors as needed
      },
    },
  },
  plugins: [],
};
