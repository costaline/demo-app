module.exports = {
	env: {
		browser: true,
		es2021: true,
	},

	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],

	parser: '@typescript-eslint/parser',

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},

	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},

	plugins: ['import', 'react', '@typescript-eslint', 'simple-import-sort'],

	rules: {
		'arrow-body-style': 'off',
		'default-param-last': 'warn',
		'dot-notation': 'off',
		'global-require': 'off',
		'lines-between-class-members': ['warn', 'always'],
		'no-console': 'warn',
		'no-param-reassign': [
			'warn',
			{ props: true, ignorePropertyModificationsForRegex: ['^draft'] },
		],
		'no-restricted-exports': 'off',
		'no-unused-vars': [
			'warn',
			{
				varsIgnorePattern: '^_$',
				argsIgnorePattern: '^_$',
			},
		],
		'no-use-before-define': 'off',
		'object-curly-newline': 'off',
		'object-curly-spacing': ['warn', 'always'],
		'padded-blocks': ['warn', 'never'],
		'padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
		],
		'spaced-comment': 'warn',

		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-use-before-define': ['error', { functions: false }],
		'@typescript-eslint/no-var-requires': 'off',

		'import/export': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-cycle': 'off',
		'import/no-unresolved': 'error',
		'import/order': 'warn',
		'import/prefer-default-export': 'off',

		'jsx-a11y/click-events-have-key-events': 'warn',
		'jsx-a11y/no-noninteractive-element-interactions': 'warn',

		'object-shorthand': ['warn', 'properties'],

		'prettier/prettier': 'warn',

		'react/destructuring-assignment': [
			'warn',
			'always',
			{
				ignoreClassFields: true,
			},
		],
		'react/forbid-prop-types': ['warn', { forbid: ['any', 'array'] }],
		'react/function-component-definition': 'off',
		'react/jsx-curly-brace-presence': ['warn', 'never'],
		'react/jsx-filename-extension': [
			'warn',
			{ extensions: ['js', 'jsx', '.tsx'] },
		],
		'react/jsx-key': ['warn', { checkKeyMustBeforeSpread: true }],
		'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-sort-props': [
			'warn',
			{
				callbacksLast: true,
				shorthandFirst: true,
				shorthandLast: false,
				ignoreCase: false,
				noSortAlphabetically: false,
				reservedFirst: true,
			},
		],
		'react/jsx-uses-react': 'warn',
		'react/jsx-uses-vars': 'warn',
		'react/no-unused-prop-types': 'warn',
		'react/prop-types': 'warn',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'react/self-closing-comp': ['warn', { component: true, html: true }],

		'simple-import-sort/exports': 'warn',
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					[
						// Side effects
						'^\\u0000',
					],
					[
						// React
						'^(react)$',
						// Node.js builtins
						`^(${require('module').builtinModules.join('|')})(/|$)`,
						// Other packages
						'^@?\\w',
					],
					[
						// Alias imports
						'^(@|@@|@@(\\w+-?)*)(/.*(?<!\\.(jpe?g|png|svg|bmp|webp|css|scss|sass))$)',
						// Parent imports
						'^\\.\\.(?!/?$)',
						'^\\.\\./?$',
						// Relative imports
						'^\\./(?=.*!/)(?!/?$)',
						'^\\.(?!/?$)',
						'^\\./?$',
					],
					[
						// Styles
						'\\.module\\.(css|scss|sass)$',
						'\\.scoped\\.(css|scss|sass)$',
						'\\.(css|scss|sass)$',
						// Images
						'^.+\\.bmp$',
						'^.+\\.jpe?g$',
						'^.+\\.png$',
						'^.+\\.svg$',
						'^.+\\.webp$',
					],
				],
			},
		],
	},

	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			rules: {
				'no-shadow': 'off',
				'no-unused-vars': 'off',

				'@typescript-eslint/no-shadow': ['error'],
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						varsIgnorePattern: '^_$',
						argsIgnorePattern: '^_$',
					},
				],
			},
		},
	],
}
