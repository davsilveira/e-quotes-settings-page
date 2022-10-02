const defaults = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaults,
	devServer: {
		devMiddleware: { writeToDisk: true },
		allowedHosts: 'auto',
		host: 'ecotacoes-plugin.test',
		port: 8887,
		proxy: { '/build': [Object] }
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
};
