const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    app: path.resolve(srcDir, 'app', 'root.jsx'),
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'scripts/[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [srcDir],
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        include: [srcDir],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      srcDir
    ],
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(srcDir, 'app/components'),
      containers: path.resolve(srcDir, 'app/containers'),
      models: path.resolve(srcDir, 'app/models'),
      mocks: path.resolve(__dirname, 'specs/mocks')
    }
  },

  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    proxy: {
      '/api': {
        target: 'https://api.github.com'
      }
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: "vendor" }),
    new HtmlWebpackPlugin({
      template: 'src/public/index.html',
      filename: 'index.html'
    })
  ]
};