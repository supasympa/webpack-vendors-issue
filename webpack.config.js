const webpack = require('webpack')
const path = require('path')


/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            include: [path.resolve(__dirname, 'src')],
            loader: 'babel-loader',

            options: {
                plugins: ['syntax-dynamic-import'],

                presets: [['env', {
                    'modules': 'commonjs'
                }]]
            },

            test: /\.js$/
        }]
    },

    entry: './src/main',
    target: 'node',

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: 'development',

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true
                },
            },
            // concatenateModules: false,
            chunks: 'all',
            minChunks: 1,
            minSize: 0,
            name: true
        }
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
    ]
};
