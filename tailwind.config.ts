// tailwind.config.ts
import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react"; // Ensure this is the proper import for the plugin

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontSize: {
        '120px': '120.26px',
      },
      
      colors: {
        primary: "#121212", // Jet Black
        secondary: "#1F1F1F", // Dark Gray
        accent: "#00D4FF", // Neon Cyan
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
