module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    node: true,
    es6: true,
  },
  globals: {
    Promise: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
};
