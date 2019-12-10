const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    libraryExport: 'default',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      favicon: './client/favicon.png',
    }),
    new VueLoaderPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8000,
      proxy: 'http://localhost:8080/'
    }),
  ],

  resolve: {
    extensions: [ '.js', '.vue' ],
    alias: {
      'vue$': 'vue/dist/vue.runtime.js',
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
