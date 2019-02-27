<template lang="html">
  <div class="app-home-box">
    <HeaderNav />
    <div class="banner">
      <Banner></Banner>
    </div>
    <div class="container">
      <div class="choiceness">
         <div class="home-title">精选分类</div>
         <div class="home-menu">
            <div v-for = "list in lists"
                 :key = "list.id" class="menuList">
                  <a><img :src="list.src" alt=""/></a>
            </div>
         </div>
      </div>

      <div class="home-list"
           v-for = "homelist in homelists"
           :key = "homelist.id"
      >
         <div class="home-title">{{ homelist.title }}</div>
         <div class="title-pic">
           <a><img :src="homelist.src"/></a>
         </div>
         
      </div>
    <div class="home-bottom"></div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '../common/HeaderNav'
import Banner from './Banner'
export default {
  name: 'Home',
  components: {
    HeaderNav,Banner
  },
  data(){
    return {
      lists:[],
      homelists: []
    }
  },
  created(){
    this.getLists()
    this.getHomeLists()
  },
  methods:{
    getLists(){
      this.$http.get("/static/choiceness.json")
          .then(res => { 
            this.lists = res.data
          })
          .catch(err => {
              console.log(err)
          })
    },
    getHomeLists(){
      this.$http.get("/static/home-list.json")
          .then(res => { 
            this.homelists = res.data
          })
          .catch(err => {
              console.log(err)
          })
    }
  },
  destroyed(){
      delete this.getLists()
      delete this.getHomeLists()
    }
}

</script>

<style lang="scss">
.banner{
  padding: 0.42rem 0 0 0;
}
.home-menu {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    display:flex;
    align-items:center;
    justify-content:center ;
  .menuList {
    width: 1.2rem;
    height: 1.35rem;
    padding: 0.02rem 0.01rem;
    margin: auto;
    img{
      height: 100%;
      width: 100%;
    }
  }
}
.home-title {
    background: #fff;
    height: 0.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 14px;
}
.title-pic {
    border-bottom: 1px solid #eee;
    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
        border: none;
        vertical-align: middle;
  }
}
.home-bottom{
  height: 0.6rem;
  width: 100%;
}
</style>
