import webpack from 'webpack';
import path from 'path';
module.exports = {
  devtool: 'eval',
  context: process.cwd(),
  entry: {
    evaluate: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=1000',
      './src/js/app.js'
    ]
  },
  output: {
    path: '/build',
    filename: '[name]/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: "style-loader?sourceMap!css-loader?sourceMap&modules!sass?sourceMap"
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/styles")]
  },
  resolve: {
    root: [
      path.resolve('src/js'),
      path.resolve('node_modules')
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
