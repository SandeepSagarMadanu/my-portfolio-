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
        background: "hsl(240, 10%, 3.9%)",
        foreground: "hsl(0, 0%, 98%)",
        card: "hsl(240, 10%, 6%)",
        "card-foreground": "hsl(0, 0%, 98%)",
        primary: {
          DEFAULT: "hsl(199, 100%, 50%)", // Electric Blue
          glow: "rgba(0, 210, 255, 0.4)",
        },
        purple: {
          DEFAULT: "hsl(262, 83%, 58%)", // Tech Purple
          glow: "rgba(139, 92, 246, 0.4)",
        },
        cyan: {
          DEFAULT: "hsl(180, 100%, 45%)", // Laser Cyan
          glow: "rgba(0, 240, 255, 0.4)",
        },
        muted: {
          DEFAULT: "hsl(240, 5%, 64.9%)",
          foreground: "hsl(240, 5%, 64.9%)",
        },
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "scanline-scroll": "scanline 6s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "matrix-fade": "matrixFade 20s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        matrixFade: {
          "0%": { opacity: "0.03" },
          "50%": { opacity: "0.08" },
          "100%": { opacity: "0.03" },
        },
        glowPulse: {
          "0%": { boxShadow: "0 0 5px rgba(0, 210, 255, 0.2), 0 0 10px rgba(0, 210, 255, 0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 210, 255, 0.6), 0 0 35px rgba(139, 92, 246, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
