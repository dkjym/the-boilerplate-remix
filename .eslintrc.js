/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "prettier",
    "plugin:tailwindcss/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["tailwindcss", "@typescript-eslint", "unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/consistent-type-imports": ["error"],
  },
  overrides: [{ files: ["*.ts", "*.tsx"], parser: "@typescript-eslint/parser" }],
};
