<template lang="html">
  <div class="canteen-box">
      <HeaderCommon :headertitle = 'headertitle'/>
  </div>
</template>
<script>
import HeaderCommon from '../common/HeaderCommon'
export default {
  name: 'Canteen',
  components: {
     HeaderCommon
    },
  data(){
    return{
      headertitle: "风尚食堂"
    }
  }
}
</script>