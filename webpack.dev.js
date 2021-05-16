const path = require(`path`);
const { merge } = require(`webpack-merge`);

const common = require(`./webpack.common.js`);

const config = merge(common, {
  mode: `development`,
  devtool: `inline-source-map`,
  devServer: {
    contentBase: [path.join(__dirname, `public`), path.join(__dirname, `build`)],
    historyApiFallback: true,
  },
});

// eslint-disable-next-line import/no-commonjs
module.exports = config;
