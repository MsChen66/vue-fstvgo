<template lang="html">
  <div class="category-box">
      <HeaderCommon :headertitle = 'headertitle'/>
      <Sort />
      <div class="ctg-pro">
        <div class="pro"
            v-for = "ctgpro in ctgpros"
            :key = "ctgpro.id"
        >
          
            <div class="pro-img"><router-link :to="{name : 'detail',params:{id:ctgpro.ItemId}}"><img :src= "ctgpro.DefaultPicture"></router-link></div>
            <div class="pro-title">
              <div class="title">{{ctgpro.ItemName}}</div>
              <div class="price">&yen;{{ctgpro.MemberShipItemPrice}}</div>
            </div>
              <div class="shopping">
                <button type="button" name="button" class="icon" @click = "addCar(ctgpro)" >+</button>
              </div>

          <!-- <div class="shopping">
            <button type="button" name="button" class="icon" @click = "addCar" >+</button>
          </div> -->
        </div>
      </div>
  </div>
</template>
<script>
import HeaderCommon from '../common/HeaderCommon'
import Sort from '../common/Sort'
import {mapActions} from 'vuex'
export default {
  name: 'Category',
  components: {
     HeaderCommon,Sort
    },
  data(){
    return{
      headertitle: '数码家电',
      ctgpros:[]
    }
  },
  created(){
    this.getctgpro()
  },
  methods:{
    ...mapActions(['addCar']),  
    getctgpro(){
      //https://m.fstvgo.com/Service.ashx?method=GetItemClassList&classId=199&pageSize=10&currentPage=1&sor
      this.$http.get("/fstvgo/?",{
        params: {
          method: 'GetItemClassList',
          classId: '199',
          pageSize: '10',
          currentPage: '1',
          sortField: 'SaleQtyForSort',
          isSortAsc: '1'
        }
      })
          .then(res => { 
            // console.log(res.data);
            this.ctgpros = res.data;
            // console.log(this.ctgpros);
          })
          .catch(err => {
              console.log(err)
          });
          // console.log(this.classlists);
    }
  },
  destroyed(){
      delete this.getctgpro()
    }

}
</script>

<style lang="scss">
  .category-box{
  }
  .ctg-pro{
    width: 100%;
    float: left;
    padding: 0.25rem 0 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .pro{
      border: 0.01rem solid #eee;
      background-color: #fff;
      width: 49.4%;
      margin-top: 0.1rem;
      position: relative;
      .icon{
        position: absolute;
        bottom: 0.1rem;
        right: 0.1rem;
        color: #E7213C;
        height: 0.2rem;
        width: 0.2rem;
        background: #fff;
        border: none;
        font-size: 0.2rem
      }
      .pro-img{
          img{
                width: 100%;
                height: 100%;
                display: block;
          }
      };
      .pro-title{
        width: 100%;
        box-sizing: border-box;
        text-align: center;
        .title{
          color: #000;
          display: block;
          height: 0.3rem;
          padding: 0.03rem 0.06rem;
          overflow: hidden;  
        }
        .price {
                color: #E7213C;
                display: block;
                padding: 0.03rem 0.06rem; 
            }       
      }
    }
  }
</style>
