module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    'next',
    'eslint:recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    // JavaScript rules
    'prefer-const': 'warn',
    'no-var': 'warn',
    'no-unused-vars': 'error',
    'no-console': 'error',
    'object-shorthand': 'warn',
    'quote-props': ['warn', 'as-needed'],
    // TypeScript rules
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    // React rules
    'react/jsx-fragments': ['warn', 'syntax'], // Shorthand syntax for React fragments
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['ts', 'tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'off',
    'no-empty-pattern': 'off', // Allow empty destructuring patterns
    'no-use-before-define': 'error', // Disable "use before define" for all variables and functions
    'no-shadow': 'off', // Disable shadowed variable rule
    '@typescript-eslint/no-shadow': 'off', // Disable shadowed variable rule for TypeScript
    '@typescript-eslint/no-use-before-define': 'error', // Disable "use before define" for TypeScript
    'react/jsx-no-constructed-context-values': 'off', // Allow constructed context values in React
    '@typescript-eslint/no-explicit-any': 'off',
    'import/extensions': 'off',
    'import/order': 'error', // Disable import order rule to avoid conflict with simple-import-sort
    '@typescript-eslint/no-unused-vars': 'error', // Disable unused variables rule for TypeScript
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
