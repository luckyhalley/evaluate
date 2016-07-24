import webpack from 'webpack';
import path from 'path';
module.exports = {
  devtool: 'eval',
  context: process.cwd(),
  entry: {
    evaluate: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/js/app.js'
    ]
  },
  output: {
    path: '/build',
    filename: '[name]/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    root: ["src/js", "node_modules", "."],
    modulesDirectories: ["node_modules"],
    extensions: ["", ".js"]
  },
  resolveLoader: {
    root: path.join(process.cwd(), 'node_modules')
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
