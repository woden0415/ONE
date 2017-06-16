<template>
  <div class="picture-bg">
    <pictureItem  v-for="item in pictureList" :item="item" :key="item.id"></pictureItem>
  </div>
</template>

<script>
  const pictureItem = { template: 
    `<div class="picture-item-wrapper">
      <p class="picture-item-date">{{item.date}}</p>
      <p class="picture-item-no">{{item.title}}</p>
      <a class="picture-item-link">
	      <img :src="item.img_url">
      </a>
      <p class="picture-item-author1">{{item.picture_author}}</p>
      <p class="picture-item-description">{{item.content}}</p>
      <p class="picture-item-author2">{{item.text_authors}}</p>
    </div>`,
    props: ['item']
  }
  export default {
    data(){
      return {
        pictureList: []
      }
    },
    components: { pictureItem },
    mounted: function() {
      this.$http.get('/src/assets/json/pictureList.json', {}, {
        headers:{},
        emulateJSON: true
      })
      .then(response => {this.pictureList = response.data.data})
      .catch(response =>{console.log(response)})
    }
  }
</script>

<style lang="less">
  .picture-bg {
    background-color: #f9f9f9;
  }
  .picture-item-wrapper {
    margin-bottom: 15px;
    padding-top: 10px;
    padding-bottom: 15px;
    background-color: #fff;
    text-align: center;
  }
  .picture-item-date {
    font-family: 'Courier New';
    font-size: 20px;
    line-height: 22px;
    color: #000;
    opacity: 0.6;
  }
  .picture-item-no,
  .picture-item-author1,
  .picture-item-author2 {
    margin: 15px 0 0 0;
    color: #808080;
    font-size: 10px;
    line-height: 1.6;
  }
  .picture-item-no {
    margin: 6px 0;
  }
  .picture-item-link {
    display: block;
    margin: 5px 0;
  }
  .picture-item-description {
    margin: 0 16px 0 16px;
    color: #000000;
    opacity: 0.6;
    font-size: 14px;
    line-height: 26px;
    text-align: left;
  }
</style>
