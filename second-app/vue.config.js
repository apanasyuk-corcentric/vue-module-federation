const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;
const isProd = process.env.NODE_ENV === "production";
const shared = Object.keys(deps).reduce((shared, pkg) => ({...shared, [pkg]: { eager: !isProd,  singleton: true} }), {});
module.exports = {
    publicPath: "auto",
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'secondApp',
                filename: 'remoteEntry.js',
                exposes: {'./secondApp': './src/main.js'},
                shared
            })
        ]
    }
}
