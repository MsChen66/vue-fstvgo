<template>
  <div id="app">
    <router-view></router-view>
    <Foot v-show = 'footFlag'></Foot>
  </div>
</template>

<script>
  import Foot from './components/common/Foot'
  import {mapActions,mapGetters,mapState} from 'vuex'

  import {
    HEAD_FLAG_CHANGE,
    FOOT_FLAG_CHANGE,
  } from './store/headfoot/const.js'
  export default {
    components: {
      // Header,
      Foot
    },
    created(){
      this.initCar();
    },
    methods: {
      ...mapActions(['initCar'])
    },
    computed: {
      ...mapGetters(['headFlag','footFlag'])
    },
    watch: {
  //路由的监听
    $route: {
      //深度   两个特殊的key    handler     immediate
      handler(){
        //数据改变后的执行函数
        // console.log( 'handler')
        let path = this.$route.path 
        // console.log(path);
        if(/detail/.test(path)){//当我们是 /detail
          //修改store中的数据
          this.$store.dispatch(HEAD_FLAG_CHANGE,false)
          this.$store.dispatch(FOOT_FLAG_CHANGE,false)
        }
        }
      },
    immediate: true //立刻开启当前数据监听和执行
  }
    }
</script>

<style>

</style>
