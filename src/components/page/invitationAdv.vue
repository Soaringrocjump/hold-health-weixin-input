<!-- 确认发布 -->
<template>
  <div class="confirmShare">
    <TopBg>
      <div class="slogan">
        <img src="~IMG/login-slogan.png" alt="">
      </div>
    </TopBg>
    <div class="invitation-info">
      <div class="personal-info">
        <div class="head-info">
          <div class="head">
            <img src="~IMG/userHead.png" alt="">
          </div>
          <dl>
            <dt>健康专员工号</dt>
            <dd>{{staffCode}}</dd>
          </dl>
        </div>
        <div class="qr-code">
          <i class="iconfont icon-erweima"></i>
          <p>二维码名片</p>
        </div>
      </div>
      <div class="personal-add">
        请点击二维码名片添加我的微信
      </div>
      <!-- <div class="personal-input">
        <p>我是{{basicInfo.userName}}，我的健康专员工号为{{basicInfo.staffCode}},很高兴您能百忙之中接收我的健康邀约，我的电话是  （微信），您可以随时联系我咨询预约事宜，期待您的电话！</p>
      </div> -->
    </div>
    <div class="gradient-txt">
      <img src="~IMG/invitation-txt1.png" alt="">
    </div>
    <p class="intro">免费上门为您提供以下服务项目</p>
    <div class="service-list">
      <ul>
        <!-- <li  v-for="(item,index) in serviceList" :key="index" v-if="service.includes(item.serviceName)">
          <img :src="item.serviceImg" alt="">
        </li> -->
        <li>
          <img src="~IMG/invitation-service1.png" alt="">
        </li>
      </ul>
    </div>
    <div class="confirmBtn" @click="jump" >已确认，填写邀约</div>
  </div>
</template>

<script>
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      show: false,
      staffCode: '',
    };
  },
  components:{
    TopBg
  },
  methods:{
    jump(){
      this.$router.push({
        path: '/fillAppointment',
        query:{
          staffCode: this.staffCode
        }
      })
    }
  },
  mounted(){
    this.staffCode = this.$route.query.staffCode
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/invitation.scss";
</style>