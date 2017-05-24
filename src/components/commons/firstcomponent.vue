<template>
  <div id="firstcomponent">
    <h2>firstcomponent</h2>
    <h1>我是一个帅哥</h1>
    <a> 我叫{{author}}</a>
    <h1><router-link to="/first">firstcomponent</router-link></h1>
    <h1><router-link to="/second">secondcomponent</router-link></h1>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      author: "王冬"
    }
  }
}
</script>

<style module>
  .red {
    color: red;
  }
</style>