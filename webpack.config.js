module.exports = {
  entry: {
    'react-bootstrap-modal-provider': './src/index.js',
  },
  output: {
    path: './dist',
    filename: '[name].js',
    library: 'ReactBootstrapModalProvider',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    {
      'react-bootstrap': {
        root: 'ReactBootstrap',
        commonjs2: 'react-bootstrap',
        commonjs: 'react-bootstrap',
        amd: 'react-bootstrap',
      },
    },
  ],
};
