const path = require('path');
module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  mode: 'development',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-maps',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
