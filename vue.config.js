
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: true,
  chainWebpack: () => { },
  configureWebpack: () => { },
  productionSourceMap: true,

  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
    open: process.platform === 'darwin',
    disableHostCheck: true,
    https: false,
    hotOnly: false,
    proxy: {
    // 配置反向代理
      '/api': {
        target: 'http://127.0.0.1:8888',
        ws: true,
        changeOrigin: true
      }
    },
  },
  // 第三方插件配置
  pluginOptions: {
  
  }
};
