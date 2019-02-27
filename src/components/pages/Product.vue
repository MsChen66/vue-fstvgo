<template lang="html">
  <div class="app-product-box">
      <HeaderPro />
      <div class="product-box">
        <el-tabs :tab-position="tabPosition">
          <el-tab-pane label="所有分类">
            <div class="pro-class">
              <div class="pro-class-list"
                   v-for = "proclasslist in proclasslists"
                   :key = "proclasslist.id"
              >
                <a class="title">
                  <span><router-link :to = "{ name: 'category'}" >{{proclasslist.ClassName}}</router-link></span>
                  <span class="fa fa-chevron-right icon"></span>
                </a>
                <div class="list-pro">
                    <div class="pro-list">
                      <a v-for = "vv in proclasslist.ClassListName"
                         :key = "vv.id">{{vv.ClassName}}</a>
                    </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热销产品"></el-tab-pane>
          <el-tab-pane label="品牌">品牌</el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
import HeaderPro from '../common/HeaderPro'
export default {
  name: 'Product',
  data() {
      return {
        tabPosition: 'left',
        proclasslists: [],
      };
  },  
  components: {
      HeaderPro
  },
  created(){
    this.getproclass()
  },
  methods:{
    getproclass(){
      this.$http.get("/static/product.json")
          .then(res => { 
            // console.log(res.data);
            this.proclasslists = res.data;
          })
          .catch(err => {
              console.log(err)
          });
          // console.log(this.classlists);
    } 
  },
  destroyed(){
      delete this.getproclass()
    }
}

</script>

<style lang="scss">
.product-box{
  padding:0.42rem 0 0 0;
}
.el-tabs--left .el-tabs__header{
  width:30%;
  margin-right:0;
}

.el-tabs{
  width: 100%;
  height: 6rem;
}
.el-tabs__nav-wrap{
  background-color: #eee;
}
.el-tabs__nav-scroll .el-tabs__nav{
  text-align: center
}
.el-tabs__item {
    width: 80%;
    border-bottom: 1px solid #e6e6e6;
    text-align: center
}
.el-tabs__item.is-active {
    color: #E7213C;
    border-bottom: 1px solid #E7213C;
}
.el-tabs__active-bar{
  background-color: #eee;
}
.el-tabs__item:hover {
    color: #E7213C;
}
.pro-class {
    position: fixed;
    overflow-y: auto;
    overflow-x: hidden;
    top: 0.42rem;
    bottom: 0;
    z-index: 100;
    background-color: #fff;
    width: 100%;
}
.pro-class .pro-class-list{
  box-sizing: border-box;
  display: block;
}
.pro-class .pro-class-list .title{
  width: 70%;
  display: block;
    background-color: #f4f4f4;
    color: #000;
    line-height: 0.3rem;
    padding: 0.05rem 0.15re m;
    position: relative;
    box-sizing: border-box;
  span{
    display: block;
  }
  .icon{
    position: absolute;
    top:20%;
    right: 10%;
  }
}
.pro-class-list .list-pro{
  padding: 6px 10px;
  width: 100%;
  .pro-list{
    line-height: 0.2rem;
    width: 70%;
  }
  a{
    display: inline-block;
    padding: 0 0.15rem 0 0.12rem;
    color: #000;
  }
}
</style>
