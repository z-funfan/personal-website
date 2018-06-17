// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  ConfirmPlugin
} from 'vux'

Vue.config.productionTip = false

Vue.use(ConfirmPlugin)

Vue.filter('truncate', function(text, stop, clamp) {
  if (text) {
    return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
  }
  return text
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
