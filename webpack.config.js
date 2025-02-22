const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
  context: path.join(__dirname,'src'),
  entry: ['whatwg-fetch','./index.js'],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: './bundle.js',
    publicPath: '/',
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL)
    })
  ]
};
