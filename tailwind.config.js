// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        // most: ['Mostin-Black'],
      },
    },
    animation: {
      "spin-slow": "spin 9s linear infinite",
      'bounce': 'bounce 2s infinite',
    },
  },
  plugins: [],
};