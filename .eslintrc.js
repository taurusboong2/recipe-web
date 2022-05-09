module.exports = {
  plugins: ['prettier', 'react', '@typescript-eslint', 'react-hooks'],
  extends: [
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    AUTHNAME: 'readonly',
    AUTHPASS: 'readonly',
    PHASE: 'readonly',
  },
  rules: {
    'prettier/prettier': ['error'],
    'linebreak-style': 0,
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'no-undef': 'warn',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    // '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
