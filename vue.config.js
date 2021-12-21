module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/dist/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
          @import "@/scss/_typography.scss";
          @import "@/scss/_global.scss";
          @import "@/scss/_transitions.scss";
          @import "@/scss/_videoplyr.scss";
          @import "@/scss/_projects.scss";
          @import "@/scss/_navigation.scss";
        `
      }
    }
  },
  // commenting out this loader, was trying to iterate svg files in json for client logos
  // chainWebpack: config => {
  //   config.module
  //     .rule('html')
  //     .test(/\.html$/)
  //     .use('html-loader')
  //     .loader('html-loader')
  // }
};