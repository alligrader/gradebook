// var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
//  plugins: [
//    new FlowStatusWebpackPlugin({failOnError: true})
//  ],

module.exports = {
    
  entry: [
    './src/index.js'
  ],
  
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  
  module: {
    preloaders: [],
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }, { 
        test: /\.jsx?$/,
        loader: 'eslint', 
        exclude: /node_modules/ 
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  eslint: {
      failOnWarning: false,
      failOnError: true
  }
};
