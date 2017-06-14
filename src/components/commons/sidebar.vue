<template>
  <div class="one-sidebar pure-g" v-show="sideMenuActive" ref="sideSection">
    <div class="pure-u-3-5">
      <ul class="item-list">
        <li v-for="menu in menuLists" v-on:touchend="changeTitle(menu.link)">{{menu.title}}</li>
      </ul>
    </div>
    <div class="pure-u-2-5" >
      <div class="mask" v-on:touchend="sideBarShow"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuLists: [
          {link: 'one', title: '一个'},
          {link: 'read', title: '阅读'},
          {link: 'music', title: '音乐'},
          {link: 'movie', title: '影视'},
          {link: 'download', title: 'App下载'},
          {link: 'about', title: '关于'}
        ]
      }
    },
    computed: {
      sideMenuActive(){
        return this.$store.state.sideMenuActive;
      }
    },
    methods: {
      sideBarShow(){
        this.$store.commit('changeStatus');
      },
      changeTitle(title){
        this.$store.commit('changeTitle', title)
        this.$router.push({path: title})
        this.sideBarShow()
      }
    },
    mounted(){
      this.$refs.sideSection.style.height = document.body.clientHeight + 'px';
    }
  }
</script>

<style scoped>
  .one-sidebar {
    position: absolute;
    width: 100%;
    top: 0;
    text-align: center;
    border-right: 1px solid #acacac;
    z-index: 2;
  }
  .one-sidebar ul {
    padding: 0;
    background-color: #fff;
    height: 100%;
  }
  .one-sidebar li {
    line-height: 44px;
    border-bottom: 1px solid #b7b7b7;
  }
  .item-list a{
    display: inline-block;
    width: 50%;
  }
  .one-sidebar .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(192, 192, 192, 0.19);
    box-shadow: inset 3px 0px 18px 3px #909090;
  }
</style>