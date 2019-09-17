<!-- 邀约广告页面 -->
<template>
  <div class="invitationAdv">
    <div class="top-intro">
      <img src="~IMG/invitationAdv-intro.png" alt="">
      <span class="commissioner">{{staffCode}}</span>
    </div>
    <div class="invitation-info">
      <div class="appointment-slogan">
        <!-- <div class="slogan-box">
          <div class="slogan-img">
            <img src="~IMG/invitation-txt3.png" alt="">
          </div>
          <p class="commissioner">健康专员<span>{{staffCode}}</span>为您服务</p>
        </div> -->
      </div>
      <div class="appointment-remark">
        {{remark}}
        <!-- 您好：我是太平洋人寿保险宁波分公司的张三，我的健康专员工号为YYYY0001,很高兴您能百忙之中接收我的健康检测邀约，我的电话是18888888888（微信），您可以随时联系我咨询健康检测预约事宜，期待您的电话，祝您生活愉快，工作顺利！         -->
      </div>
      <!-- <div class="personal-remark" v-if="remark">
        <p>{{remark}}</p>
      </div> -->
      <!-- <div class="gradient-txt">
      <img src="~IMG/invitation-txt1.png" alt="">
      </div> -->
      <p class="intro">免费上门为您提供以下服务项目</p>
      <div class="service-list">
        <ul>
          <!-- <li>
            <div class="service-control">
              <div class="left-img"><img src="~IMG/invitation-service1.png" alt=""></div>
              <div :class="[ visible ? 'rotate-up' : '','right-control']" @click="control"><img src="~IMG/invitation-arrow.png" alt=""></div>
            </div>
            <div :class="[ visible ? 'collapse-open' : 'collapse-close','service-collapse']">
              <div class="collapse-box">
                <img v-for="(img,index) in imageList1" :key="index" :src="img.path" >
              </div>
            </div>
          </li> -->
          <li v-if="serviceExtras.includes('01')">
            <div class="service-control">
              <div class="top-img"><img src="~IMG/invitation-service1.png" alt=""></div>
              <div class="bottom-intro">
                <dl>
                  <dt>健康在手亚健康检测</dt>
                  <dd>关注成年人10大类指标系统，完成早期大病预防。2分钟完成检测，根据不同检测结果，知名专家开具不少于4种个性化调理方案。</dd>
                </dl>
                <div :class="[ visible1 ? 'rotate-up' : '','right-control']" @click="control1"><img src="~IMG/invitation-arrow2.png" alt=""></div>
              </div>
            </div>
            <div :class="[ visible1 ? 'collapse-open' : 'collapse-close','service-collapse']">
              <div class="collapse-box">
                <img v-for="(img,index) in imageList1" :key="index" :src="img.path" >
              </div>
            </div>
          </li>
          <li v-if="serviceExtras.includes('02')">
            <div class="service-control">
              <!-- <div class="left-img"><img src="~IMG/invitation-service2.png" alt=""></div>
              <div class="right-control"><img src="~IMG/invitation-arrow.png" alt=""></div> -->
              <div class="top-img"><img src="~IMG/invitation-service2.png" alt=""></div>
              <!-- <div class="bottom-intro">
                <dl>
                  <dt>健康在手亚健康检测</dt>
                  <dd>关注成年人10大类指标系统，完成早期大病预防。2分钟完成检测，根据不同检测结果，知名专家开具不少于4种个性化调理方案。</dd>
                </dl>
                <div :class="[ visible1 ? 'rotate-up' : '','right-control']" @click="control1"><img src="~IMG/invitation-arrow2.png" alt=""></div>
              </div> -->
            </div>
          </li>
          <li v-if="serviceExtras.includes('03')">
            <div class="service-control">
              <!-- <div class="left-img"><img src="~IMG/invitation-service3.png" alt=""></div>
              <div class="right-control"><img src="~IMG/invitation-arrow.png" alt=""></div> -->
              <div class="top-img"><img src="~IMG/invitation-service3.png" alt=""></div>
              <!-- <div class="bottom-intro">
                <dl>
                  <dt>健康在手亚健康检测</dt>
                  <dd>关注成年人10大类指标系统，完成早期大病预防。2分钟完成检测，根据不同检测结果，知名专家开具不少于4种个性化调理方案。</dd>
                </dl>
                <div :class="[ visible1 ? 'rotate-up' : '','right-control']" @click="control1"><img src="~IMG/invitation-arrow2.png" alt=""></div>
              </div> -->
            </div>
          </li>
          <li v-if="serviceExtras.includes('04')">
            <!-- <div class="service-control">
              <div class="left-img"><img src="~IMG/invitation-service4.png" alt=""></div>
              <div class="right-control"><img src="~IMG/invitation-arrow.png" alt=""></div>
            </div> -->
            <div class="service-control">
              <div class="top-img"><img src="~IMG/invitation-service4.png" alt=""></div>
              <div class="bottom-intro">
                <dl>
                  <dt>观禾营养师</dt>
                  <dd>具有营养学和医学专业背景的营养师团队与您在线交流。评估您的营养需求，正确建议膳食方案，随时沟通饮食建议，周期回顾饮食结果。</dd>
                </dl>
                <div :class="[ visible4 ? 'rotate-up' : '','right-control']" @click="control4"><img src="~IMG/invitation-arrow2.png" alt=""></div>
              </div>
            </div>
            <div :class="[ visible4 ? 'collapse-open' : 'collapse-close','service-collapse']">
              <div class="collapse-box">
                <img src="@/assets/img/invitation-service4-intro.png" >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="confirmBtn" @click="jump" >我要预约</div>
    <div class="shareBtn" >我要分享</div>
  </div>
</template>

<script>
import TopBg from 'Module/TopBg/index2'
export default {
  data () {
    return {
      activeNames: '1',
      visible1: false,
      visible4: false,
      staffCode: '',
      code: '',
      openid: '',
      remark: '',
      serviceExtras: '',
      imageList1: [
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
    control1(){
      this.visible1 = !this.visible1
    },
    control4(){
      this.visible4 = !this.visible4
    },
    //获取openid
    getOpenid(code){
      this.$axios({
        method: "get",
        url: "wx/getOpenId?code="+code,
      })
        .then(result => {
          console.log('获取openid-result',result);
          if (result.data.resultCode == "200"){
            this.openid = result.data.data
            console.log('获取openid',this.openid)
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
    this.code = this.$route.query.code
    this.openid = this.$route.query.openId
    this.remark = this.$route.query.remark
    this.serviceExtras = this.$route.query.serviceExtras
    this.code = getUrlParam('code');
    console.log("参数staffCode",this.staffCode,"参数code",this.code,"参数openid",this.openid,"参数remark",this.remark,"参数serviceExtras",this.serviceExtras)
    if(this.code){
      this.getOpenid(this.code)
    }
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