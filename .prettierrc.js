module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^@*/(.*)$",
    "^@common/(.*)$",
    "^@styled-system/(.*)$",
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
