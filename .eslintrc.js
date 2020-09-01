module.exports = {
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [`prettier`, `@typescript-eslint`],
  extends: [`prettier`, `prettier/@typescript-eslint`, `prettier/react`],
  rules: {
    "prettier/prettier": `error`,
    /*
      Typescript Rules
      https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    */
    "@typescript-eslint/quotes": [`error`, `backtick`],
  },
};
