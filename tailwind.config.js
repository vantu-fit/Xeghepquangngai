// const plugin = require('tailwindcss/plugin')
import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'sans': ['"Inter var"', 'sans-serif'],
        'cus' : ['"Poppins"', 'sans-serif']
      },
      colors : {
        'xanh-la-dam' :'#228B22',
        'xanh-da-troi-dam' : '#007ACC',
        'tim-dam' : '#8A2BE2',
        'trang' :'#FFFFFF',
        'xam-nhat' : '#B0B0B0',
        'mau-xanh-la-toi' : '#006400',
        'den-nhat': '#333333',
        'xam-dam': ' #444444',
        'xam-nhat-khac':'#555555',
        'do':'#FF4500',
        'vang-dam' : '#FFD700',
        'xanh-dam-khac' : '#00CED1',
        'cam-dam' : ' #FF6600',
        'tim-dam-khac': '#9932CC',
        'xanh-dam':'#2E8B57'
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".container": {
          maxWidth: theme("columns.7xl"),
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
        },
      });
    }),
  ],
};
