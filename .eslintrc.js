module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
      "eslint:recommended", /* Reglas marcadas con ✓ en eslint.org/docs/rules/ */
      "standard"
    ],
    parserOptions: {
        ecmaFeatures: {
            "jsx": true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        react
    ],
    rules: {
    }
}
