module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'Covid 19',
    themeColor: '#113a5d'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/covid-19/'
    : '/'
}