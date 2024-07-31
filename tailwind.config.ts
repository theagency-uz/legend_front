import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

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
          500: "#418292",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "admin-primary": {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
        catalog:
          "url('/assets/bg.webp'), linear-gradient(to bottom right, #4A8FA1 53%, #347384 100%)",
        "catalog-mob":
          "url('/assets/bg.webp'), linear-gradient(to bottom right, #4A8FA1 53%, #347384 100%)",
        "catalog-card":
          "linear-gradient(to bottom right, #FFFFFF44 0%, #4A8FA144 53%, #34738444 100%)",
        "filter-mob":
          "linear-gradient(to bottom right, #22779244 0%, #4A8FA144 26%, #143F4B66 65%)",
        product:
          "url('/assets/bg.webp'), linear-gradient(to bottom right, #4A8FA1 53%, #347384 100%)",
        "checkout-mob":
          "url('/assets/bg.webp'), linear-gradient(to bottom right, #4A8FA1 53%, #347384 100%)",
        legend: "linear-gradient(to bottom right, #4A8FA1 53%, #347384 100%)",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
