<template>
  <div class="one-mainContent">
    <div class="main-bg" ref="mainBg">
      <div class="shadeBox" ref="shadeBox"></div>
      <div class="main-text">
        <h1 class="day">{{mainBg.day}}</h1>
        <p class="month">{{mainBg.month}}</p>
        <p class="descriptiop">{{mainBg.description}}</p>
        <div class="arrow-down"><i class="icon one-iconfont one-icon-xiangxia"></i></div>
      </div>
    </div>
    <div class="today-detail">
      <div class="today-read today-item">
        <h4>阅读&nbsp;|</h4>
        <title>{{todayDetail.read.title}}</title>
        <h6 class="author">作者/{{todayDetail.read.author}}</h6>
        <div class="imgBox">
          <img v-bind:src="todayDetail.read.imgUrl">
        </div>
        <p class="readMore">阅读全文</p>
      </div>
      <div class="today-read today-item">
        <h4>问答&nbsp;|</h4>
        <title>{{todayDetail.dialogue.title}}</title>
        <div class="dialogue">
          <p class="first">{{todayDetail.dialogue.content.first}}</p>
          <p class="second">{{todayDetail.dialogue.content.second}}</p>
        </div>
        <p class="readMore">阅读全文</p>
      </div>
    </div>
    <div class="more-wrapper">
      <div class="more-content"> 更多内容&nbsp;></div>
    </div>
    <div>
    <div class="law-reference">
      <img src="http://image.wufazhuce.com/beian.png">
      <span class="referenceText">沪公网安备 31010502000462号</span>
    </div>

</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mainBg: {
          BgImgUrl: 'http://image.wufazhuce.com/FtspMvyEg53Teu_B6xUq145_flO2',
          day: 6,
          month: 'VOL.1704 | Jun. 2017 ',
          description: '如果没有发生什么戏剧化的事情，人的感情根本不可能一百八十度转换吧。喜欢如果那么快就能变成恨的话，世界上就不会有那么多伤心的人了。'
        },
        todayDetail: {
          read: {
            title: "软糖| “电影同人” _ AgentCooper",
            author: "双麒_郭",
            imgUrl: "http://image.wufazhuce.com/FqXz9mGlffPTuONO3EghPIbjQVik",

          },
          dialogue: {
            title: "怎样才知道你是否遇上了真爱？",
            content: {
              first: "杨美味：看到这句话的时候，想的是他。",
              second: "丁丁张：看星座看塔罗饭前饭后睡前睡后都想告诉他看到好的东西就想买给他。"
            }
          }
        }
      }
    },
    mounted(){
      this.$refs.mainBg.style.height = window.innerHeight + 'px';
      this.$refs.shadeBox.style.height = window.innerHeight + 'px';
    }
  }
</script>

<style scoped lang="less">
  @import '../../assets/style/mixins.less';
  .shadeBox {
    position: absolute;
    z-index: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.51);
  }
  .main-bg {
    position: relative;
    background-image: url(http://image.wufazhuce.com/FtspMvyEg53Teu_B6xUq145_flO2);
    background-size: cover;
    background-position: 50% 50%;
    color: #fff;
  }
  .main-bg .main-text {
    position: absolute;
    bottom: 5px;
    width: 88%;
    padding: 0 20px;
    overflow: hidden;
  }
  .main-bg .day {
    font-weight: normal;
    font-size: 50px;
  }
  .main-bg .month {
    line-height: 1.6;
    font-size: 23px;
  }
  .main-bg .descriptiop {
    .line-clamp(3);
    line-height: 1.5;
    margin-bottom: 5px;
  }
  .main-bg .arrow-down{
    text-align: center;
  }
  .arrow-down .one-iconfont {
    font-size: 22px;
    font-weight: bold;
  }
  .today-detail {
    margin-top: 30px;
    padding: 0 20px;
  }
  .today-item {
    margin-bottom: 50px;
    h4 {
      text-align: left;
      font-size: 14px;
      color: #3388cc;
      line-height: 1.5;
      margin-bottom: 6px;
    }
    title {
      font-size: 28px;
      font-weight: bold;
      line-height: 1.3;
      .line-clamp(2);
      margin-bottom: 6px;
    }
    .author {
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 6px;
    }
    .readMore {
      margin-top: 5px;
      color: #3388cc;
    }
    .dialogue .second {
      .text-overflow(block);
    }
  }
  .more-wrapper {
    margin-bottom: 30px;
    text-align: center;
    .more-content {
      display: inline-block;
      margin: 0 auto;
      padding: 8px 12px;
      width: auto;
      height: auto;
      border: 1px solid #bbb;
      border-radius: 10px;
    }
  }
  .law-reference {
    padding: 20px 0;
    text-align: center;
    img {
      width: 5%;
      height: auto;
    }
    .referenceText {
      color: #bbb;
      font-size: 16px;
    }
  }

</style>
