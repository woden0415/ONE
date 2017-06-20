<template>
  <div class="download-bg" ref="downloadPage">
     <div class="down-icon-wrapper">
       <img class="down-img" src="http://image.wufazhuce.com/app_download.png">
       <p class="down-text">{{downText}}</p>
     </div>
  </div>  
</template>

<script>
  export default {
    data(){
      return {
        downText: "下载「一个」APP"
      }
    },
    mounted() {
      this.$refs.downloadPage.style.height = (window.innerHeight - this.$store.state.topBarHeight) + 'px';
    }
  }
</script>


<style lang="less">
  @import "../../assets/style/mixins.less";
  .down-icon-wrapper {
    .size(40%, auto);
    margin: 0 auto;
    padding-top: 120px;
  }
  .down-img {
    display: block;
    width: 48%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .down-text {
    text-align: center;
    font-size: 12px;
    color: #808080;
  }
</style>
