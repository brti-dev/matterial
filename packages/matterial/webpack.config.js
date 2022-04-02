const path = require('path')
const nodeExternals = require('webpack-node-externals')
const MiniCss = require('mini-css-extract-plugin')
const copyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  externals: [
    {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'React',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'ReactDOM',
        root: 'ReactDOM',
      },
    },
  ],
  output: {
    clean: true,
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'matterial',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  plugins: [
    new MiniCss({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new copyPlugin({
      patterns: [{ from: 'src/styles', to: 'src/styles' }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          {
            loader: MiniCss.loader,
            options: { esModule: false },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]',
              },
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // Prefer dart-sass
              implementation: require('sass'),
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          { loader: MiniCss.loader },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // Prefer dart-sass
              implementation: require('sass'),
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
}
