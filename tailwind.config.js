/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: {
          10: '#fef6e5',
          20: '#fadd99',
          30: '#f7cb66',
          40: '#f5ba33',
          50: '#f2a900',
          60: '#c18700',
          70: '#916500',
          80: '#614400',
          90: '#302200',
          100: '#181100'
        },
        secondary:{
          50: '#e5fffc',
          100: '#b3fff5',
          200: '#80ffee',
          300: '#4dffe7',
          400: '#1affe0',
          500: '#00ffdd',
          600: '#00e6c6',
          700: '#00b39a',
          800: '#00806e',
          900: '#004d42',
          950: '#002520'

        },
        neutral:{
          10: '#FBFCFE',
          20: '#F5F8FA',
          30: "#E9F0F4",
          50: "#A8B9CA",
          60: '#798AA3',
          70: '#5D6C87',
          90: '#2E3748'
        }
      },
      fontFamily:{
        comfortaa: ["comfortaa","sans-serif"],
          pthin: ["Poppins-Thin", "sans-serif"],
          pextralight: ["Poppins-ExtraLight", "sans-serif"],
          plight: ["Poppins-Light", "sans-serif"],
          pregular: ["Poppins-Regular", "sans-serif"],
          pmedium: ["Poppins-Medium", "sans-serif"],
          psemibold: ["Poppins-SemiBold", "sans-serif"],
          pbold: ["Poppins-Bold", "sans-serif"],
          pextrabold: ["Poppins-ExtraBold", "sans-serif"],
          pblack: ["Poppins-Black", "sans-serif"]
      }
    },
  },
  plugins: [],
}
