import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      moveupdown: {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-30px)" },
      },
    },
    animation: {
      moveupdown: "moveupdown 3s ease-in-out infinite",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 320px) { ... }

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
          200: "#3C899C",
        },
      },
      aspectRatio: {
        custom: "1.61 / 1",
        custom1: "3.31 / 1",
        custom2: "0.64 / 1",
        custom3: "0.51 / 1",
        mob: "0.049 / 1",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      boxShadow: {
        "primary-100": "0px 0px 5px 0px #287A8F",
      },
      backgroundImage: {
        "gradient-linear": "url('/assets/bg-picture.webp')",
        "gradient-linear-mob":
          "linear-gradient(to bottom, #3C899C, transparent 5%), url('/assets/bg-picture-mob.png')",
        light: "#FFF",
        hero: "url('/assets/hero-picture.webp')",
        "hero-mob":
          "linear-gradient(to bottom, transparent 90%, #3C899C 100%), url('/assets/hero-picture-mob.webp')",
        "nav-gradient":
          "linear-gradient(to bottom, #1D6782 5%, #175D7533 76%, #3384A600 100%)",
        campany: "url('/assets/campany.webp')",
        "campany-mob": "url('/assets/campany-mob.webp')",
        "nav-mob": "linear-gradient(to bottom, #3C899C 28%, #216070 76%)"
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
