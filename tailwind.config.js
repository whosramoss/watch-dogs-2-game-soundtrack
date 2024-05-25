/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    colors: {
      primary: "#CECECE",
      secondary: "#999999",
      third: "#777777",
      ground: "#1E1E1E",
      transparent: "transparent",
    },
    extend: {
      height: (theme) => ({
        "screen-3/12": "calc(100vh * 3 / 12)",
        "screen-4/12": "calc(100vh * 4 / 12)",
        "screen-5/12": "calc(100vh * 5 / 12)",
        "screen-7/12": "calc(100vh * 7 / 12)",
        "screen-8/12": "calc(100vh * 8 / 12)",
        "screen-9/12": "calc(100vh * 9 / 12)",
        "screen-10/12": "calc(100vh * 10 / 12)",
        "screen-11/12": "calc(100vh * 11 / 12)",
        "screen-13/12": "calc(100vh * 13 / 12)",
        "screen-14/12": "calc(100vh * 14 / 12)",
        "screen-1/2": "50vh",
      }),
    },
  },
}