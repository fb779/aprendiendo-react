const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
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
  plugins: ['react'],
  rules: {
    'react/prop-types': RULES.OFF,
  },
};
