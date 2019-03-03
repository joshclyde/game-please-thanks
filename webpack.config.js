var path = require("path");
// var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var { TsConfigPathsPlugin } = require("awesome-typescript-loader");
// config.plugins = config.plugins.concat([
//   new CopyWebpackPlugin([
//     { from: 'client/assets', to: 'assets' }
//   ]),
// ...
// ]);

var config = {
  mode: "development",
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [ new TsConfigPathsPlugin() ],
  },
  devServer: {
    contentBase: [path.join(__dirname, "public"), path.join(__dirname, "build")],
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([{ from: "assets", to: "assets" }]),
  ],
};

module.exports = config;
