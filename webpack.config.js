const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const JsonWebpackPlugin = require('generate-json-webpack-plugin');
const jobs = require('./src/data/jobs.json');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: 'src/layouts/main.html'
    }),
    new JsonWebpackPlugin('jobs.json', jobs),
  ]
}
