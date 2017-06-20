<template>
  <div class="music-bg">
    <musicItem v-for="item in musicList" :item="item" :key="item.id"></musicItem>
  </div>  
</template>

<script>
  const musicItem = { template: 
    `<div class="music-item-wrapper">
      <hgroup>
        <h6 class="music-item-category">-&nbsp;音乐&nbsp;-</h6>
        <h1 class="music-item-title">{{item.title}}</h1>
        <h3 class="music-item-author">文／{{item.author.user_name}}</h3>
      </hgroup>
      <div class="music-item-shadow">
        <div class="music-item-shadow-bg"></div>
        <div class="music-item-img">
          <img :src="item.img_url">
        </div>
        <div class="music-item-center-ring">
          <img src="http://image.wufazhuce.com/play_btn_empty.png">
        </div>
      </div>
      <p class="music-item-source">{{item.music_name}} · {{item.audio_author}} | {{item.audio_album}}</p>
      <p class="music-item-desc">失眠的理由可以有千百个，香甜入睡的理由却只有一个，身边躺着最爱的人。</p>
      <time class="music-item-time">{{item.date}}</time>
    </div>`,
    props: ['item']
  }
  export default {
    data() {
      return {
        musicList: []
      }
    },
    components: {musicItem},
    mounted: function(){
      this.$http.get('/src/assets/json/musicList.json', {}, {
        headers: {},
        emulateJSON: true
      })
      .then(response => {this.musicList = response.data.data})
      .catch(response => {console.log(response)})
    }
  }
</script>


<style lang="less">
  @import '../../assets/style/variables.less';
  @import '../../assets/style/mixins.less';
  .music-item-wrapper {
    background-color: #fff;
    margin-bottom: 15px;
    box-shadow: 0 2px 28px #dfdfdf;
  }
  .music-item-category {
    text-align: center;
    font-weight: normal;
    font-size: 12px;
    padding: 10px 0;
    color: rgba(0, 0, 0, 0.6);
  }
  .music-item-title {
    padding: 0px 20px;
    font-weight: lighter;
    .line-clamp(2);
    font-size: 24px;
  }
  .music-item-author {
    padding: 5px 20px;
    font-size: 14px;
    font-weight: lighter;
    color: #808080;
  }
  .music-item-shadow {
    position: relative;
    background-image: url(http://image.wufazhuce.com/music-list-right.png);
    background-repeat: no-repeat;
    background-position: center right;
    background-size: contain;
  }
  .music-item-shadow-bg {
    position: absolute;
    width: 264px;
    height: 206px;
    right: 54px;
    top: 3px;
    border-radius: 0 99px 99px 0;
    box-shadow: 0 0 0.625em 0.125em rgba(230, 230, 230, 0.5);
  }
  .music-item-img {
    padding: 10px 0;
  }
  .music-item-img img {
    display: block;
    width: 60%;
    height: auto;
    margin: 0 auto;
    border-radius: 50%;
  }
  .music-item-center-ring {
    position: absolute;
    width: 14%;
    left: 50%;
    top: 50%;
    margin-left: -7%;
    margin-top: -7%;
  }
  .music-item-source,
  .music-item-desc,
  .music-item-time {
    padding: 12px 20px 0 20px;
    font-size: 10px;
    color: #808080;
  }
  .music-item-desc {
    .line-clamp(2);
  }
  .music-item-time {
    line-height: 4.0;
  }
</style>
