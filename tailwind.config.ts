import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "scrbb-main-white": "#F8F4E9",
        "scrbb-veige": "#FEE9D4",
        "scrbb-primary": "#24A4B9",
        "scrbb-secondary": "#F3AC00",
        "scrbb-error": "#EE6866",
        "scrbb-success": "#57AE84",
        "scrbb-pink": "#F09DD4",
        "scrbb-purple": "#A063EF",
        "scrbb-main-black": "#120B0A"
      },
      textColor: {
        "scrbb-black": "#120B0A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
