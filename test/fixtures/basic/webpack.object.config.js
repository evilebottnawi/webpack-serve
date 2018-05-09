const path = require('path');

const webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: {
    app: './app.js',
  },
  output: {
    filename: './output.js',
    path: path.resolve(__dirname),
  },
  plugins: [new webpack.NamedModulesPlugin()],
  serve: {},
};
