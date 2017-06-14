import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import FramePage from './views/Frame.vue'
import one from './components/mains/oneTpl.vue'
import read from './components/mains/readTpl.vue'

import music from './components/mains/musicTpl.vue'
import movie from './components/mains/movieTpl.vue'
import download from './components/mains/downloadTpl.vue'
import about from './components/mains/aboutTpl.vue'

const routePath = [
  {
    path: '/',
    redirect: '/one'
  },
  {
    path: '/one',
    component: one
  },
  {
    path: '/read',
    component: read
  },
  {
    path: '/music',
    component: music
  },
  {
    path: '/movie',
    component: movie
  },
  {
    path: '/download',
    component: download
  },
  {
    path: '/about',
    component: about
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