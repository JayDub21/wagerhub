const path = require('path');
module.exports = {
  mode: 'development',
  entry: './wagerhub_container/wh_react/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve('./wagerhub_container/wh_react/static/frontend'),
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
};
