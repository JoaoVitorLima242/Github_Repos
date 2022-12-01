module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
    'react-native/react-native': true

  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    project: [
      './tsconfig.json'
    ],
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
  }
}
