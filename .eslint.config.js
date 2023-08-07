export default {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'jest'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
