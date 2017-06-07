<template >
  <div class="one-topbar">
    <a href="javascript:void(0)" class="top-icon icon-menu" v-on:touchend="sideBarShow">
      <i class="icon one-iconfont one-icon-caidan"></i>
    </a>
    <h4>{{$route.params.id}}</h4>
    <a href="javascript:void(0)" class="top-icon icon-search">
      <i class="icon one-iconfont one-icon-sousuo_sousuo"></i>
    </a>
  </div>
</template>

<script>
  import store from '../../vuex.js'
  export default {
    methods: {
      sideBarShow(){
        store.commit('changeStatus')
      }
    }
  }
</script>

<style>
  .one-topbar {
    position: relative;
    height: 44px;
    background-color: #fff;
    border-bottom: 1px solid #808080;
    text-align: center;
    z-index: 2;
  }
  .one-topbar h4 {
    font-family: Inconsolata;
    padding: 0;
    margin: 0;
    height: 100%;
    line-height: 44px;
    font-weight: lighter;
    font-size: 18px;
    color: rgb(57, 70, 78);
  }
  .one-topbar .top-icon {
    position: absolute;
    top: 8px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
  }
  .one-topbar .icon-menu {
    font-size: 18px;
    left: 11px;
  }
  .one-topbar .icon-search {
    font-size: 18px;
    right: 11px;
  }
</style>