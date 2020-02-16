const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  mode: "none",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: ["node_modules", "src"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "babel-loader" }]
  }
};
