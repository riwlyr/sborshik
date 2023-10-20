const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    output: {
        filename: "./js/index.js",
        path: path.resolve(__dirname, "./build/")
    },
    devServer: {
        hot: true,
        static: {
            watch: true,
            directory: "./build/"
        }
    }
} 