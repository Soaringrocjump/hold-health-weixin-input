<!-- 关于我们 -->
<template>
  <div class="aboutUs">
    <img v-for="(img,index) in imageList" :key="index" v-lazy="img.path">
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageList: [
        {
          path: require('@/assets/img/about1.png')
        },
        {
          path: require('@/assets/img/about2.png')
        },
        {
          path: require('@/assets/img/about3.png')
        },
        {
          path: require('@/assets/img/about4.png')
        }
      ]
    };
  },
}

</script>
<style lang='scss' scoped>
.aboutUs{
  position: relative;
  width: 750px;
}
</style>