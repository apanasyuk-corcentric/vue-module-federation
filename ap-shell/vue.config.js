const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const shared = require('./package.json').dependencies;

module.exports = {
    publicPath: "auto",
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        devServer: {
            historyApiFallback: true,
        },
        plugins: [
            new ModuleFederationPlugin({
                name: "app-shell",
                shared
            }),
        ]
    }
}
