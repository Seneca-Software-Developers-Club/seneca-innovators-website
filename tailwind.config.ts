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
