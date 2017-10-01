var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
            },
            { test: /\.png|ico|svg$/, loader: "file-loader?limit=100000&name=dist/[hash].[ext]" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            Vue: [__dirname + '/js/vue.esm.js','default']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new ExtractTextPlugin({
            filename: "style.css",
            allChunks: true
        })
    ]


};