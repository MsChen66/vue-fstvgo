<template>
<div class="detail-box">
  <div class="pro-img">
    <div class="swiper-container">
        <div class="swiper-wrapper img-background">
            <div class="swiper-slide img-background"
                v-for = "proimg in proimgs"
                :key = "proimg.id"
            >
                <a><img :src="proimg.PictureUrl"/></a>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination swiper-button"></div>
    </div>
  
  
  </div>
  <div class="pro-attr">
    <div class="box">
      <h3>{{this.ItemName}}</h3>
      <div class="price">￥{{this.MemberShipItemPrice}}</div>
    </div>
    <div class="pro-buy">
      <div class="attrtitle">购买数量</div>
      <div class="quantity">
            <a data-bind="click:$root.countremove">-</a>
            <input type="tel" onkeyup="this.value=this.value.replace(/[^\d]/g,'')" data-bind="value:$root.count">
            <a data-bind="click:$root.countAdd">+</a>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import Swiper from "swiper"
import Vue from "vue"

export default {
  name: "Detail",
  data() {
    return {
      proimgs:[],
      ItemName:[],
      MemberShipItemPrice:[]
    };
  },
  created(){
    // this.getctgpro()
    this.getproimgs()
  },  
  methods: {
        getproimgs(){
          //https://m.fstvgo.com/Service.ashx?method=GetItemInfoNew&ItemId=315949
            this.$http.get("/fstvgo/?",{
              params: {
                method: "GetItemInfoNew",
                ItemId: this.$route.params.id
              }
            })
                .then(res => { 
                    this.ItemName = res.data.ItemName
                    this.proimgs = res.data.ItemPictures
                    this.MemberShipItemPrice = res.data.MemberShipItemPrice
                    //Vue.nextTick异步操作
                    Vue.nextTick( () => {
                        this.swiper = new Swiper(".swiper-container",{
                           autoplay:true,
                            loop:true,
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true
                            }
                        })
                    })
                    // console.log(this.proimgs);
                    // console.log(this.MemberShipItemPrice);
                })
        }
    },
    destroyed(){
        delete this.swiper,
        // delete this.getctgpro()
        delete this.getproimgs()
    }
};
</script>


<style lang="scss" scoped>
.detail-box{
  background: #e6e6e6;
  height: 100%;
  padding-bottom:0.1rem;
  .pro-img{
  width: 100%;
  height: 4rem;
  padding: 0.1rem;
  .swiper-container{
      width: 100%;
      height: 100%;
        a{
        img{
          width: 100%;
          height: 100%;
        }
      }
   }
  }
  .pro-attr{
    padding: 0.1rem;
    .box{
      background: #fff;
      padding: 0.1rem;
      .price{
        padding: 0.1rem 0.3rem;
        color: #E7213C;
        font-weight: 700
      }
    }
  }
    .pro-buy{
      width: 100%;
      padding: 0.1rem;
      background: #fff;
    .attrtitle {
      font-size: 12px;
      padding-bottom: 5px;
      width: 100%;
      color: #555;
    }
    .quantity{
      overflow: hidden;
      a {
      display: block;
      height: 28px;
      width: 28px;
      background-color: #eee;
      color: #000;
      line-height: 28px;
      text-align: center;
      float: left;
      text-decoration: none !important;
    }
    input {
      height: 28px;
      width: 80px;
      color: #000;
      border: 1px solid #eee;
      text-align: center;
      float: left;
      padding: 0;
      margin: 0 5px;
    }
    }
}
  
}

</style>


