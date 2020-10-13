const prettierRules = require(`./prettier`);
const typescriptRules = require(`./typescript`);
const importRules = require(`./import`);

// eslint-disable-next-line import/no-commonjs
module.exports = {
  ...prettierRules,
  ...typescriptRules,
  ...importRules,
};
