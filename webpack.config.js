const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    devServer: {
        port: 3000,
    },
    performance: {
        hints: isDev ? false : 'warning',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images'),
                    to: path.resolve(__dirname, 'dist/images'),
                },
            ],
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, 'src/images/film-slate.png'),
            favicons: {
                appName: 'Movie Catalogue',
                appShortName: 'Movie',
                appDescription: 'The best curated Movies in Cinemas',
                background: '#ffffff',
                theme_color: '#d84315',
                start_url: './index.html',
                display: 'standalone',
                icons: {
                    appleStartup: false,
                },
            },
        }),
        ...(!isDev ? [new InjectManifest({
            swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
            swDest: 'sw.js',
        })] : []),
        new Dotenv({
            systemvars: true,
        }),
    ],
};
