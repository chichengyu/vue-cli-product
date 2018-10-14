// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 解决部分手机不支持 promise
import "babel-polyfill"

// require styles
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

// Vue.use(axios);
Vue.use(VueAwesomeSwiper);
FastClick.attach(document.body);

// vuex
import store from './store/index.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  render: c => c(App),
  template: '<App/>',
  store
})