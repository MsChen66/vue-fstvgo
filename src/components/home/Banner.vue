<template>
    <div class="swiper-container">
        <div class="swiper-wrapper img-background">
            <div class="swiper-slide img-background"
                v-for = "banner in banners"
                :key = "banner.id">
                <a><img :src="banner.src" alt=""></a>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination swiper-button"></div>
    </div>
</template>


<script>
import Swiper from "swiper"
import Vue from "vue"
export default {
    name: "Banner",
    data(){
        return {
            banners:[]
        }
    },
    created(){
        this.getBanners()
    },
    methods: {
        getBanners(){
            this.$http.get("/static/banner.json")
                .then(res => { 
                    this.banners = res.data
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
                })
        }
    },
    destroyed(){
        delete this.swiper
    }
}
</script>


<style lang="scss" >
    .swiper-container{
        width:100%;
        height:100%;
        .swiper-slide{
            width:100%;height:100%;
            img{
                width:100%;height:100%;
            }
        }      
    }
    .swiper-pagination-bullet {
        margin: 0 2px;
        background-color: #FFF;
        opacity: 0.8;
    }
    .swiper-pagination-bullet-active {
        opacity: 1;
        background: #FFBF43;
    }
</style>
