/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mid-md-lg": "1024px", // Custom breakpoint starting at 1030px
        "lg-plus": "1033px", // Custom breakpoint starting at 1091px
        "cst": "375px",
        // "cst2": "1060px",
        // "cst3": "1058px",
        // "sm-1": "320px",
        // "sm-2": "936px",
        // "sm-3": "930px",
        // "sm-4": "927px",
        // "sm-5": "921px",
        // "sm-6": "976px",
        // "sm-7": "972px",
        // "sm-8": "926px",
        // "sm-9": "783px",
        // "md": "971px",
        // "Sl": "1025px",
      },
    },
  },
  plugins: [],
};
