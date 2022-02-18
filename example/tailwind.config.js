module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-magic"),
    require("../dist/index.js")({
      animationDuration: ["500ms", "6s", "0.5s"],
      animationDelay: ["2000ms", "7s"],
      animationIterationCount: [6, 7],
      animationFillMode: [],
      animationDirection: [],
      animationTimingFunction: {
        "in-out-cubic": ".65,0,.35,1",
      },
      animationPlayState: [],
      animationStepsStart: [],
      animationStepsEnd: [],
      animationStepsBoth: [],
      animationStepsNone: [],
    }),
  ],
};
