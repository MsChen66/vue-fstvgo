<template lang="html">
  <div class="inwards-box">
      <HeaderCommon :headertitle = 'headertitle'/>
  </div>
</template>
<script>
import HeaderCommon from '../common/HeaderCommon'
export default {
  name: 'Inwards',
  components: {
     HeaderCommon
    },
  data(){
    return{
      headertitle: "进口货"
    }
  }
}
</script>