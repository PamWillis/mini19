const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    hot: 'only',
  },

    // TODO: Add the correct plugins
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Client Server',
        template: './index.html',
      })
    ],
    // TODO: Add the correct modules
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
