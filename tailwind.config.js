/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Basic
        colorBlack: "var(--color-black)",
        colorWhite: "var(--color-white)",
        colorOnyx: "var(--color-onyx)",
        colorDarkGray: "var(--color-dark-gray)",
        colorMediumGray: "var(--dark-medium-gray)",
        colorLightGray: "var(--dark-light-gray)",
        colorLightBlue: "var(--dark-light-blue)",
        colorLightRed: "var(--dark-light-red)",
        colorLightYellow: "var(--dark-light-yellow)",

        // DarkMode
        colorCardBorder: "var(--color-card-border)",
        colorBGMain: "var(--color-main-bg)",
        colorCardBg: "var(--color-card-bg)",
        colorBlack50: "var(--color-black-50)",
        colorWhite10: "var(--color-white-10)",
        colorWhite25: "var(--color-white-25)",
        colorWhite70: "var(--color-white-70)",
      },
      boxShadow: {
        darkMode:
          "0px 7px 4px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(255, 255, 255, 0.08) inset, 0px 1px 2px 0px rgba(255, 255, 255, 0.02) inset",
      },
      maxWidth: {
        widthScreen: "var(--screen-width)",
      },
      padding: {
        paddingX: "var(--global-padding-x)",
      },
      aspectRatio: {
        "5/8": "5 / 8",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      sen: ["Sen"],
    },
  },
  plugins: [],
  darkMode: "class",
};
