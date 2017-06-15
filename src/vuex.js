import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    sideMenuActive: false,
    topicTitle: '一个'
  },
  mutations: {
    changeStatus: state =>  state.sideMenuActive = !state.sideMenuActive,
    changeTitle: function(state, title){
      var menuCode = ['one', 'picture', 'read', 'music', 'movie', 'download', 'about']
      var menuName = ['一个', '一个图文', '一个阅读', '一个音乐', '一个影视', 'App下载', '关于']
      //var newTitle = ''
      for(var i = 0; i < menuCode.length; i++ ){
        if(title === menuCode[i]){
          title = menuName[i];
          break;
        }
      }
      return state.topicTitle = title
    }
  }
})

export default store