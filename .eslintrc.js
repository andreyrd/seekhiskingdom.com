module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'indent': [ 'error', 'tab' ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 'off',
    'semi': [ 'error', 'always' ],
  }
}
