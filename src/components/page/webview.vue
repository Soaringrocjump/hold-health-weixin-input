<!-- 确认发布 -->
<template>
  <div class="confirmShare">
    <TopBg>
      <div class="slogan">
        <img src="~IMG/login-slogan.png" alt="">
      </div>
    </TopBg>
    <div class="invitation-info">
      <h2>您好：</h2>
      <p>我是，我的健康专员工号为,很高兴您能百忙之中接收我的健康邀约，我的电话是  （微信），您可以随时联系我咨询预约事宜，期待您的电话！</p>
    </div> 
    <p class="intro">免费上门为您提供以下服务项目</p>

    <!-- <router-link to="/appointment"> -->
      <div class="confirmBtn" @click="show = true">已确认，发布邀约</div>
    <!-- </router-link> -->
    <div v-if="show" class="shareShadow">
      <div class="shareBox">
        <div class="sharePlat">
          <dl @click="shareWechat">
            <dt><img src="~IMG/share-wechat.png" alt=""></dt>
            <dd>微信</dd>
          </dl>
          <dl>
            <dt><img src="~IMG/share-wechat-friends.png" alt=""></dt>
            <dd>朋友圈</dd>
          </dl>
          <dl>
            <dt><img src="~IMG/share-wechat-friends.png" alt=""></dt>
            <dd>复制链接</dd>
          </dl>
        </div>
        <div class="cancelBtn" @click="show = false">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      show: false,
      service: [],
      // basicInfo: JSON.parse(localStorage.getItem('basicInfo')),
      serviceList:[
        {
          serviceName: '健康在手',
          serviceImg: require('@/assets/img/invitation-service5.png')
        },
        {
          serviceName: '荃禾"7+3"',
          serviceImg: require('@/assets/img/invitation-service2.png')
        },
        {
          serviceName: '遗传基因检测',
          serviceImg: require('@/assets/img/invitation-service3.png')
        },
        {
          serviceName: '健康智库',
          serviceImg: require('@/assets/img/invitation-service4.png')
        },
      ]
    };
  },
  components:{
    TopBg
  },
  methods:{
    shareWechat(){
      
    }
  },
  mounted(){
    this.service = this.$route.query.service
  }
}

</script>
<style lang='scss' scoped>
.confirmShare{
  .slogan{
    width: 522px;
    margin: 66px auto;
  }
  .invitation-info{
    width:649px;
    height:299px;
    background:#fff;
    border:1px solid rgba(232, 232, 232, 1);
    box-shadow:4px 3px 20px 0px rgba(0, 0, 0, 0.25);
    border-radius:25px;
    margin: -53px auto;
    padding: 30px 35px;
    color: #555;
    line-height: 1.6;
    h2{
      font-size: 35px;
    }
    p{
      font-size: 28px;
    }
  }
  .gradient-txt{
    width: 516px;
    margin: 115px auto 0;
  }
  .intro{
    font-size: 35px;
    color: #555;
    text-align: center;
    margin-top: 10px;
  }
  .service-list{
    width:650px;
    // height:663px;
    margin: 30px auto;
    background: #fff;
    border:1px solid rgba(232, 232, 232, 1);
    box-shadow:4px 3px 20px 0px rgba(0, 0, 0, 0.25);
    border-radius:25px;
    padding: 15px 0;
    overflow: hidden;
    li{
      height: 155px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px 0 32px;
      .invitation-service{
        width: 490px;
        height: 113px;
      }
      .arrow{
        width: 49px;
        height: 49px;
      }
    }
    // li~li{
    //   border-top: 1px solid #DADADA;
    // }
  }
  .confirmBtn{
    width:550px;
    height:90px;
    line-height:90px;
    background:linear-gradient(0deg,rgba(106,99,242,1),rgba(186,54,229,1));
    box-shadow:0px 2px 0px 0px rgba(255,255,255,0.31);
    border-radius: 90px;
    font-size: 35px;
    color: #fff;
    text-align: center;
    margin: 130px auto;
  }
  .shareShadow{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    .shareBox{
      position: absolute;
      
      // left: 0;
      width: 750px;
      height: 380px;
      background: #fff;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      animation: slideIn 0.3s forwards;
      .sharePlat{
        padding: 70px 70px 40px;
        display: flex;
        dl{
          text-align: center;
          dt{
            width: 100px;
            margin: 0 auto;
          }
          dd{
            color: #323232;
            font-size: 28px;
            margin-top: 10px;
          }
        }
        dl~dl{
          margin-left: 70px;
        }
      }
      .cancelBtn{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 119px;
        line-height: 119px;
        border-top: 1px solid #F1F1F1;
        text-align: center;
        font-size: 32px;
        color: #FF3657;
      }
    }
  }
}
@keyframes slideIn {
  0%{
    // transform: translateY(-100%);
    bottom: -380px;
  }
  100%{
    // transform: translateY(0);
    bottom: 0;
  }
}
</style>