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
        neutralBlack: '#24222F',
        neutralGray: '#D9D9D9',
        darkGray: '#6C757D',
      },
      colors: {
        primaryWhite: '#FFFFFF',
        primaryRed: '#E31221',
        primaryBlack: '#11101A',
        primaryBrown: '#DDCCAA',
        neutralBlack: '#24222F',
        neutralGray: '#D9D9D9',
        darkGray: '#6C757D',
      },
      backgroundImage: () => ({
        gradientPrimary:
          'linear-gradient(187.16deg,#181623 0.07%,#191725 51.65%,#0D0B14 98.75%)',
      }),
    },
  },
  plugins: [],
};
