const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry : "./scripts/main.js",
    output : {
        filename: 'bundle.js',
        path : path.join(__dirname, "build")
    },
    plugins : [
        new UglifyJsPlugin({
            test: /^bundle\.js$/
        })
    ]
}
