/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--color-primary)",
        "primary-color-light": "var(--primary-color-light)",
        "secondary-color": "var(--secondary-color)",
        "color-neutral-5": "var(--color-neutral-5)",
      },

      backgroundImage: {
        "profile-bg-square": "url('./assets/Profile-BG-Square.jpg')",
      },
    },
    fontFamily: {
      signature: ["Aldrich"],
      sen: ["Sen"],
    },
  },
  plugins: [],
};
