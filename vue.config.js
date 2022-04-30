module.exports = {
  configureWebpack: {
    resolve: {
      // 配置路径别名
      alias: {
        // @ 为 src 的别名
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views" 
      }
    }
  }
}