const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge')
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.config.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: './dist',
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false,
    }),
    new ESLintPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules', // 默认值
      cache: true, // 开启缓存
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'), // 缓存目录
    }),
  ],
})
