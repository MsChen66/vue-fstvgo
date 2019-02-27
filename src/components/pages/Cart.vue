<template>
<div class="car-box">
  <HeaderCommon :headertitle = 'headertitle'/>
    <!-- <div class="header-bar">
        <p>购物车</p>
        <span class="icon-arrow-left" ></span>
        <span class="icon-menu"></span>
    </div> -->
    <div class="car-cont" v-if="isShow">
        <div class="conta">
            <div class="box">
                <img src="//img02.hua.com/m/empty_cart3.png"/>
                <p class="car-text">别让你的心意空空如也~</p>
                <router-link to="/List" tag="a"><a href="javascript" class="car-gohome">去购物</a></router-link>
            </div>              
        </div>
    </div>


    <div class="buycar" v-else>
        <ul>
            <li 
                v-for="car in cars"
                :key="car.ItemId"
            > 
                <div class="left">
                   <img :src = "car.DefaultPicture">
                </div>
                <div class="right">
                    <div class="right-l">
                      <p>名称：{{car.ItemName}}</p>
                      <p>单价：{{car.SalePrice}}</p>
                    </div>
                    <div class="reight-r">
                        <button type="button" name="button"  @click="reduceCar(car)">-</button>
                        <p>{{car.num}}</p>
                        <button type="button" name="button" @click="addCar(car)">+</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <h3>共件{{totalInfo.num}}件</h3>
    <h3>总价{{totalInfo.price}}元</h3>
</div>
</template>

<script>
import HeaderCommon from '../common/HeaderCommon'
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
    name: 'Shopcar',
    props: ['isShow'],
    components: {
     HeaderCommon
    },
  data(){
    return{
      headertitle: "购物车"
    }
  },
  created () {
    console.log(this.cars); 
  },
  computed: {
      ...mapState({
          cars: state => state.buycar.cars
      }),
        ...mapGetters(['totalInfo']),
  },
  methods: {
    
      ...mapActions(['addCar','reduceCar'])
  }
}
</script>

<style lang="scss" scoped>
    .car-box{
        width: 100%;
        height: auto;
        overflow: hidden;
        box-sizing: border-box;
        .header-bar{
            height: 0.88rem;
            text-align: center;
            background: rgba(250, 250, 250, 0.9);
            border-bottom: 1px solid #E4E4E4;
            padding: 0 0.24rem;
            position: relative;
            p{
                font-size: 0.32rem;
                line-height: 0.88rem;
                text-align: center;
                white-space: nowrap;
                text-overflow: clip;
                overflow: hidden;
            }
            .icon-arrow-left{
                display: inline-block;
                width: 0.48rem;
                height: 0.48rem;
                background: url(//img02.hua.com/m/icon/iconChevronLeft@2x.png) no-repeat center center;
                background-size: 0.48rem 0.48rem;
                position: absolute;
                left: 0.24rem;
                top: 0.2rem;
            }
            .icon-menu{
                display: inline-block;
                width: 0.48rem;
                height: 0.48rem;
                background: url(//img02.hua.com/m/icon/iconMore@2x.png) no-repeat center center;
                background-size: 0.48rem 0.48rem;
                position: absolute;
                right: 0.32rem;
                top: 0.2rem;
            }
        }
        .car-cont{
            border: 0;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            .conta{
                max-width: 12.8rem;
                margin: 0 auto;
                border-bottom: none !important;
                background: #ffffff;
                overflow: hidden;
                .box{
                    text-align: center;
                    img{
                        margin: 0.6rem 0 0.2rem 0;
                        width: 100%;
                    }
                    .car-text{
                        font-size: 0.28rem;
                        text-align: center;
                        color: rgb(75,75,75);
                    }
                    .car-gohome{
                        display: inline-block;
                        height: 0.64rem;
                        line-height: 0.64rem;
                        padding: 0 0.4rem;
                        color: #ff6a00;
                        border: 1px solid #ff6a00;
                        border-radius: 3px;
                        margin: 0.4rem 0;
                    }
                }
                .car-lb{
                    background-color: #fff !important;
                    border-top: 0.16rem solid #eee;
                    padding-left: 0.32rem !important;
                    border-bottom: none !important;
                    clear: both;
                    color: #666666;
                    height: 0.76rem;
                    line-height: 0.76rem;
                    padding: 0 0.2rem;
                    text-align: left;
                }
                .main{
                    width: 100%;
                    overflow-x: scroll;
                    margin: 0 auto;
                    max-width: 12.8rem;
                    font-size: 0.28rem;
                    .activity-list{
                        width: 10.24rem;
                        overflow: hidden;
                        padding-left: 0.16rem; 
                        .activity-item{
                            margin-top: 0 !important;
                            width: 1.68rem !important;
                            float: left;
                            text-align: center;
                            a{
                                border: none !important;
                                margin-right: 0.4rem !important;
                                display: block;
                                width: auto;
                                padding: 0px;
                                margin-right: 0.16rem;
                                border-radius: 1px;
                                .activity-img{
                                    width: 100%;
                                    height: auto;
                                    margin-top: 0.24rem !important;
                                }
                                .act-name{
                                    font-size: 0.2rem;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    color: #232323;
                                }
                                .act-price{
                                    font-size: 0.24rem !important;
                                    color: rgb(35,35,35) !important;
                                    line-height: 0.48rem;
                                }
                            }
                        }
                    }
                }
            }
        }


        .buycar{
            padding-top: .5rem;
            width:100%;
            height: 100%;
            padding-bottom: 0.5rem;
            ul{
                li{
                    display: flex;
                    justify-content: left;
                    
                    .left{
                        width: 35%;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .right{
                        width: 50%;
                       padding: 0.5rem 0 0 0;
                       .reight-r{
                           width: 100%;
                           height: 0.5rem;
                           display: inline;
                           padding: 0.1rem 0 0 0;
                           p{
                               display: inline-block;
                               width: 0.3rem;
                               text-align: center
                           }
                           button{
                               display: inline;
                               width: 0.2rem;
                           }
                       }
                    }
                }
            }
        }
    }
</style>
