import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import {request} from './network/request'

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

// axios.defaults.baseURL = 'http://123.207.32.32:8000/api/w1'
// axios({
//   url: 'http://123.207.32.32:8000/api/w1/home/multidata'
// }).then(res => {
//   console.log(res)
// })
// axios({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })



request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
