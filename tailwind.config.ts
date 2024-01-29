import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        caiti: ["caiti", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
