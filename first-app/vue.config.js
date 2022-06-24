const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;
const isProd = process.env.NODE_ENV === "production";
const shared = Object.keys(deps).reduce((shared, pkg) => ({...shared, [pkg]: { eager: !isProd,  singleton: true} }), {});
function normalizeName(name) {
    const newName = name.replace(/node_modules/g, "nodemodules").replace(/[\-_.|]+/g, " ")
        .replace(/\b(vendors|nodemodules|js|modules|es)\b/g, "")
        .trim().replace(/ +/g, "-");
    const distIndex = newName.indexOf('dist');
    return newName.substring(distIndex !== -1 ? distIndex + 5 : 0);
}
module.exports = {
    publicPath: "auto",
    configureWebpack: {
        output: {
            chunkFilename: (pathData) => normalizeName(pathData.chunk.id) + ".js",
        },
        optimization: {
            chunkIds: 'named',
            splitChunks: false
        },
        devServer: {
            historyApiFallback: true,
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'firstApp',
                filename: 'remoteEntry.js',
                exposes: {'./firstApp': './src/main.js'},
                shared
            })
        ]
    }
}
