module.exports = {
    mode: 'development',
    entry: {
        main:'./src/index.jsx'
    },
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}