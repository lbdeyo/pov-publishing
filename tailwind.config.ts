import type {Config} from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        zilla: ["var(--font-zilla)"],
      },
      fontSize: {
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
      },
    },
  },
} satisfies Config;
