module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
    // parser: 'babel-eslint',
    extends: [
      "eslint:recommended",
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      "plugin:vue/recommended",
      // "plugin:prettier/recommended"
    ],
    // 校验 .vue 文件
    plugins: [
        'vue',
        'html',
    ],
    // 自定义规则
    rules: {
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "no-console": "off",
        "vue/max-attributes-per-line": "off",
        // "prettier/prettier": ["error", { "semi": false }],
        "quotes": ["error", "single"],
        "vue/script-indent": ["error", 4, {
            "ignores": []
        }],
        "vue/html-indent": ["error", 4, {
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        // "vue/html-self-closing": "off",
        "camelcase": ["error", {"properties": "never"}],
        "no-alert": "error",
    }
}
  