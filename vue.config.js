module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  outputDir: "public_html",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @use "@/scss/_variables.scss" as *;
          @use "@/scss/_mixins.scss" as *;
        `,
      },
    },
  },
};
