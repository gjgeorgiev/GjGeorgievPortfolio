/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "var(--bg-main)",
          surface: "var(--bg-surface)",
        },
        text: {
          primary: "var(--text-primary)",
          muted: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "#06b6d4",
        },
        border: {
          subtle: "rgba(255,255,255,0.06)",
        },
      },
      borderRadius: {
        xl: "12px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)",
        card: "0 4px 16px rgba(0,0,0,0.08)",
        navbar: "0 4px 16px rgba(0,0,0,0.08)",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
}