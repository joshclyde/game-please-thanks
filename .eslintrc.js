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
    "@typescript-eslint/quotes": [`error`, `backtick`],
  },
};
