const defaults = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaults,
	devServer: {
		devMiddleware: { writeToDisk: true },
		allowedHosts: 'auto',
		host: 'equotes.local',
		port: 9887,
		proxy: { '/build': [Object] }
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	entry: {
		index: path.resolve( process.cwd(), './src', 'index.tsx' )
	},
	output: {
		filename: '[name].js',
		path: path.resolve( process.cwd(), './build' ),
	},
	module: {
		...defaults.module,
		rules: [
			...defaults.module.rules,
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.json',
							transpileOnly: true,
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [ '.ts', '.tsx', ...(defaults.resolve ? defaults.resolve.extensions || ['.js', '.jsx'] : [])]
	},
};
