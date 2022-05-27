module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    //screens: {
    //  'special': '1px',
    //}
  },
  mode: 'jit',
  plugins: [
    require('tailwind-hamburgers'),
  ],
  //purge: [
  //  "./src/pages/**/*.{js,ts,jsx,tsx}",
  //  "./src/components/**/*.{js,ts,jsx,tsx}",
  //],
}
