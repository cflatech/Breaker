module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["prettier", "plugin:@typescript-eslint/recommended"],
  root: true,
  ignorePatterns: [".eslintrc.js"],
};
