const rules = require(`./eslint`);

// eslint-disable-next-line import/no-commonjs
module.exports = {
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [`prettier`, `@typescript-eslint`, `import`],
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
    "import/extensions": [`.js`, `.jsx`, `.ts`, `.tsx`],
  },
  extends: [`prettier`, `prettier/@typescript-eslint`, `prettier/react`],
  rules,
};
