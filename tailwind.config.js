/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      l_s: { min: "1920px" },
      d_k: { min: "1200px", max: "1919px" },
      l_t: { min: "992px", max: "1199px" },
      s_t: { min: "768px", max: "991px" },
      s_d: { min: "481px", max: "767px" },
      m_d: { max: "480px" },
      d_k2: { min: "900px" },
      s_m1: { max: "320px" },
      l_g: { max: "991px" },
    },
  },
  plugins: [],
};
