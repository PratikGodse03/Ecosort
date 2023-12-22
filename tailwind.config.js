/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        inter: ["inter", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      colors: {
        heading: {
          600: '#1E7808',
          800: '#FF1313;',
        },
        button: {
          500: '#3EC229'
        }
      },
    },
  },
  plugins: [],
};
