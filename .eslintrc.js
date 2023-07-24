module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
 plugins: ['prettier'],
  ignorePatterns: ['node_modules/', 'dist/'],
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
  globals: {
    window: 'readonly',
  },
  rules: {
 'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 'off',
