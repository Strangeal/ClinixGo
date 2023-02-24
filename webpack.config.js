const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // production
  devtool: 'source-map',
  cache: false,
  entry: {
    application: './app/javascript/application.js', // keep
    // another: './app/javascript/another-module.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    path: path.resolve(__dirname, 'app/assets/builds'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      usedExports: true,
    },
  },
  plugins: [

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
