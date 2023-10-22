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
        "hud": "url('https://media.discordapp.net/attachments/970652202718871573/1165612362741600286/image.png?ex=65477c1b&is=6535071b&hm=fa9a5e311cb4b18279ea6356652f9b33a42b67ce5c622df72a132ed55fe63d7a&=&width=1193&height=671')",
        "service": "url('https://media.discordapp.net/attachments/970652202718871573/1165699318708179014/image.png?ex=6547cd17&is=65355817&hm=f36cf14c64590ee09fc649f8497be44fc442905af013f215d9cfda34f436b13e&=&width=1440&height=306')",
        "skinshop": "url('https://media.discordapp.net/attachments/970652202718871573/1165612427807817738/image.png?ex=65477c2a&is=6535072a&hm=8a9dedb64505382299965f719847ae4f2de31a531882bfa6084d60ef4e672396&=&width=1193&height=671')",
        "dealership": "url('https://media.discordapp.net/attachments/970652202718871573/1165612486502924308/image.png?ex=65477c38&is=65350738&hm=ccbc8f819e7e6fc24bb9ac9a48033de914efd45fc376b78fc5e8a64fd62f0a81&=&width=1193&height=671')",
      }
    },
  },
  plugins: [],
}