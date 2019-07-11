<!-- 观禾营养师 -->
<template>
  <div class="dietitian">
    <img v-for="(img,index) in imageList" :key="index" v-lazy="img.path">
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageList: [
        {
          path: require('@/assets/img/dietitian1.png')
        },
        {
          path: require('@/assets/img/dietitian2.png')
        },
        {
          path: require('@/assets/img/dietitian3.png')
        }
      ]
    };
  },
}

</script>
<style lang='scss' scoped>
.dietitian{
  position: relative;
  width: 750px;
}
</style>