const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'));
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, {
        limit: 15360,
      }));
  },
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        filename: '[path][base].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
};
