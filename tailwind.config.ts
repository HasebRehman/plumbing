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
        soto: {
          orange: "#FF6B00",
          orangeHover: "#E05A00",
          orangeLight: "#FF8533",
          black: "#0A0D12",
          cardBg: "#12161F",
          cardBorder: "#1E2638",
          darkMuted: "#1A202C",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "orange-glow": "radial-gradient(circle, rgba(255,107,0,0.18) 0%, rgba(10,13,18,0) 70%)",
      },
      boxShadow: {
        "glow": "0 0 25px -5px rgba(255, 107, 0, 0.4)",
        "glow-lg": "0 0 40px -5px rgba(255, 107, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
