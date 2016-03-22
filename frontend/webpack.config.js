var webpack = require('webpack');

module.exports = {
	entry: './app',
	output: {
		path: 'builds',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			riot: 'riot'
		})
	],
	module: {
		preLoaders: [
			{
				test: /\.tag/,
				exclude: /node_modules/,
				loader: 'riotjs-loader',
				query: {
					type: 'none'
				}
			}
		],
		loaders: [
			{
				test: /\.js/,
				loader: 'babel-loader',
				include: __dirname + '/app',
				query:{presets: ['es2015']}
			},
			{
				test: /\.scss/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.html/,
				loader: 'html'
			}
		]
	}
}