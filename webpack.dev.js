const {merge} = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: false,
    inline: false,
    liveReload: false,
    injectClient: false,
  },
});
