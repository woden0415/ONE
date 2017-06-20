<template>
  <div class="aboutPage" ref="aboutPage">
    <div class="about-logo-wrapper">
      <img src="http://image.wufazhuce.com/app_download.png" alt="「ONE · 一个」">
    </div>
    <article class="about-text">
      <p class="about-title">
        <strong>{{aboutTitle}}</strong>
      </p>
      <P class="about-content" v-html="aboutIntro"></P>
    </article>
    <footer class="about-footer">
      <p class="about-website">{{aboutWebsite}}</p>
    </footer>
  </div> 
</template>

<script>
export default {
  data(){
    return {
      aboutTitle: 'ONE·一个 每日阅读',
      aboutIntro: `「ONE&nbsp; ·&nbsp; 一个」是韩寒先生监制、原《独唱团》主创共同制作的一款年轻人文艺阅读应用，于2012年10月8日上线，当日就获得了APP&nbsp; STORE总榜第一名。
        至今已获得了近三千万用户，并维持每天近两百万的活跃独立访问，每一期内容分享逾万次，总阅读量十亿以上。
        目前「ONE&nbsp; ·&nbsp; 一个」已更新至4.0版本，集合阅读、音乐、电影内容，不仅是流行的新媒体阅读产品，也是极具价值的故事IP发表平台和储备库。<br>
        ONE·一个APP、网站内所有内容版权均属ONE·一个公司所有，受各国版权法及国际版权公约的保护。任何媒体、网站或个人未经本公司书面协议授权不得转载、链接、转贴或以其他方式复制发布、发表ONE·一个APP、网站内的内容。
        对于上述版权内容，超越合理使用范畴、并未经本公司书面许可的使用行为，我公司均保留追究法律责任的权利。`,
      aboutWebsite: 'm.wufazhuce.com'
    }
  },
  mounted(){
    this.$refs.aboutPage.style.height = (window.innerHeight > document.body.height)? window.innerHeight + 'px' : document.body.height + 'px';
  }
}
</script>

<style lang="less">
  @import '../../assets/style/mixins.less';
  .about-logo-wrapper {
    .size(40%, auto);
    margin: 0 auto;
    padding-top: 40px;
  }
  .about-logo-wrapper img {
    display: block;
    width: 48%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .about-text {
    margin-top: 22px;
  }
  .about-title {
    text-align: center;
    font-size: 14px;
    margin-bottom: 40px;
  }
  .about-content {
    padding: 0 33px;
    font-size: 14px;
    line-height: 26px;
    font-weight: lighter;
  }
  .about-website {
    text-align: center;
    font-size: 11px;
    color: rgba(0, 0, 0, .3);
    padding: 10px 0 20px;
  }
</style>
