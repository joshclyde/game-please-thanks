module.exports = {
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [`prettier`],
  extends: [`prettier`, `prettier/@typescript-eslint`, `prettier/react`],
  rules: {
    "prettier/prettier": `error`,
    // quotes: [`error`, `backtick`],
  },
};
