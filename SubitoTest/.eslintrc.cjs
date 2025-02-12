module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescripteslint/recommended", "prettier"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "react-hooks"],
    env: {
    browser: true,
    es2021: true,
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": "warn",
    },
};
