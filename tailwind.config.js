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
        "hud": "url('./assets/hud.png')",
        "service": "url('./assets/service.png')",
        "skinshop": "url('./assets/skinshop.png')",
        "dealership": "url('./assets/dealership.png')",
      }
    },
  },
  plugins: [],
}