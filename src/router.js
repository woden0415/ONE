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
  routes: routePath,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

export default router