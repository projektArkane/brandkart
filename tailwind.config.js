module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      headerTitle: "56px",
      serCara: "26px",
      brandsDesc: "40px",
      secHeading: "40px",
    },
    fontFamily: {
      sans: ["Inter", '"PT Sans"', "sans-serif"],
    },
    screens: {
      xs: "480px",
      // => @media (min-width: 480px) { ... }
      ss: "540px",
      // => @media (min-width: 540px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        subhead: "#00265F",
        purple: "#6E53CB",
        renownBlack: "#1E2228",
        bkBlack: "#00265F",
        bkBlack2: "#1D252D",
      },
      lineHeight: {
        "hero-title": "78px",
        "hero-desc": "32px",
        "brands-desc": "54px",
        secHeading: "48.41px",
      },
    },
  },
  plugins: [],
};
