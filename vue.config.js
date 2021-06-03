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
        `
      }
    }
  }
};