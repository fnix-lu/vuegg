import Vue from 'vue'

const render = options => {
  Vue.prototype.$http = require('axios')

  if (options.store) {
    options.store.replaceState(window.__INITIAL_STATE__ || {})
  } else if (window.__INITIAL_STATE__) {
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data())
  }

  const app = new Vue(options)
  app.$mount('#app')
}

export default render
