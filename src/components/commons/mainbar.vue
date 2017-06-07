<template>
  <div class="one-mainContent">
    <div class="one-section">
      <div class="main-bg" ref="mainBg">
        <div class="shadeBox" ref="shadeBox"></div>
        <div class="main-text">
          <h1 class="day">{{mainBg.day}}</h1>
          <p class="month">{{mainBg.month}}</p>
          <p class="descriptiop">{{mainBg.description}}</p>
          <div class="arrow-down"><i class="icon one-iconfont one-icon-xiangxia"></i></div>
        </div>
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
        }
      }
    },
    mounted(){
      this.$refs.mainBg.style.height = window.innerHeight + 'px';
      this.$refs.shadeBox.style.height = window.innerHeight + 'px';
    }
  }
</script>

<style>
  .one-mainContent {
    margin-top: -45px;
  }
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
    padding: 0 20px;
    overflow: hidden;
    position: relative;
    bottom: -357px;
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
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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
</style>

=======
  </div>
</template>

<style>
  p {
    text-align: right;
  }
</style>
>>>>>>> bb127455e91ac02006d78082efd96646cafaa71f
