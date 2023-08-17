import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-purple-50": "#EAEBF0",
        "custom-purple-75": "#ABADC0",
        "custom-purple-100": "#888CA6",
        "custom-purple-200": "#545A80",
        "custom-purple-300": "#313866",
        "custom-purple-400": "#222747",
        "custom-purple-500": "#1E223E",
        "custom-green-light": "#E7F6F5",
        "custom-green-light-hover": "#DCF2EF",
        "custom-green-light-active": "#B6E3DE",
        "custom-green-normal": "#13A696",
        "custom-green-normal-hover": "#119587",
        "custom-green-normal-active": "#0F8578",
        "custom-green-dark": "#0E7D71",
        "custom-green-dark-hover": "#0B645A",
        "custom-green-dark-active": "#094B44",
        "custom-green-darker": "#073A35",
      },
    },
  },
  plugins: [],
};
export default config;
