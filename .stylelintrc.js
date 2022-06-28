module.exports = {
	extends: [
		'stylelint-config-css-modules',
		'stylelint-config-clean-order',
		// 'stylelint-config-hudochenkov/order',
		'stylelint-config-prettier',
	],

	defaultSeverity: 'warning',

	rules: {
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-same-name-blockless', 'first-nested'],
				ignoreAtRules: ['else', 'include'],
			},
		],
		'at-rule-no-unknown': null,
		'color-hex-case': 'lower',
		'color-hex-length': 'long',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-block-trailing-semicolon': 'always',
		'indentation': 'tab',
		'no-missing-end-of-source-newline': true,
		'rule-empty-line-before': [
			'always',
			{
				except: ['after-single-line-comment', 'first-nested'],
			},
		],
		'selector-class-pattern': null,
		'max-empty-lines': [1, {ignore: ['comments']}]
	},

	overrides: [
		{
			files: ['*.scss', '**/*.scss', '*.sass', '**/*.sass'],

			extends: [
				'stylelint-config-standard-scss',
				'stylelint-config-css-modules',
				'stylelint-config-clean-order',
				// 'stylelint-config-hudochenkov/order',
				'stylelint-config-prettier',
			],

			rules: {
				'value-keyword-case': [
					'lower',
					{
						ignoreProperties: ['/^[$]/']
					}
				],

				'scss/dollar-variable-first-in-block': [
					true,
					{
						ignore: ['comments', 'imports'],
					},
				],
				'scss/at-rule-no-unknown': true,
				'scss/selector-no-redundant-nesting-selector': true,
			},
		},

		{
			files: ['*.sass', '**/*.sass'],

			rules: {
				'declaration-block-trailing-semicolon': 'never',
				'selector-type-no-unknown': null
			},

			customSyntax: 'postcss-sass'
		},

		{
			files: ["*.stylus", "*.styl", "**/*.stylus", "**/*.styl"],

			extends: [
				'stylelint-stylus/standard',
				'stylelint-config-css-modules',
				'stylelint-config-clean-order',
				// 'stylelint-config-hudochenkov/order',
				'stylelint-config-prettier'
			],

			rules: {
				'declaration-block-trailing-semicolon': 'never',

				'stylus/declaration-colon': 'always',
				'stylus/indentation': 'tab',
			}
		},

		{
			files: ["*.stylus", "**/*.stylus"],

			rules: {
				'declaration-block-trailing-semicolon': 'always',

				'stylus/declaration-colon': 'always',
				'stylus/pythonic': 'never',
				'stylus/semicolon': 'always',
			}
		},

		{
			files: [
				'*.js',
				'**/*.js',
				'*.jsx',
				'**/*.jsx',
				'*.ts',
				'**/*.ts',
				'*.tsx',
				'**/*.tsx',
			],

			rules: {
				'value-keyword-case': null
			},

			extends: [
				'stylelint-config-standard-scss',
				'@stylelint/postcss-css-in-js',
				'stylelint-config-clean-order',
				// 'stylelint-config-hudochenkov/order',
				'stylelint-config-prettier'
			],

			customSyntax: '@stylelint/postcss-css-in-js'
		},
	],
}
