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
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': 0,
	'no-mixed-spaces-and-tabs':0,
	'no-tabs':0,
	'indent':0,
	'key-spacing':0,
	'object-curly-newline': 0,
	'quote-props':0
  }
}
