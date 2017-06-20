<template>
  <div class="one-nocontent-wrapper">
    <div class="one-oncontent-img-box">
      <img src="http://image.wufazhuce.com/m.wufazhuce.com-rest.png">
    </div>
    <P class="one-oncontent-text">------ 没有更多内容啦，休息一下吧 ------</P>
  </div>  
</template>

<style lang="less">
  @import '../../assets/style/mixins.less';
  .one-nocontent-wrapper {
    padding-top: 40px;
  }
  .one-oncontent-img-box {
    .size(14%, auto);
    margin: 0 auto 8px;
    img {
      .size(100%, auto);
    }
  }
  .one-oncontent-text {
    text-align: center;
    color: #c9c9c9;
    font-size: 14px;
    line-height: 24px;
    margin-top: 10px;
    padding-bottom: 8px;
  }
</style>

