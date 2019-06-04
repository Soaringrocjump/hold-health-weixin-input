<!-- 如何邀约 -->
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
          path: require('@/assets/img/invite-step1.png')
        },
        {
          path: require('@/assets/img/invite-step2.png')
        },
        {
          path: require('@/assets/img/invite-step3.png')
        },
        {
          path: require('@/assets/img/invite-step4.png')
        },
        {
          path: require('@/assets/img/invite-step5.png')
        },
        {
          path: require('@/assets/img/invite-step6.png')
        },
        {
          path: require('@/assets/img/invite-step7.png')
        },
        {
          path: require('@/assets/img/invite-step8.png')
        }
      ],
      imageList2: [
        {
          path: require('@/assets/img/invite2-step1.png')
        },
        {
          path: require('@/assets/img/invite2-step2.png')
        },
        {
          path: require('@/assets/img/invite2-step3.png')
        },
        {
          path: require('@/assets/img/invite2-step4.png')
        },
        {
          path: require('@/assets/img/invite2-step5.png')
        }
      ]
    };
  },
}

</script>
<style lang='scss' scoped>
.guide{
  position: relative;
  width: 750px;
}
</style>