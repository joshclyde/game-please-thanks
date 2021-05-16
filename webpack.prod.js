const { merge } = require(`webpack-merge`);

const common = require(`./webpack.common.js`);

const config = merge(common, {
  mode: `production`,
  devtool: `source-map`,
});

// eslint-disable-next-line import/no-commonjs
module.exports = config;
