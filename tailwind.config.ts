import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["var(--font-epilogue", ...fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#F1FBF7",
          200: "#D2F2E3",
          300: "#A5E6C6",
          400: "#77D9AA",
          500: "#4ACD8D",
          600: "#1DC071",
        },
        secondary: {
          100: "#E2DBFF",
          200: "#C5B6FE",
          300: "#A992FE",
          400: "#8C6DFD",
          500: "#6F49FD",
        },
        dark: {
          100: "#422C32",
          200: "#3A3A43",
          300: "#24242C",
          400: "#22222C",
          500: "#1C1C24",
          600: "#13131A",
        },
        neutral: {
          100: "#B2B3BD",
          200: "#A2A2A8",
          300: "#808191",
          400: "#4B5264",
          500: "#1F1D2B",
        },
        whitish: {
          100: "#FCFCFD",
          200: "#F1F1F3",
          300: "#FCFCFC",
          400: "#FCFBFF",
          500: "#FFFFFF",
        },
        error: "#EB5757",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
