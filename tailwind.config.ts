import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-diagonal': 'linear-gradient(225deg, #ffffff 40%, #74C69D 80%)',
        'custom-gradient-vertical': 'linear-gradient(#ffffff 0%, #74C69D 120%)',
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
