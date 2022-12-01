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
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-floating-promises': [
      'off'
    ],
    '@typescript-eslint/naming-convention': 'off'
  }

}
