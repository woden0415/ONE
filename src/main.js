import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'


import routePath from './router.js'

import './libs/pure.min.css'
import './assets/iconfonts/iconfont.css'
import './assets/style/common.css'

Vue.use(VueRouter);
Vue.use(VueResource);



const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routePath
})

const app = new Vue({
  router: router
}).$mount('#app')
