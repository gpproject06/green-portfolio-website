import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        dmsans: ['var(--font-dmsans)', 'sans-serif'],
      },
        colors: {
          'light-green': '#74C69D',
        },
        animation: {
          'float': 'float 2s infinite',
        },
      },
    },
    plugins: [],
  };
export default config;
