const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common(), {
    mode: "development",
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                BACKEND_URL: JSON.stringify("https://193.178.43.128:1337"),
            },
        }),
    ],
});
