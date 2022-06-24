const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const path = require('path');
const shared = Object.keys(deps).reduce((shared, pkg) => ({...shared, [pkg]: { eager: true,  singleton: true} }), {});
function normalizeName(name) {
    const newName = name.replace(/node_modules/g, "nodemodules").replace(/[\-_.|]+/g, " ")
        .replace(/\b(vendors|nodemodules|js|modules|es)\b/g, "")
        .trim().replace(/ +/g, "-");
    const distIndex = newName.indexOf('dist');
    return newName.substring(distIndex !== -1 ? distIndex + 5 : 0);
}
module.exports = {
    entry: './src/index',
    optimization: {
        chunkIds: 'named'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3005,
    },
    output: {
        chunkFilename: (pathData) => normalizeName(pathData.chunk.id) + ".js",
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'reactApp',
            filename: 'remoteEntry.js',
            exposes: {'./reactApp': './src/index.js'},
            shared,
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
