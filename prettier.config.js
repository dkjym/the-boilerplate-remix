/** @type {import('prettier').Config} */
module.exports = {
  // prettier
  printWidth: 120,

  // @ianvs/prettier-plugin-sort-imports
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/components/(.*)$",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.1.3",
};
