module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
    'airbnb',
  ],
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: { 'i18next/no-literal-string': 0 },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'linebreak-style': [
      'warn',
      'windows',
    ],
    indent: ['error', 2],
    'no-tabs': 0,
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    'import/extensions': 0,
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    '@typescript-eslint/consistent-type-imports': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'max-len': ['warn', { code: 140, ignorePattern: '^import .*', ignoreComments: true }],
    '@typescript-eslint/ban-ts-comment': 'warn',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 0,
    'no-restricted-syntax': 'warn',
    'no-underscore-dangle': 0,
    'react/require-default-props': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/no-var-requires': 0,
    'no-shadow': 0,
    'no-unused-vars': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'i18next/no-literal-string': ['error', { markupOnly: true, onlyAttribute: [''] }],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
  globals: {
    __IS_DEV__: true,
  },
};
