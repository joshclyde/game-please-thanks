const TerserPlugin = require(`terser-webpack-plugin`);

const { merge } = require(`webpack-merge`);

const common = require(`./webpack.common.js`);

const config = merge(common, {
  mode: `production`,
  devtool: `source-map`,
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: `static`,
    }),
  ],
});

// eslint-disable-next-line import/no-commonjs
module.exports = config;
