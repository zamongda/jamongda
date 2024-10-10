module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^@*/(.*)$",
    "^@common/(.*)$",
    "^react",
    "^@styled-system/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^[./]",
  ],
  // importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
