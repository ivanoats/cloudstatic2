module.exports = {
  extends: ["plugin:react/recommended", "prettier", "prettier/react"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    semi: ["error", "never"]
  }
};
