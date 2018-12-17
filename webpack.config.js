module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(.js|.jsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.(.js|.jsx)$/,
        use: ['eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: ['js','jsx']
  }
};