const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const remarkGfm = require('remark-gfm');


const mode = process.env.NODE_DEV === 'development' ? 'development' : 'production';

module.exports = {
  mode: 'development',
  entry: {
    index: resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '../build')
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 80,
    hot: true,
    contentBase: resolve(__dirname, '../build'),
    open: true,
    inline: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ] 
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins: [remarkGfm]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin({template: resolve(__dirname, '../public/index.html')})
  ],
  resolve: {
    fallback: {
      path: require.resolve('path-browserify')
    }
  }
}