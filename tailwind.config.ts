import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "6.66vw",
      screens: {
        "2xl": "5000px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#285F71",
        },
      },
      aspectRatio: {
        custom: "1.61 / 1",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      boxShadow: {
        "primary-100": "0px 0px 5px 0px #287A8F",
      },
      backgroundImage: {
        "gradient-linear": "url('/assets/bg-picture.jpg')",
        light: "#FFF",
        hero: "url('/assets/hero-picture.jpg')",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
