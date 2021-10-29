const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

process.env.NODE_ENV = 'development';

module.exports = merge(baseConfig, {
  devServer: {
    static: {
      directory: `${__dirname}/static`
    },
    hot: true,
    historyApiFallback: true,
    port: 8080
  },
  devtool: 'source-map',
  mode: 'development',
});
