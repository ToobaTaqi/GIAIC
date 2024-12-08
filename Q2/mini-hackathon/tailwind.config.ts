import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      // sm: { max: "428px" }, // default
      md: { min: "429px", max: "1280px" },
      lg: { min: "1281px" },
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
