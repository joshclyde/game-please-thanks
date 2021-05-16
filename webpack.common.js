const path = require(`path`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const BundleAnalyzerPlugin = require(`webpack-bundle-analyzer`).BundleAnalyzerPlugin;
const { TsConfigPathsPlugin } = require(`awesome-typescript-loader`);

const config = {
  entry: [`./src/index.tsx`],
  output: {
    path: path.resolve(__dirname, `build`),
    filename: `bundle.js`,
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

  plugins: [
    new CopyWebpackPlugin([{ from: `assets`, to: `assets` }]),
    new BundleAnalyzerPlugin({
      analyzerMode: `static`,
    }),
  ],
};

// eslint-disable-next-line import/no-commonjs
module.exports = config;
