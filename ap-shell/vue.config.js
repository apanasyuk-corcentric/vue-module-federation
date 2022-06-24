const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const shared = require('./package.json').dependencies;
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
