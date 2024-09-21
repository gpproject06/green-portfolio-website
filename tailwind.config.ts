import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import type { PluginAPI, CSSRuleObject } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        dmsans: ['var(--font-dmsans)', 'sans-serif'],
      },
      colors: {
        'light-green': '#74C69D',
        'min-blue': '#010D3E'
      },
      animation: {
        float: 'float 2.5s ease-in-out infinite',
      },
      backgroundImage: {
        'custom-gradient-diagonal': 'linear-gradient(225deg, #EAEEFE 40%, #74C69D 80%)',
        'custom-gradient-diagonal-bottom': 'linear-gradient(195deg, #EAEEFE 40%, #74C69D 80%)',
        'custom-gradient-vertical': 'linear-gradient(#FFFFFF 10%, #74C69D 120%)',
        'custom-gradient-white': 'linear-gradient(#FFFFFF 40%, #95D5B2 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
      },
      screens: {
        xs: '450px',
        xxs: '360px',
      },
    },
  },
  plugins: [
    plugin(function (api: PluginAPI) {
      const newUtilities: { [key: string]: CSSRuleObject } = {
        '.text-gradient': {
          backgroundImage: 'linear-gradient(to bottom, #000000, #010D3E)', // Gradient from purple to blue
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
      };
      api.addUtilities(newUtilities); // No need for variants in addUtilities
    }),
  ],
  variants: {
    extend: {
      textColor: ['responsive', 'hover'], // Globally extend the variants for utilities like text color
    },
  },
};

export default config;
