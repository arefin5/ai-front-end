import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      background: {},
      colors: {
        'min': '#007BFF',
        'bg': '#f0f1f2',
        "gd": "linear-gradient(230deg, #007bff, #000)",
      },
    },
  },
  plugins: [],
};
export default config;
