<!-- 头部背景 -->
<template>
  <div class="top-background">
    <div class="virtual1"></div>
    <div class="virtual2"></div>
    <slot/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
}

</script>
<style lang='scss' scoped>
.top-background{
  position: relative;
  width:750px;
  height:424px;
  overflow: hidden;
  background: #984CDC;
  background-size: cover;
  background-repeat: no-repeat;
  .virtual1{
    position: absolute;
    bottom: 130px;
    left: 50%;
    transform: translateX(-50%);
    width:537px;
    height:140px;
    background:rgba(255,255,255,0.4);
    border-radius:32px;
  }
  .virtual2{
    position: absolute;
    bottom: 54px;
    left: 50%;
    transform: translateX(-50%);
    width:612px;
    height:192px;
    background:rgba(255,255,255,0.7);
    border-radius:32px;
  }
}
</style>