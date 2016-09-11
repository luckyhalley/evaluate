import webpack from 'webpack';
import path from 'path';
import autoprefixer from "autoprefixer";


let config = {
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
        loader: "style-loader!css-loader?modules!postcss-loader!sass"
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/styles")],
    outputStyle: 'compressed' //nested, expanded, compact, compressed
  },

  postcss: [autoprefixer],
  resolve: {
    root: [
      path.resolve('src/js'),
      path.resolve('node_modules')
    ]
  },
  externals: {

  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = config;