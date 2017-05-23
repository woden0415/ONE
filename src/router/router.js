import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index.vue'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})
