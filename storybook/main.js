const custom = require(`../webpack.config.js`);

// eslint-disable-next-line import/no-commonjs
module.exports = {
  stories: [`../src/**/*.story.tsx`],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: custom.resolve,
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
