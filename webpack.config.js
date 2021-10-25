const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractCSS = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[name][ext]',
    clean: true
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    compress: true,
    port: 4000
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new ExtractCSS({
      filename: './css/[name].bundle.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [ExtractCSS.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
}