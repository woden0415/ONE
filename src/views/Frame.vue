<template>
  <div class="one-container">
    <topbar></topbar>
    <sidebar></sidebar>
    <mainbar></mainbar>
  </div>
</template>

<script>
  import sidebar from '../components/commons/sidebar.vue'
  import topbar from '../components/commons/topbar.vue'
  import mainbar from '../components/commons/mainbar.vue'
  export default {
    components: { sidebar, topbar, mainbar }
  }
</script>

<style>
  .one-container {
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
