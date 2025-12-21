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
        brand: {
          dark: "#020617",    // Deep Navy Background
          surface: "#0f172a", // Card/Section Background
          primary: "#2563eb", // Cobalt Blue Accent
          secondary: "#38bdf8", // Electric Blue Highlights
          muted: "#64748b",   // Slate-blue Text
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh': "url('/mesh-bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;