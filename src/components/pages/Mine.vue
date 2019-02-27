<template lang="html">
  <div class="mine-box">
      <HeaderCommon :headertitle = 'headertitle'/>
  </div>
</template>
<script>
import HeaderCommon from '../common/HeaderCommon'
export default {
  name: 'Mine',
  components: {
     HeaderCommon
    },
  data(){
    return{
      headertitle: "验证码"
    }
  }
}
</script>