var path = require('path');

module.exports = {
  entry: './src/app.ts',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: { extensions: ['.js', '.ts']},
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
