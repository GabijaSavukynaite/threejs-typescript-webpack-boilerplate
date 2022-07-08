const path = require('path');

// https://medium.com/@raviroshan.talk/webpack-understanding-the-publicpath-mystery-aeb96d9effb1
module.exports = {
    mode: 'none',
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true, importLoaders: 1 },
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        publicPath: '/',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
};
