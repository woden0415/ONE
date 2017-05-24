<template>
  <div class="one-container">
    <topbar></topbar>
    <sidebar menuShow='false'></sidebar>
  </div>
</template>

<script>
  import sidebar from '../components/commons/sidebar.vue'
  import topbar from '../components/commons/topbar.vue'
  export default {
    components: { sidebar, topbar }
  }
</script>

<style>
  .one-container {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
