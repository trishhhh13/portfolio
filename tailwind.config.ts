import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        'grullo': '#a9947d', // This is the hexadecimal equivalent of rgb(169, 146, 125)
        'umber': '#5e503f',
        'eerie': '#1a1a1a',
        'raisin': '#222222',
        'charcoal': '#333333'
      },
    },
    keyframes: {
      'slide-right': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      'slide-left': {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
    },
    animation: {
      'slide-right': 'slide-right 1s ease-in-out',
      'slide-left': 'slide-left 1s ease-in-out',
    },
  },
  plugins: [],
};
export default config;
