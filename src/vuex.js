import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    sideMenuActive: true,
    topicTitle: 'one'
  },
  mutations: {
    changeStatus: state =>  state.sideMenuActive = !state.sideMenuActive,
    changeTitle: (state, title) => state.topicTitle = title
  }
})

export default store