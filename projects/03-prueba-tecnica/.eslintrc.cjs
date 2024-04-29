module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  ignorePatterns: ['dist/'],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' },
    },
  ],
  settings: { react: { version: 'detect' } },

  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react'],
  rules: {},
};
