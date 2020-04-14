module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'Covid 19',
    themeColor: '#113a5d',
    iconPaths: {
      favicon32: 'img/icons/bacteria.png',
      favicon16: 'img/icons/bacteria.png',
      appleTouchIcon: 'img/icons/bacteria.png',
      // maskIcon: 'img/icons/bacteria.svg',
      msTileImage: 'img/icons/bacteria.png'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/covid-19/'
    : '/'
}