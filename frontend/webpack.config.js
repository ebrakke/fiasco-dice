const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
}

module.exports = {
	entry: PATHS.app,
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: PATHS.build,
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		debug: true,
		devtool: 'source-map',
		stats: 'errors-only',
		host: process.env.HOST || '0.0.0.0',
		port: process.env.PORT || 8080
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
		}),
		new CleanWebpackPlugin(['build'], {
			"verbose": true
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: PATHS.app
			},
			{
				test: /\.less$/,
				loaders: ['style', 'css', 'less']
			},
			{
				test: /\.ttf$/,
				loaders: ['file-loader']
			},
			{
				test: /\.jsx?$/,
				loader: 'babel',
				include: PATHS.app
			}
		]
	}
}
