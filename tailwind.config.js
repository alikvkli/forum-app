/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth:{
      default: '1px'
    },
    borderColor:{
      default:'#EDEFF1',
      primary:'#ff4500',
    },
    outlineColor:{
      primary:'#ff4500'
    },
    colors:{
      primary:'#ff4500',
      light:'#ff7651',
      secondary:'#888a8c',
      tertiary:'#33a8ff',
      default:'#f6f7f8',
      darker:'#dadfe6',
    },
    ringColor:{
      primary:'#ff4500',
    },
    height:{
      container:'calc(100vh-72px)'
    },
    extend: {},
  },
  plugins: [],
}

