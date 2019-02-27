<template lang="html">
  <div class="headerpro-box">
    <div class="h-search">
        <input  placeholder="输入你想找的商品"></input>
    </div>
    <Button @click="value2 = true" type="primary" class="header-left"><i class="fa fa-list-ul header-btn"></i></Button>
    <router-link 
            :to="{ name: 'product'}"
            class="header-right"
    >
        <i class="fa fa-search header-btn"></i>
    </router-link> 
     <Drawer placement="left" :closable="false" :scrollable="true" v-model="value2" class="header-nav">
          <div class="row header">
              <div class="headimg">
                  <img src="/static/images/headimgF.jpg"/>
              </div>
              <div class="headinfo">
                 <span>登录或注册</span> 
              </div>
          </div>
          <div  class="row menu list">
              <a>商城首页</a>
              <a>电视购物</a>
              <a>商品分类</a>
              <a>热销产品</a>
              <a>风尚惠</a>
              <a>品牌直销</a>
          </div>
    </Drawer>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HeaderPro',
  components: {
    swiper,
    swiperSlide
  },
  data(){
            return {
                value2: false
            }
        }
}
</script>

<style lang="css">
.headerpro-box{
    background-color: #242424;
    border-bottom: 0.01rem solid #EECB87;
    height: 0.42rem;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    overflow: hidden;
    color:#fff;
}
.headerpro-box .h-search {
    width: 100%;
    padding: 0 0.4rem;
    text-align: center;
    color: #fff;
    height: 0.28rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.12rem;
}
.headerpro-box .h-search input{
    width: 95%;
    height: 100%;
    border-radius: 0.05rem;
    border: none;
    text-align: center;
}
.headerpro-box .logo {
    height: 0.26rem; 
    display: flex;
    align-items: center;
}
.headerpro-box .header-left{
  position: absolute;
  background: #242424;
  border: 0;
}
.headerpro-box .header-right{
  position: absolute;
  right: 0.1rem;
  color: #fff;
}
.headerpro-box .header-btn{
  width: 0.18rem;
  height:0.18rem;
}
.header-nav .header {
    height: 1rem;
    background-size: cover;
    position: relative;
    background:url("/static/images/menu_bg.jpg")
}
.ivu-drawer-body {
  padding: 0
}
.header .headimg {
    position: absolute;
    top: 0.37rem;
    left: 0.35rem;
    height: 0.46rem;
    width: 0.46rem;
    display: block;
    border-radius: 50%;
    border: 0.02rem solid #fff;
    overflow: hidden;
    box-sizing: border-box;
    z-index: 10001;
}
.header .headimg img{
  width:100%;
  height: 100%
}
.header .headinfo {
    background-color: rgba(255,255,255,0.8);
    display: block;
    position: absolute;
    right: 0;
    top: 0.38rem;
    height: 0.44rem;
    width: 1.9rem;
    z-index: 500;
    box-sizing: border-box;
    color: #333;
    font-size: 10px;
    line-height: 0.16rem;
    padding: 0.04rem 0 0.04rem 0.24rem;
}
.header .headinfo span{
    line-height: 34px;
    padding-left: 12px;
    color: #333;
    font-size: 10px;
}
.menu {
    padding: 0 11px;
}
.row {
    display: block;
    box-sizing: border-box;
}
.menu a {
    border-bottom: 1px solid #d7d7d7;
    color: #555;
    text-align: center;
    display: block;
    line-height: 40px;
    font-size: 13px;
}

</style>
