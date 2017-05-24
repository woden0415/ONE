<template>
  <div class="one-sidebar pure-g"  v-show="menuShow == true">
    <div class="pure-u-3-5">
      <ul class="item-list">
        <li>一个</li>
        <li>图文</li>
        <li>阅读</li>
        <li>音乐</li>
        <li>影视</li>
        <li>影视</li>
        <li>App下载</li>
        <li>关于</li>
      </ul>
    </div>
    <div class="pure-u-2-5">
      <div class="mask"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    props: ['menuShow'],
  }
</script>

<style>
  .one-sidebar {
    position: relative;
    top: -46px;
    text-align: center;
    border-right: 1px solid #acacac;
  }
  .one-sidebar ul {
    padding: 0;
    background-color: #fff;
  }
  .one-sidebar li {
    line-height: 44px;
  }
  .one-sidebar .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(22, 22, 22, 0.19);
    box-shadow: inset 3px 0px 18px 3px #909090;
  }
</style>