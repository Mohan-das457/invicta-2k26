import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        secondary: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        accent: {
          400: '#f472b6',
          500: '#ec4899',
        },
      },
    },
  },
  plugins: [],
};

export default config;
