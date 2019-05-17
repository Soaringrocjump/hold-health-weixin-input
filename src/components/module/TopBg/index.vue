<!-- 头部背景 -->
<template>
  <div class="top-background">
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
  width:750px;
  height:260px;
  overflow: hidden;
  background: url(https://m.hfieta.com/html/wx/static/img/big-top.e769f74.png),linear-gradient(90deg,rgba(106,99,242,1),rgba(186,54,229,1));
  background-size: cover;
  background-repeat: no-repeat;
}
</style>