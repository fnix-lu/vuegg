const path = require('path')

module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    'home/index': 'app/web/pages/home/index.js'
  },
  resolve: {
    alias: {
      '~': path.join(__dirname),
      components: path.join(__dirname, 'app/web/components')
    }
  }
}
