'use strict';

const { resolve, join } = require('path'),
    webpack = require('webpack');

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20001&reload=true';

module.exports = {
    context: resolve(__dirname, 'src/'),
    entry: {
        home: ['./index.js', hotMiddlewareScript]
    },
    output: {
      path: join(__dirname, '/public/'),
      publicPath: '/public/',
      filename: 'js/[name].bundle.js',
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devtool: "#source-map"
};
