<template>
  <div class="movie-bg">
    <movieItem v-for="item in movieList" :item="item" :key="item.id"></movieItem>
  </div>  
</template>

<script>
  const movieItem = { template: 
    `<div class="movie-item-wrapper">
      <hgroup>
        <h6 class="movie-item-category">-&nbsp;影视&nbsp;-</h6>
        <h1 class="movie-item-title">{{item.title}}</h1>
        <h3 class="movie-item-author">文／{{item.author.user_name}}</h3>
      </hgroup>
      <div class="movie-item-cover">
        <div class="movie-item-bg">
          <img :src="item.img_url">
        </div>
      </div>
      <p class="movie-item-desc">{{item.forward}}</p>
      <p class="movie-item-source">——关于《{{item.subtitle}}》</p>
      <time class="movie-item-time">{{item.date}}</time>
    </div>`,
    props: ['item']
    }
  export default {
    data(){
      return {
        movieList: []
      }
    },
    components: {movieItem},
    mounted: function(){
      this.$http.get('/src/assets/json/movieList.json', {}, {
        headers: {},
        emulateJSON: true
      })
      .then(response => {this.movieList = response.data.data})
      .catch(response => {console.log(response)})
    }
  }
</script>

<style lang="less">
  @import '../../assets/style/variables.less';
  @import '../../assets/style/mixins.less';
  .movie-item-wrapper {
    background-color: #fff;
    margin-bottom: 15px;
    padding: 0 18px 18px;
    box-shadow: 0 2px 28px #dfdfdf;
  }
  .movie-item-category {
    text-align: center;
    font-weight: normal;
    font-size: 12px;
    padding: 10px 0;
    color: rgba(0, 0, 0, 0.6);
  }
  .movie-item-title {
    padding: 0px 20px;
    font-weight: lighter;
    .line-clamp(2);
    font-size: 18px;
  }
  .movie-item-author {
    padding: 5px 20px;
    font-size: 14px;
    font-weight: lighter;
    color: #808080;
  }
  .movie-item-cover {
    .size(100%, 230px);
    background-image: url(http://image.wufazhuce.com/movie-list-background.png);
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    padding: 33px 0;
  }
  .movie-item-bg {
    .size(90%, 162px);
    margin: 0 auto;
    background-image: url(http://image.wufazhuce.com/list-paceholder.png);
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: 0 0 0.3125em 0.1875em rgba(230, 230, 230, 0.5);
    border-radius: 6px;
  }
  .movie-item-bg img {
    .size(100%, auto);
    margin: 0 auto;
    border-radius: 6px;
  }
  .movie-item-desc,
  .movie-item-source,
  .movie-item-time {
    padding: 12px 20px 0 20px;
    font-size: 10px;
    color: #808080;
  }
  .movie-item-desc {
    .line-clamp(2);
  }
  .movie-item-source {
    padding-top: 5px;
    text-align: right;
    .line-clamp(1);
  }
</style>
