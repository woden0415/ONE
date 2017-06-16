<template>
  <div class="read-bg">
    <!--<div class="read-item-wrapper">
      <p class="read-item-tag">- 阅读 -</p>
      <h4 class="read-item-title">抱歉，坐到你隐形的翅膀了</h4>
      <p class="read-item-author">文／傅踢踢</p>
      <div class="read-item-img-box">
        <img src="http://image.wufazhuce.com/FqfrVcIgMRuspRD6qfYlsnV_paFd">
      </div>
      <p class="read-item-description">承认你是你，你朋友是你朋友，然后踏踏实实地奋斗，就有这么困难吗？</p>
      <p class="read-item-date">2017/6/16</p>
    </div>-->
    <readItem v-for="item in readList" :item="item" :key="item.id"></readItem>
  </div>
</template>

<script>
  const readItem = { template:
    `<div class="read-item-wrapper">
      <p class="read-item-tag">-&nbsp;{{item.tag_list[0].title || '阅读'}}&nbsp;-</p>
      <h4 class="read-item-title">{{item.title}}</h4>
      <p class="read-item-author">文／{{item.author.user_name}}</p>
      <div class="read-item-img-box">
        <img :src="item.img_url">
      </div>
      <p class="read-item-description">{{item.forward}}</p>
      <p class="read-item-date">{{item.date}}</p>
    </div>`,
    props: {
      item: {
        validator: function(value){
          if(value.tag_list.length == 0){
            return value.tag_list = [{id: "31", title: "阅读"}]
          }else {
            return value.tag_list
          }
        }
      }
    }
  }
  export default {
    data(){
      return {
        readList: []
      }
    },
    components: {readItem},
    mounted: function(){
      this.$http.get('/src/assets/json/readList.json', {}, {
        headers: {},
        emulateJSON: true
      })
      .then(response => {this.readList = response.data.data})
      .catch(response => {console.log(response)})
    }
  }
</script>




<style lang="less">
  @import '../../assets/style/mixins.less';
  .read-bg {
    background-color: #f9f9f9;
  }
  .read-item-wrapper {
    background-color: #fff;
    padding: 0 18px;
    margin-bottom: 15px;
  }
  .read-item-tag {
    padding: 12px 0;
    font-size: 12px;
    line-height: 1.8;
    color: rgba(0, 0, 0, .6);
    text-align: center;
  }
  .read-item-title {
    font-size: 19px;
    font-weight: normal;
    .text-overflow(block);
  }
  .read-item-author {
    padding: 8px 0;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, .6);
    .line-clamp(2);
  }
  .read-item-description {
    padding-top: 6px;
    font-size: 12px;
    line-height: 1.8;
    color: rgba(0, 0, 0, .6);
  }
  .read-item-date {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 12px;
    line-height: 2.2;
    color: rgba(0, 0, 0, .6);
  }
</style>
