import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "seneca-red": "#9E2424",
        "seneca-bright-red": "#CC0000",
        "seneca-dark-gray": "#463636",
        "seneca-black": "#1F1E1E",
      },
      fontFamily: {
        "roboto-mono": ['"Roboto Mono"', "monospace"],
        "ibm-plex-mono": ['"IBM Plex Mono"', "monospace"],
      },
      letterSpacing: {
        wider: "0.05em",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },

      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
        fadeIn: "fadeIn 1.5s ease-out",
      },
    },
    variants: {
      extend: {
        translate: ["group-hover"],
      },
    },
  },
  plugins: [daisyui, nextui()],
};
export default config;
