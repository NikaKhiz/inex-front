/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        primaryWhite: '#FFFFFF',
        primaryRed: '#E31221',
        primaryBrown: '#DDCCAA',
        primaryBlack: '#11101A',
      },
      colors: {
        primaryWhite: '#FFFFFF',
        primaryRed: '#E31221',
        primaryBlack: '#11101A',
      },
      backgroundImage: () => ({
        gradientPrimary:
          'linear-gradient(187.16deg,#181623 0.07%,#191725 51.65%,#0D0B14 98.75%)',
      }),
    },
  },
  plugins: [],
};
