<template>
  <div class="one-sidebar pure-g" v-show="sideMenuActive!=true">
    <div class="pure-u-3-5">
      <ul class="item-list">
        <li v-for="menu in menuLists"><router-link v-bind:to="menu.link">{{menu.title}}</router-link></li>
        <!--<li v-for="menu in menuLists" v-on:click="routerTo(menu.link)">{{menu.title}}</li>-->
      </ul>
    </div>
    <div class="pure-u-2-5" >
      <div class="mask" v-on:touchend="sideBarShow"></div>
    </div>
  </div>
</template>

<script>
  import store from '../../vuex.js'
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import routePath from '../../router.js'
  Vue.use(VueRouter);
  const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routePath
  })
  export default {
    data () {
      return {
        menuLists: [
          {link: 'one', title: '一个'},
          {link: 'read', title: '阅读'},
          {link: 'music', title: '音乐'},
          {link: 'movie', title: '影视'},
          {link: 'download', title: 'App下载'},
          {link: 'about', title: '关于'}
        ]
      }
    },
    computed: {
      sideMenuActive(){
        return store.state.sideMenuActive;
      }
    },
    methods: {
      sideBarShow(){
        store.commit('changeStatus');
      },
      routerTo(path){
        router.push('one')
        console.log("a")
      }
    }
  }
</script>

<style>
  .one-sidebar {
    position: absolute;
    width: 100%;
    top: 0;
    text-align: center;
    border-right: 1px solid #acacac;
    z-index: 1;
  }
  .one-sidebar ul {
    padding: 0;
    background-color: #fff;
  }
  .one-sidebar li {
    line-height: 44px;
    border-bottom: 1px solid #b7b7b7;
  }
  .one-sidebar .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(192, 192, 192, 0.19);
    box-shadow: inset 3px 0px 18px 3px #909090;
  }
</style>