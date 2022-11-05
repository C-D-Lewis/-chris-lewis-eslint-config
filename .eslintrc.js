module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'plugin:jsdoc/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-multi-spaces': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-alert': 0,
    'jsdoc/require-jsdoc': [1, {
      require: {
        FunctionExpression: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
      },
    }],
  },
  plugins: ['jsdoc'],
};
