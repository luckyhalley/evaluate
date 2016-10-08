import webpack from "webpack";
import path from "path";
import autoprefixer from "autoprefixer";
import ExtractTextPlugin from "extract-text-webpack-plugin";

let public_path = '/evaluate/';
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
    path: public_path,
    filename: 'js/bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: "eslint",
      exclude: [/node_modules/]
    }],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss\?m$/,
        loader: ExtractTextPlugin.extract(
          ["css-loader?modules",
            "postcss-loader",
            "sass-loader"
          ])
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          ["css-loader",
            "postcss-loader",
            "sass-loader"
          ])
      },
      {
        test: /\.(ttf|eot|svg|woff)$/,
        loader: "file-loader?name=" + public_path + "font/[name].[ext]"
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
  externals: {},
  plugins: [
    new ExtractTextPlugin("styles/bundle.css"),
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