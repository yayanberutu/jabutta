import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jabutta: {
          cream: "#f8ecd9",
          ivory: "#fffaf1",
          maroon: "#6b1f28",
          deep: "#3c1712",
          gold: "#b47a2b",
          brown: "#7a4a25",
          leaf: "#526b39",
        },
      },
      boxShadow: {
        soft: "0 24px 60px rgba(60, 23, 18, 0.12)",
        card: "0 18px 45px rgba(60, 23, 18, 0.09)",
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
