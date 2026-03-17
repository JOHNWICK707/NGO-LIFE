/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        emeraldBrand: {
          500: "#059669",
          600: "#047857",
          400: "#10b981"
        },
        amberBrand: {
          500: "#f59e0b"
        },
        navyBrand: {
          900: "#0f172a",
          800: "#1e293b"
        }
      },
      boxShadow: {
        glow: "0 20px 45px rgba(2, 132, 199, 0.2)"
      }
    }
  },
  plugins: []
};
