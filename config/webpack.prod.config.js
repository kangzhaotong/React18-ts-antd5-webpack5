const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge')
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin')
// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// eslint-disable-next-line import/no-extraneous-dependencies
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.config.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name]-bundle-[hash:6].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body',
      minify: {
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].[hash:6].css',
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules', // 默认值
      cache: true, // 开启缓存
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'), // 缓存目录
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 屏蔽log
          },
        },
      }),
    ],
  },
})
