/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mid-md-lg": "1024px", // Custom breakpoint starting at 1030px
        "lg-plus": "1033px", // Custom breakpoint starting at 1091px
        // "Min-md": "550px",
  
        "Mi": "375px",
        // "Sl": "320px",

      },
    },
  },
  plugins: [],
};
