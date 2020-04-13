module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    themeColor: '#113a5d'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/covid-19/'
    : '/'
}