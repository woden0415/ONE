<template>
  <div id="secondcomponent">
    <h2>secondcomponent</h2>
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://juejin.im/user/5735109371cfe4006cdd254d">路易斯</a>大神的技术指导</p>
    <h1><router-link to="/first">firstcomponent</router-link></h1>
    <h1><router-link to="/second">secondcomponent</router-link></h1>
    <firstcomponent></firstcomponent>
  </div>

</template>

<script>
import firstcomponent from './firstcomponent.vue'
export default {
  data() {
    return {
      author: "王冬",
      articles: [],
    }
  },
  components: { firstcomponent },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调

        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }
}
</script>

<style>
  li {
    display: block;
  }
</style>