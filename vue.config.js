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
          @import "@/scss/_about.scss";
        `
      }
    }
  }
};