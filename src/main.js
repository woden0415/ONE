import Vue from 'vue'
import VueResource from 'vue-resource'

/*引入router路由*/
import router from './router.js'

/*引入lib文件*/
import './libs/pure.min.css'
import './assets/iconfonts/iconfont.css'
import './assets/style/common.css'
import Frame from './views/Frame.vue'
Vue.use(VueResource);

const app = new Vue({
  router: router,
  render: h => h(Frame)
}).$mount('#app')
