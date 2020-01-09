import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
