import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        pingfang: ["'PingFang SC Regular'", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        caiti: ["caiti", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        pulsate: "pulsate 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
