const path = require('path')
// const nodeExternals = require('webpack-node-externals')
const MiniCss = require('mini-css-extract-plugin')
const copyPlugin = require('copy-webpack-plugin')

// const externals = [nodeExternals()] // Bundle all imported modules
const externals = [
  {
    react: 'react',
  },
]

module.exports = {
  entry: './src/index.ts',
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
    // new copyPlugin({
    //   patterns: [{ from: 'src/styles', to: 'src/styles' }],
    // }),
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
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // alias: {
    //   react: path.resolve('./node_modules/react'),
    //   'react-dom': path.resolve('./node_modules/react-dom'),
    //   // 'react/jsx-runtime': path.resolve('../../node_modules/react/jsx-runtime'),
    // },
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  externals,
}
