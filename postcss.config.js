module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-simple-vars")({
      variables: require("./src/styles/variables.css.js")
    }),
    require("postcss-nested"),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default"
    })
  ]
};
