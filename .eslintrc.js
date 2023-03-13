module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
	],
	overrides: [
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
		'linebreak-style': [
			'warn',
			'windows',
		],
		indent: [2, 'tab'],
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
		'max-len': ['warn', { code: 140, ignorePattern: '^import .*' }],
		'@typescript-eslint/ban-ts-comment': 'warn',
		'import/prefer-default-export': 'off',
		'class-methods-use-this': 'off',
		'no-restricted-syntax': 'warn',
		'no-underscore-dangle': 'warn',
	},
};
