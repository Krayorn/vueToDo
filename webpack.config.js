const path = require('path')

module.exports = {
    entry : "./scripts/main.js",
    output : {
        filename: 'bundle.js',
        path : path.join(__dirname, "build")
    }
}
