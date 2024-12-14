/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bg-fade-in': {
          '0%': { backgroundColor: 'transparent', },
          '100%': { backgroundColor: 'white' },
        },
      },
      animation: {
        'bg-fade-in': 'bg-fade-in 2s ease-out forwards',
        // bounce: "bounce 3s ease-in-out infinite",
      },
    },
    // screens:{
    //   'xs':'500px'
    // },
    // fontSize: {
    //   '9xl':'10rem'
    // }
  },
  plugins: [],
}

