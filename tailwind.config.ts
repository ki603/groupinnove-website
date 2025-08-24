import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#012060',
        'teal-green': '#0d9d8d',
        // Add dark mode colors
        'dark-bg': '#1a202c',
        'dark-text': '#e2e8f0',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        'work-sans': ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;