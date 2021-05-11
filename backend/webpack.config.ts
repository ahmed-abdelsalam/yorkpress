import * as path from 'path';
import webpack = require('webpack');
// just in case you run into any typescript error when configuring `devServer`
// import "webpack-dev-server";

const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

const config: webpack.Configuration = {
  mode: 'production',
  entry: './index.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  target: 'node',
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  // plugins: [
  //   new CopyPlugin({
  //     patterns: [{ from: './models', to: './models' }],
  //     options: {
  //       concurrency: 100,
  //     },
  //   }),
  // ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|ts)$/,
  //       include: path.join(__dirname),
  //       exclude: path.join(__dirname, 'models'),
  //       // use: 'babel',
  //     },
  //     { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file' },
  //     {
  //       test: /\.(woff|woff2)$/,
  //       use: 'file-loader?prefix=font/&limit=5000',
  //     },
  //     {
  //       test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
  //       use: 'file-loader?limit=10000&mimetype=application/octet-stream',
  //     },
  //     {
  //       test: /\.svg(\?v=\d+.\d+.\d+)?$/,
  //       use: 'file-loader?limit=10000&mimetype=image/svg+xml',
  //     },
  //     { test: /\.(jpe?g|png|gif)$/i, use: 'file' },
  //     { test: /\.ico$/, use: 'file-loader?name=[name].[ext]' },
  //     // {
  //     //   test: /(\.css|\.scss)$/,
  //     //   loader: ['style', 'css?sourceMap', 'sass?sourceMap'],
  //     // },
  //   ],
  // },
};

export default config;
