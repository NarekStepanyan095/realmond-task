import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    spacing: {
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      20: "20px",
      22: "22px",
      24: "24px",
      30: "30px",
      32: "32px",
      36: "36px",
      40: "40px",
      50: "50px",
      48: "48px",
      56: "56px",
      80: "80px",
      8: "8px",
      6: "6px",
      4: "4px",
      2: "2px",
      1: "1px",
      0: "0px",
    },
    borderRadius: {
      half: "50%",
      48: "48px",
      8: "8px",
      6: "6px",
      4: "4px",
      2: "2px",
    },
    fontSize: {
      xs: ["10px", "16px"],
      sm: ["12px", "20px"],
      base: ["14px", "22px"],
      lg: ["16px", "24px"],
      xl: ["20px", "28px"],
    },
  },
  plugins: [],
} satisfies Config;
