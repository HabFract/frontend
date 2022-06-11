//
module.exports = {
  // plugins: {
  //   tailwindcss: {},
  //   autoprefixer: {},
  //   'postcss-nested': {},
  // },
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
  ],
}
