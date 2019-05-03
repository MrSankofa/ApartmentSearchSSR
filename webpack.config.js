const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
       }
    })
  ],
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx?$/], 
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

// module.exports = {
//   mode: 'development',
//   entry: {
//     app: ['babel-polyfill', `${SRC_DIR}/index.jsx`]
//   },
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   }, 
//   module: {
//     rules: [
//       {
//         test: [/\.js$/, /\.jsx?$/],
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         options: { 
//           presets: ['env', 'react', 'stage-0']
//         }
//       }
//     ]
//   }
// };