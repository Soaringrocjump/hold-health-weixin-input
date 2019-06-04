<!-- 如何检测 -->
<template>
  <div class="guide">
    <div v-if="$route.query.orgCode && $route.query.orgCode.includes('CPIC')">
      <img  v-for="(img,index) in imageList2" :key="index" v-lazy="img.path">
    </div>
    <div v-else>
      <img  v-for="(img,index) in imageList1" :key="index" v-lazy="img.path">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageList1: [
        {
          path: require('@/assets/img/test-step1.png')
        },
        {
          path: require('@/assets/img/test-step2.png')
        },
        {
          path: require('@/assets/img/test-step3.png')
        },
        {
          path: require('@/assets/img/test-step4.png')
        },
        {
          path: require('@/assets/img/test-step5.png')
        },
        {
          path: require('@/assets/img/test-step6.png')
        },
        {
          path: require('@/assets/img/test-step7.png')
        }
      ],
      imageList2: [
        {
          path: require('@/assets/img/test2-step1.png')
        },
        {
          path: require('@/assets/img/test2-step2.png')
        },
        {
          path: require('@/assets/img/test2-step3.png')
        },
        {
          path: require('@/assets/img/test2-step4.png')
        },
        {
          path: require('@/assets/img/test2-step5.png')
        },
        {
          path: require('@/assets/img/test2-step6.png')
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