module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: { react: { version: 'detect' } },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,jsx,cjs}'],
      parserOptions: { sourceType: 'script' },
    },
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
  },
};
