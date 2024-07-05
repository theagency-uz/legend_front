import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "450px",
      ...defaultTheme.screens,
    },
    keyframes: {
      moveupdown: {
        "0%": { transform: "translateY(0px)" },
        "100%": { transform: "translateY(-30px)" },
      },
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      moveupdown: "moveupdown 0.8s ease-in-out",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
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
          300: "#4B90A2",
          400: "#5DABBD",
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
          "linear-gradient(to bottom, transparent 90%, #3C899C 100%), url('/assets/hero-picture-mob-1.webp')",
        "nav-gradient":
          "linear-gradient(to bottom, #1D6782 5%, #175D7533 76%, #3384A600 100%)",
        "nav-gradient-scrolling":
          "linear-gradient(to bottom, #1D6782 5%, #175D7533 76%, #3384A600 100%)",
        campany: "url('/assets/campany.webp')",
        "campany-mob": "url('/assets/campany-mob.webp')",
        "nav-mob": "url('/assets/nav-mob.webp')",
        catalog: "url('/assets/bg-catalog.webp')",
        "catalog-mob": "url('/assets/bg-catalog-mob.webp')",
        "catalog-card":
          "linear-gradient(to bottom right, #FFFFFF44 0%, #4A8FA144 53%, #34738444 100%)",
        "filter-mob":
          "linear-gradient(to bottom right, #22779244 0%, #4A8FA144 26%, #143F4B66 65%)",
        product: "url('/assets/bg-product.webp')",
        "checkout-mob":
          "url('/assets/bg.png'), linear-gradient(to bottom right, #4A8FA1 53%, #347384 100%)",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
