import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import FramePage from './views/Frame.vue'
const routePath = [
  {
    path: '/',
    redirect: '/one'
  },
  {
    path: '/:id',
    component: FramePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routePath
})

export default router