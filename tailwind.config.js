/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      outline: {
        "hover": ["4px solid #68f"]
      },
      backgroundImage: {
        "hud": "url('./src/assets/hud.png')",
        "service": "url('./src/assets/service.png')",
        "skinshop": "url('./src/assets/skinshop.png')",
        "dealership": "url('./src/assets/dealership.png')",
      }
    },
  },
  plugins: [],
}