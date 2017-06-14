<template>
  <div class="one-container">
    <topbar></topbar>
    <sidebar></sidebar>
    <div class="one-mainContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import sidebar from '../components/commons/sidebar.vue'
  import topbar from '../components/commons/topbar.vue'

  export default {
    components: { sidebar, topbar}
  }
</script>

<style>
  .one-container {
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .one-mainContent {
    padding-top: 44px;
  }
</style>
