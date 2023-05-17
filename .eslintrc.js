module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: [
    '@typescript-eslint'  // For TypeScript.
  ],
  overrides: [ // Use `overrides` so ESLint can check both JS and TS files.
  {
    files: ['*.ts', '*.tsx'],
    extends: [
      'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json'],
    },
  },
],
ignorePatterns: ['.eslintrc.js'],
  env: {
    browser: true,
    node: true,
  },
};
