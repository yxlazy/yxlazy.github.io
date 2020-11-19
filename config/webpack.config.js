const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const remarkGfm = require('remark-gfm');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({template: resolve(__dirname, '../public/index.html')}),
]

const optimization = {
  splitChunks: {
    chunks: 'all',
    maxSize: 244000
  },
  minimize: true,
  minimizer: [new TerserPlugin()]
}

module.exports = env => {
  const mode = env.NODE_ENV !== 'production' ? 'development' : 'production';
  const devMode = !env.production;

  //MiniCssExtractPlugin会使HMR功能缺失
  if (!devMode) {
    plugins.push(new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}));
    plugins.unshift(new CleanWebpackPlugin({cleanStaleWebpackAssets: false}));
  }
  
  return {
    mode,
    entry: {
      index: resolve(__dirname, '../src/index.js')
    },
    output: {
      filename: '[name].[hash].js',
      path: resolve(__dirname, '../docs')
    },
    optimization: devMode ? {} :  Object.assign({}, optimization),
    devtool: devMode ? 'inline-source-map' : false,
    devServer: {
      port: 80,
      hot: true,
      contentBase: resolve(__dirname, '../docs'),
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
          test: /\.(sa|sc|c)ss$/,
          use: [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
    plugins,
    resolve: {
      fallback: {
        path: require.resolve('path-browserify')
      }
    }
  }
}