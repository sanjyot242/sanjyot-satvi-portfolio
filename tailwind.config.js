/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['BebasNeue'],
        inter: ['Inter'],
      },
      colors: {
        neturalOffWhite: '#C7C7C7',
        secondary: '#9333EA',
        accent: '#F59E0B',
        // Add more colors as needed
      },
    },
  },
  plugins: [],
};
