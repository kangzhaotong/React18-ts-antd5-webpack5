/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
// eslint-disable-next-line import/no-extraneous-dependencies
const WebpackBar = require('webpackbar')
// eslint-disable-next-line prefer-destructuring
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.less', '.scss'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      _components: path.join(__dirname, '../src/components'),
      _images: path.join(__dirname, '../src/images'),
      _pages: path.join(__dirname, '../src/pages'),
      _util: path.join(__dirname, '../src/util'),
      _mock: path.join(__dirname, '../src/mock'),
      '@': path.resolve('../src'),
    },
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    new WebpackBar({
      color: '#85d', // 默认green，进度条颜色支持HEX
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 8889,
      openAnalyzer: false,
    }),
  ],
}
