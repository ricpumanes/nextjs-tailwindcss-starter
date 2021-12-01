module.exports = {
  extends: ["react-app", "plugin:storybook/recommended"],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['__tests__/**']
    }],
    'import/no-unresolved': ['error', {
      ignore: ['^@']
    }],
    'import/named': 0
  },
  globals: {
    React: 'writable'
  }
};