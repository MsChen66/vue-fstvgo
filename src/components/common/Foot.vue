<template lang="html">
  <div class="foot-box">
    <div class="foot-btn" >
      <ul>
        <li class="home">
          <router-link
            :to="{ name: 'home'}"
          >
            <i class="fa fa-home btn"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li class="cart">
          <router-link 
          :to="{ name: 'cart'}"
          >
            <i class="fa fa-shopping-cart btn"></i>
            <span>购物车</span>
         </router-link>
        </li>
        <li class="mine">
          <router-link 
            :to="{ name: 'mine'}"
          >
            <i class="fa fa-user btn">
              </i><span>我的</span>
          </router-link>
        </li>
        <li class="inwards">
          <router-link
            :to="{ name: 'inwards'}"
          >
            <i class="fa fa-plane btn"></i>
            <span>进口货</span>
          </router-link>
        </li>
        <li class="canteen">
          <router-link 
            :to="{ name: 'canteen'}"
          >
            <i class="fa fa-gift btn"></i>
            <span>风尚食堂</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style lang="css">
.foot-btn{
    background-color: #fff;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    z-index: 999;
}
.foot-btn ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: inherit;
    width: 100%;
}
.foot-btn ul li{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: inherit;
    width: 20%;
    height: 100%;
    position: relative;
    padding: .05rem 0;
}
.foot-btn ul li a{
  text-align: center;
}
.foot-btn ul li .btn{
  font-size: 0.22rem;
}
.foot-btn ul li span{
  display: block;
  font-size: 0.12rem;
}
.foot-btn ul li .router-link-active{
  color: #FFBF43;
}
</style>
