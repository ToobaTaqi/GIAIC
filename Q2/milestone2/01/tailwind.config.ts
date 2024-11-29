import type { Config } from "tailwindcss";

export default {
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
      sm: { max: "640px" },  // Small devices (mobile phones)
      md: { max: "768px" },  // Medium devices (tablets)
      lg: { max: "1024px" }, // Large devices (small laptops/desktops)
      xl: { max: "1280px" }, // Extra large devices (large desktops)
      "2xl": { max: "1536px" }, // 2X large devices (ultra-wide screens)
    },
    
  },
  plugins: [],
} satisfies Config;
