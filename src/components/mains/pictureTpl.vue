<template>
  <div class="picture-bg">
    <pictureItem></pictureItem>
  </div>
</template>

<script>
  const str = "hello world"
  const pictureItem = { template: 
    `<div class="picture-item-wrapper"><p class="picture-item-date">2017 / 06 / 14</p>
      <p class="picture-item-no">VOL.1713</p>
      <a class="picture-item-link">
	      <img src="http://image.wufazhuce.com/FnPF0565x3YrhklQ1tXv8igd_tRX">
      </a>
      <p class="picture-item-author1">绘画 | Jules de Balincourt</p>
      <p class="picture-item-description">快乐是个属于成年人的词儿。你不必问一个孩子他是否快乐，你能看得出来。成年人谈论快乐是因为他们大多都不快乐。</p>
      <p class="picture-item-author2">珍妮特·温特森</p>
    </div>`
  }
  
  export default {
    components: { pictureItem },
    mounted: function() {
      // this.$http.json()
    }
  }
</script>

<style lang="less">
  .picture-bg {
    background-color: #f9f9f9;
  }
  .picture-item-wrapper {
    padding-top: 10px;
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
    margin: 15px 0;
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
