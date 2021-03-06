const path = require('path');
const webpack = require('webpack');

const environment = process.env.NODE_ENV === 'production' ? 'production': 'development';

module.exports = {
  entry: {
    app: './src/index.js'
  },

  mode: environment,

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    port: 9000,
    contentBase: path.resolve('public'),
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'astroturf/css-loader',
          },
          // {
          //   loader: 'css-loader',
          //   options: {
          //     importLoaders: 1,
          //     minimize: true,
          //     modules: true
          //   }
          // },
          // {
          //   loader: 'postcss-loader'
          // }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'astroturf/loader'],

      }
    ]
  }
};
