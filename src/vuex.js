import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    sideMenuActive: true,
    centerTitle: ''
  },
  mutations: {
    changeStatus: state => state.sideMenuActive = !state.sideMenuActive
  }
})

export default store