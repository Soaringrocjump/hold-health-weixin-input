<!-- 提交成功 -->
<template>
  <div class="fillSuccess">
    <div class="success-background">
      <div class="slogan">
        <img src="~IMG/login-slogan.png" alt="">
      </div>
      <div class="post-success">
        <img src="~IMG/post-success.png" alt="">
      </div>
    </div>
    <dl class="post-state">
      <dt>成功提交</dt>
      <dd>请耐心等待检测</dd>
      <dd>健康专员将与您联系</dd>
    </dl>
    <!-- <div class="post-info">
      <p>检测单号：</p>
      <p>{{orderCode}}</p>
      <p>申请检测人：{{userName}}<span>{{userGender}}</span><span>38sui</span></p>
      <p>提交时间：{{postTime}}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderCode: '',
      userName: '',
      userGender: '',
      postTime: ''
    };
  },
  methods: {
  },
  mounted(){
    // this.userName = this.$route.query.userName
    // this.userName = this.$route.query.userName
  }
};
</script>
<style lang='scss'>
@import "@/assets/style/invitation.scss";
</style>