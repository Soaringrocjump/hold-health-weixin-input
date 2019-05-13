<!-- 邀约广告页面 -->
<template>
  <div class="invitationAdv">
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
      <div class="personal-remark">
        <p>{{remark}}</p>
      </div>
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
      openId: '',
      remark: ''
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
          staffCode: this.staffCode,
          openId: this.openId
        }
      })
    }
  },
  mounted(){
    this.staffCode = this.$route.query.staffCode
    this.openId = this.$route.query.openId
    this.remark = this.$route.query.remark
    console.log("url参数staffCode",this.staffCode,"url参数openId",this.openId,"url参数remark",this.remark)
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/invitation.scss";
</style>