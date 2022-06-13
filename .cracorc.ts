export default {
	babel: {
		presets: [['@emotion/babel-preset-css-prop']],
	},

	plugins: [
		{
			plugin: require('craco-alias'),
			options: {
				source: 'tsconfig',
				baseUrl: require('./tsconfig.paths.json').compilerOptions.baseUrl,
				tsConfigPath: './tsconfig.paths.json',
			},
		},
		{
			plugin: require('craco-plugin-scoped-css'),
		},
		{
			plugin: require('./.misc/craco-plugin-sass-additional-data'),
			options: {
				pathToFile: './src/assets/styles/additionalData.json',
			},
		},
	],
}
