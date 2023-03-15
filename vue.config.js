const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // assetsDir: 'static',
  // parallel: false,
  // publicPath: './',
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint检查
  devServer: {
    hot: true, // 热更新
    // open: true, // 当服务启动时自动打开浏览器 默认是false
    proxy: {
      '/nhentai': {
        target: 'http://43.142.168.59:9990/', // 服务器代理地址
        ws: false, // ws为true时可进行websocket通信
        changeOrigin: true,
        // 路径重写
        pathRewrite: {
          '^/nhentai': '/',
        },
      },
    },
  },
})
