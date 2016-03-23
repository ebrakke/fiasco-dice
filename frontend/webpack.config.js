var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './app',
	output: {
		path: 'dev',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'main',
			children: true,
			minChunks: 2
		}),
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
	],
	module: {
		preLoaders: [
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
				exclude: 'node_modules',
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.html/,
				exclude: 'node_modules',
				loader: 'html'
			},
			{test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
		]
	}
}