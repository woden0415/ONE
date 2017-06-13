import Vue from 'vue'
import VueResource from 'vue-resource'

import router from './router.js'
import store from './vuex.js'
import util from './assets/js/util.js'

/*引入lib文件*/
import './libs/pure.min.css'
import './assets/iconfonts/iconfont.css'
import './assets/style/common.css'
import Frame from './views/Frame.vue'

Vue.use(VueResource);

const app = new Vue({
  router,
  store,
  render: h => h(Frame)
}).$mount('#app')
