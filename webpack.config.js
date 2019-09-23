const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname,'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: './bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    })
  ]
};
