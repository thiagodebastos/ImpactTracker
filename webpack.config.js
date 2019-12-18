const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const bundleFileName = "tailwind";
const baseDir = "ImpactTracker/wwwroot";
const distDir = `${baseDir}/dist`;

module.exports = (env, argv) => {
    return {
        mode: argv.mode === "production" ? "production" : "development",
        entry: ["./ImpactTracker/wwwroot/js/app.js","./ImpactTracker/wwwroot/css/styles.css"],
        output: {
            filename: bundleFileName + ".js",
            path: path.resolve(__dirname, distDir)
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: bundleFileName + ".css"
            })
        ]
    };
};
``