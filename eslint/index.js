const prettierRules = require(`./prettier`);
const typescriptRules = require(`./typescript`);
const importRules = require(`./import`);
const reactHooksRules = require(`./react-hooks`);
const reactRules = require(`./react`);

// eslint-disable-next-line import/no-commonjs
module.exports = {
  ...prettierRules,
  ...typescriptRules,
  ...importRules,
  ...reactHooksRules,
  ...reactRules,
};
