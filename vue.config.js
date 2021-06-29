module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: 8080
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/index.scss";`
      }
    }
  },
  configureWebpack: config => {
    config.target = 'web';
  },
  chainWebpack: config => {
    config.module
      .rule('iview')
      .test(/iview.src.*?js$/)
      .use('babel')
        .loader('babel-loader')
        .end()
  },
  transpileDependencies: ['*']
};
