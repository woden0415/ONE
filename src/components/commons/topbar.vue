<template >
  <div class="one-topbar">
    <a href="javascript:void(0)" class="top-icon icon-menu" v-on:click="changeMenu">
      <i class="icon one-iconfont one-icon-caidan"></i>
    </a>
    <h4>首页</h4>
    <a href="javascript:void(0)" class="top-icon icon-search">
      <i class="icon one-iconfont one-icon-sousuo_sousuo"></i>
    </a>
  </div>
</template>

<script>
  import store from '../../vuex.js'
  export default {
    methods: {
      changeMenu() {
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
  }
  .one-topbar h4 {
    padding: 0;
    margin: 0;
    height: 100%;
    line-height: 44px;
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