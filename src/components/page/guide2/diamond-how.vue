<!-- 钻石如何购买 -->
<template>
  <div class="guide">
    <div>
      <img  v-for="(img,index) in imageList" :key="index" v-lazy="img.path">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageList: [
        {
          path: require('@/assets/img/diamond-how1.png')
        },
        {
          path: require('@/assets/img/diamond-how2.png')
        }
      ]
    };
  }
}

</script>
<style lang='scss' scoped>
.guide{
  position: relative;
  width: 750px;
}
</style>