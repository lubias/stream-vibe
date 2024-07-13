/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-card": "linear-gradient(20deg, rgba(229,0,0,0) 70%, rgba(229,0,0,0.2) 100%)"
      },
      backgroundColor: {
        "black-06": "#0F0F0F",
        "black-08": "#141414",
        "black-10": "#1A1A1A",
        "black-12": "#1F1F1F",
        "red-45": "#E50000",
      },
      borderColor: {
        "black-12": "#1F1F1F",
        "red-45": "#e500004f",
        "black-15": "#262626",
        "black-20": "#333333"
      },
      padding: {
        "160": "160px"
      },
      colors: {
        "gray-60": "#999999"
      },
      screens: {
        'lg_1': { max: '1635px' },
        'lg_2': { max: '1365px' },
        'lg_3': { max: '1015px' },
        'lg_4': { max: '970px' },
        'md_1': { max: '768px' },
        'md_2': { max: '690px' },
        'md_3': { max: '520px' },
        'sm_1': { max: '425px' },
      },
    },
  },
  plugins: [],
};
