module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: { min: "280px", max: "480px" },
      // => @media (min-width: 640px) { ... }

      tablet: { min: "480.1px", max: "820px" },
      // => @media (min-width: 640px) { ... }

      laptop: { min: "820.1px", max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      desktop: { min: "1024.1px" },
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
