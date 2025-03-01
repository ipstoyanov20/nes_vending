import type { Config } from "tailwindcss";
import  daisyui  from "daisyui";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: {
      themes: ["light", "dark"],
    },
    keyframes: {
      blob: {
        '0%, 100%': { borderRadius: '60% 50% 30% 70% / 60% 30% 70% 40%' },
        '50%': {borderRadius: '20% 50% 70% 40% / 50% 60% 30% 60%' },
      },
      pulse:{
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.5' },
      }
    },
    animation: {
      'blob': 'blob 5s ease-in-out infinite',
      'pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
