import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    menuShow: false
  },
  mutations: {
    changeStatus: state => state.menuShow = !state.menuShow
  }
})

export default store