module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  env: {
    browser: true,
    es2020: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
  },
};
