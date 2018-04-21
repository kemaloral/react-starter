const path = require('path');
const webpack = require('webpack');
 
module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    const isBundle = env && env.bundle;
    const clientBundleOutputDir = './dist';
 
    const config = {
        target: 'node',
        devtool: isDevBuild ? 'source-map' : 'hidden-source-map',
        mode: isDevBuild ? 'development' : 'production',
        externals: [
            /^[a-z\-0-9]+$/ // Ignore node_modules folder
        ],
        node: {
            __dirname: false
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            modules: [
                'node_modules'
            ]
        },
        entry: {
            'main': ['./server/index.ts']
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                include: [/server/],
                exclude: /node_modules/,
                use: [
                    // 'ts-loader'
                    'awesome-typescript-loader?silent=true'
                ]
            }]
        },
        output: {
            path: path.resolve(".", 'dist'),
            publicPath: "/",
            filename: '[name].js',
            libraryTarget: "commonjs"
        },
   
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
            })
        ]
    };
 
    return config;
};