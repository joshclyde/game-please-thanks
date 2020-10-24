const prettierRules = require(`./prettier`);
const typescriptRules = require(`./typescript`);
const importRules = require(`./import`);
const reactHooksRules = require(`./react-hooks`);

// eslint-disable-next-line import/no-commonjs
module.exports = {
  ...prettierRules,
  ...typescriptRules,
  ...importRules,
  ...reactHooksRules,
};
