<template>
<div class="sort-box">
  <div class="filter">
    <ul>
      <li class="active" id="sale"><a data-bind="click:sortsale">销量&nbsp;<span class="icon fa fa-angle-down"></span></a></li>
      <li id="time"><a data-bind="click:sorttime">上架时间&nbsp;<span class="icon fa fa-angle-down"></span></a></li>
      <li id="price"><a data-bind="click:sortprice">价格&nbsp;<span class="icon fa fa-angle-down"></span></a></li>
      <li class="condition"><a data-bind="click:filtershow">筛选&nbsp;<span class="icon fa fa-angle-down"></span></a></li>
    </ul>
  </div>
</div> 
</template>

<script>
export default {
  name: 'Sort',
  data() {
    return {}
  },
  methods: {
   
  }
}
</script>
<style lang="scss">
  .sort-box{
    padding: 0.42rem 0 0 0;
    width: 100%;
    background-color: #fff;
    float: left;
    z-index: 1100;
  }
  .filter{
    ul{
      position: absolute;
      box-sizing:border-box; 
      display: flex;
      justify-content:center;
      width: 100%;
      li{
        float: left;
        display: inline-block;
        width: 50%;
        line-height: 0.3rem;
        text-align: center;
        border-right: 1px solid #d8d5d5;
        border-bottom: 1px solid #eee;
        a{
          color:rgba(44, 44, 44, 0.4);
          font-size: 14px;
        }
        a:active{
          color: #EECB87
        }
      }
    }
  }
</style>




