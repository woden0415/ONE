<template >
  <div class="one-topbar" ref="topbar">
    <a href="javascript:void(0)" class="top-icon icon-menu" v-on:touchend="sideBarShow">
      <i class="icon one-iconfont one-icon-caidan"></i>
    </a>
    <h4 v-text="topicTitle"></h4>
    <a href="javascript:void(0)" class="top-icon icon-search">
      <i class="icon one-iconfont one-icon-sousuo_sousuo"></i>
    </a>
  </div>
</template>

<script>
  export default {
    computed: {
      topicTitle: function(){
        return this.$store.state.topicTitle
      }
    },
    methods: {
      sideBarShow(){
        this.$store.commit('changeStatus')
      }
    }
  }
</script>

<style scoped>
  .one-topbar {
    position: fixed;
    width: 100%;
    top: 0;
    height: 44px;
    background-color: #fff;
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
    size: 14px;
    color: rgba(0, 0, 0, 0.3);
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