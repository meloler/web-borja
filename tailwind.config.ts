import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the BG logo (teal / petroleum + turquoise).
        ink: {
          900: "#06231f", // darkest petroleum
          800: "#0a2f2a", // main dark bg
          700: "#0f3d37", // raised dark surface
          600: "#15524a", // borders / muted surfaces
        },
        teal: {
          50: "#e9faf6",
          100: "#c8f1e7",
          200: "#8fe2cf",
          300: "#5cd1b6",
          400: "#36bfa0",
          500: "#1ea98a", // primary turquoise verdoso
          600: "#178a72",
          700: "#136f5d",
          800: "#0f5749",
        },
        mint: {
          400: "#7be0c5", // secondary verde agua
          500: "#5ed3b3",
        },
        sand: {
          200: "#efe4cf",
          300: "#e3d3b3", // arena cálida acento
          400: "#d1bd95",
        },
        lime: {
          accent: "#c7e86b", // lima suave acento opcional
        },
        bone: "#f6f3ec", // blanco roto
        graphite: {
          900: "#1a2222",
          700: "#2b3434", // texto principal
          500: "#54605f",
        },
        warmwhite: "#f3f7f5", // texto sobre oscuro
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      maxWidth: {
        content: "76rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,.04), 0 8px 24px -8px rgba(0,0,0,.12)",
        glow: "0 0 0 1px rgba(94,211,179,.35), 0 24px 60px -20px rgba(30,169,138,.45)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(94,211,179,.18), transparent 60%)",
        "grid-faint":
          "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shine: "shine 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
