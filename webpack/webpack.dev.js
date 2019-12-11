const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const {
  prod_Path,
  src_Path
} = require('./path');
const {
  selectedPreprocessor
} = require('./loader');

module.exports = {
  entry: {
    main: './' + src_Path + '/index.js'
  },
  output: {
    path: path.resolve(__dirname, prod_Path),
    filename: '[name].[chunkhash].js'
  },
  devtool: 'source-map',
  devServer: {
    open: true,
  },
  module: {
    rules: [{
        test: selectedPreprocessor.fileRegexp,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: selectedPreprocessor.loaderName,
            options: {
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
        }],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new LiveReloadPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/privacy-policy.html',
      filename: 'privacy-policy.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/index.html',
      filename: 'index.html'
    }), 
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/how-it-works.html',
      filename: 'how-it-works.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/retailers.html',
      filename: 'retailers.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/manufacturers.html',
      filename: 'manufacturers.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/about_us.html',
      filename: 'about_us.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './' + src_Path + '/blog.html',
      filename: 'blog.html'
    })
  ]
};