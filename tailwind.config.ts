import type {Config} from "tailwindcss";
import type {PluginAPI} from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "zilla-slab": ["var(--font-zilla-slab)"],
      },
    },
  },
  plugins: [
    function ({addBase}: PluginAPI) {
      addBase({
        h1: {fontFamily: "var(--font-zilla-slab)"},
        p: {
          fontSize: "1.5rem",
          lineHeight: "1.5",
          "@screen md": {
            fontSize: "1.675rem",
          },
        },
      });
    },
  ],
} satisfies Config;
