import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          950: "#050505",
          900: "#0b0b0a",
          800: "#12110f",
          700: "#1c1a17",
        },
        ember: {
          400: "#ff4a4a",
          500: "#ff0020",
          600: "#dc143c",
          800: "#660000",
        },
        gold: {
          300: "#e8cf7a",
          400: "#c9a227",
          500: "#a3801c",
        },
        bone: {
          100: "#f2f0eb",
          300: "#a8a59a",
          500: "#6f6c63",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(102,10,10,0.4) 80px), repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(102,10,10,0.4) 80px)",
      },
      boxShadow: {
        deep: "0 40px 80px rgba(0,0,0,.6)",
        ember: "0 0 30px rgba(255,0,32,.35)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
