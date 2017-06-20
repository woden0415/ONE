<template>
  <div class="one-container">
    <topbar></topbar>
    <sidebar></sidebar>
    <div class="one-mainContent">
      <router-view></router-view>
    </div>
    <nocontent></nocontent>
  </div>
</template>

<script>
  import sidebar from '../components/commons/sidebar.vue'
  import topbar from '../components/commons/topbar.vue'
  import nocontent from '../components/commons/nocontent.vue'

  export default {
    components: { sidebar, topbar, nocontent}
  }
</script>

<style lang="less">
  @import "../assets/style/variables.less";
  .one-container {
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .one-mainContent {
    padding-top: 44px;
    background-color: @mainContent-bg;
  }
</style>
