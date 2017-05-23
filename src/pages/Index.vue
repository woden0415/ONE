<template>
  <div id="Index">
    <h1>hello world</h1>
    <h2>{{msg}}</h2>
    <input v-model="msg">
    <br>
    <h1><router-link to="/foo">foo</router-link></h1>
    <h1><router-link to="/bar">bar</router-link></h1>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '好好学习，天天向上'
    }
  }
}
</script>

<style>
#Index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
