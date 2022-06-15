module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: "#0FCFEC",
          secondary: "#71797E",
          accent: "#6A0DAD",
          "base-100": "#ffffff",
        },

      },

      "dark",
      "cupcake",
    ],
  },
}
