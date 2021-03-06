const path = require(`path`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const { TsConfigPathsPlugin } = require(`awesome-typescript-loader`);

const config = {
  entry: [`./src/index.tsx`],
  output: {
    path: path.resolve(__dirname, `build`),
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `.jsx`],
    plugins: [new TsConfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: `ts-loader`,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CopyWebpackPlugin({ patterns: [{ from: `assets`, to: `assets` }] })],
};

// eslint-disable-next-line import/no-commonjs
module.exports = config;
