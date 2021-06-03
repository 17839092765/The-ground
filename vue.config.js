/*
 * @Author: zx
 * @Date: 2021-06-03 10:27:28
 * @LastEditTime: 2021-06-03 10:46:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \the_ground\vue.config.js
 */
const webpack = require("webpack");

module.exports = {
  devServer: {
    open: true,
    // 项目运行时候的端口号
    port: 8080,
  },
  css: {
    sourceMap: true, // 开启 CSS source maps
  },
  publicPath: "./",

  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
    ],
    //关闭 webpack 的性能提示
    performance: {
      hints: false,
    },

    //警告 webpack 的性能提示
    performance: {
      hints: "warning",
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith(".js");
      },
    },
  },
};
