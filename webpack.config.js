const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/counter.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'counter.min.js',
        library: 'counter',
        libraryTarget: 'window',
    },
    resolve: {
        alias: {
            "react": "preact/compat",
            "react-dom": "preact/compat",
        },
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        contentBase: '.',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: true
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
};