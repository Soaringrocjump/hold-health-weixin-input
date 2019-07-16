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
      <div class="personal-remark" v-if="remark">
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
        <li v-if="serviceExtras.includes('01')">
          <div class="service-control">
            <div class="left-img"><img src="~IMG/invitation-service1.png" alt=""></div>
            <div :class="[ visible ? 'rotate-up' : '','right-control']" @click="control"><img src="~IMG/invitation-arrow.png" alt=""></div>
          </div>
          <div :class="[ visible ? 'collapse-open' : 'collapse-close','service-collapse']">
            <div class="collapse-box">
              <img v-for="(img,index) in imageList" :key="index" :src="img.path" >
            </div>
          </div>
        </li>
        <li v-if="serviceExtras.includes('02')">
          <div class="service-control">
            <div class="left-img"><img src="~IMG/invitation-service2.png" alt=""></div>
            <div class="right-control"><img src="~IMG/invitation-arrow.png" alt=""></div>
          </div>
        </li>
        <li v-if="serviceExtras.includes('03')">
          <div class="service-control">
            <div class="left-img"><img src="~IMG/invitation-service3.png" alt=""></div>
            <div class="right-control"><img src="~IMG/invitation-arrow.png" alt=""></div>
          </div>
        </li>
        <li v-if="serviceExtras.includes('04')">
          <div class="service-control">
            <div class="left-img"><img src="~IMG/invitation-service4.png" alt=""></div>
            <div class="right-control"><img src="~IMG/invitation-arrow.png" alt=""></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="confirmBtn" @click="jump" >我要预约</div>
  </div>
</template>

<script>
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      activeNames: '1',
      visible: false,
      staffCode: '',
      openid: '',
      remark: '',
      serviceExtras: '',
      imageList: [
        {
          path: require('@/assets/img/hold-health1.png')
        },
        {
          path: require('@/assets/img/hold-health2.png')
        },
        {
          path: require('@/assets/img/hold-health3.png')
        },
        {
          path: require('@/assets/img/hold-health4.png')
        }
      ]
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
          openid: this.openid,
          serviceExtras: this.serviceExtras
        }
      })
    },
    control(){
      this.visible = !this.visible
    },
    //获取openid
    getOpenid(code){
      this.$axios({
        method: "get",
        url: "wx/getOpenId?code="+code,
      })
        .then(result => {
          console.log('result',result);
          if (result.data.resultCode == "200"){
            this.openid = result.data.data
          }else{
            this.$dialog.alert({
              message: '错误' + result.data.message
            }).then(() => {
              // on close
            });
          }
        })
        .catch(err => {
          alert("获取wxOpenId失败！");
          console.log("错误：获取数据异常" + err);
        });
    }
  },
  mounted(){
    var getUrlParam = function(name){
      var reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
      var r = window.location.search.substr(1).match(reg)
      if(r!=null) return unescape(r[2])
      return null
    }
    this.staffCode = this.$route.query.staffCode
    this.openid = this.$route.query.openid
    this.remark = this.$route.query.remark
    this.serviceExtras = this.$route.query.serviceExtras
    console.log("url参数staffCode",this.staffCode,"url参数openid",this.openid,"url参数remark",this.remark,"url参数serviceExtras",this.serviceExtras)
    // var code = getUrlParam('openid');
    // console.log(code)
    // this.getOpenid(code)
    // const AppId = 'wx1c9ed47be21d5efb';
    // const local = window.location.href;
    // console.log('AppId',AppId)
    // console.log('local',local)
    // if(!local.includes('code')){
    //   window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${AppId}&redirect_uri=${encodeURIComponent(local)}&response_type=code&connect_redirect=1&scope=snsapi_base&state=0&#wechat_redirect`
    // }else{
    //   var code = getUrlParam('code');
    //   console.log(code)
    //   alert(code)
    //   this.getOpenid(code)
    // }
    
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/invitation.scss";
</style>