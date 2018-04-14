const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

 
const cssExtractPlugin = new ExtractTextPlugin({
    filename: 'style.css',
    allChunks: true
});

module.exports = {
    devtool: "source-map",
    target: "web",
    devServer: {
        port: 3369,
        host: "localhost",
        contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
        compress: false, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        inline: true,
        watchContentBase: true,
        publicPath: "/"
    },
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [{
                test: /\.tsx?$/,

                use: ["awesome-typescript-loader"]
            },
            {
                test: /\.css$/,
                use: cssExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader'
                        }
                    ]
                })
            }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0 // This is example is too small to create commons chunks
                },
                vendor: {
                    test: (module) => {
                        if (module.resource && (/^.*\.(css|scss|sass)$/).test(module.resource)) {
                            return false;
                        }
                        return module.context && module.context.indexOf("node_modules") !== -1;
                    },
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    entry: {
        'index': ['./src/app.tsx']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: '[name].js'
    },
    plugins: [
        cssExtractPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(".", 'dist/index.html'),
            template: path.resolve(".", 'index.html'),
            inject: true,
            cache: false
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ]
};