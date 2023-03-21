/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        fis: {
          purple: "#5C59C3",
          "green-light": "#9AD3CC",
          beige: "#E8CAA2",
          violet: "#EEEDEA",
        },
      },
    },
  },
  plugins: [],
};
