module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ["/tests/**"],
  rules: {
    "prettier/prettier": ["error"],
  },
};
