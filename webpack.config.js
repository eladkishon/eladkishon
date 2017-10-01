var webpack = require("webpack");

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.(png|jpg|svg|ico)$/, loader: 'url-loader'}
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
        })
    ]


};