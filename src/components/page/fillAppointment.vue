<!-- 填写预约信息 -->
<template>
  <div class="fillAppointment">
    <div class="gradient-txt2">
      <img src="~IMG/logo1.png" alt="">
    </div>
    <p>欢迎使用观禾在线健康预约平台</p>
    <div class="cut-line"></div>
    <div class="fill-info">
      <dl>
        <dt>姓名<span class="nes">*</span></dt>
        <dd><input type="text" v-model="userName" placeholder="请输入您的姓名"></dd>
      </dl>
      <dl>
        <dt>性别<span class="nes">*</span></dt>
        <dd>
          <span class="arrow"><img src="~IMG/down.png" alt=""></span>
          <input type="text" placeholder="请选择您的性别" :value="userGender" readonly="readonly" @click="genderSelect">
          <!-- <select v-model="userGender">
            <option value="男">男</option>
            <option value="女">女</option>
          </select> -->
        </dd>
      </dl>
      <dl>
        <dt>生日<span class="nes">*</span></dt>
        <dd>
          <span class="arrow"><img src="~IMG/down.png" alt=""></span>
          <input type="text" placeholder="请输入您的生日" :value="selBirth | formatterDate" readonly="readonly" @click="birthSelect">
        </dd>
      </dl>
      <dl>
        <dt>其他备注信息</dt>
        <dd><textarea type="text" v-model="remark" placeholder="请输入您的备注信息"></textarea></dd>
      </dl>
      <div class="confirmBtn" @click="submit">我要预约</div>
    </div>
    <van-popup v-model="show" position="bottom" :overlay="true" :close-on-click-overlay="false">
      <van-picker 
        v-show="genderSel" 
        :show-toolbar="true"
        :columns="gender" 
        @cancel="cancel" 
        @confirm="genderConfirm" />
      <van-datetime-picker
        v-show="birthSel" 
        v-model="currentDate"
        type="date"
        @cancel="cancel" 
        @confirm="birthConfirm" 
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
  </div>
</template>

<script>
import TopBg from 'Module/TopBg'
export default {
  data () {
    return {
      show: false,
      genderSel: false,
      birthSel: false,
      gender: ['男','女'],
      currentDate: new Date(1980, 0, 1),
      minDate: new Date(1949, 0, 1),
      maxDate: new Date(),
      staffCode: 'tests81',
      userName: '',
      userGender: '',
      selBirth: '',
      userAge: '',
      remark: '',
      openid: '',
      serviceExtras: ''
    };
  },
  components:{
    TopBg
  },
  methods:{
    //取消
    cancel(){
      this.show = false
      this.genderSel = false
      this.birthSel = false
    },
    //选择性别
    genderSelect(){
      this.show = true
      this.genderSel = true
    },
    //选择生日
    birthSelect(){
      this.show = true
      this.birthSel = true
    },
    //性别确认
    genderConfirm(val){
      console.log('当前值',val)
      this.userGender = val
      this.genderSel = false
      this.show = false
    },
    //生日确认
    birthConfirm(val){
      console.log('确认',val)
      this.selBirth = val
      this.birthSel = false
      this.show = false
    },
    submit(){
      console.log('提交信息')
      console.log('userName',this.userName)
      console.log('userGender',this.userGender)
      console.log('selBirth',this.selBirth)
      console.log('remark',this.remark)
      console.log('openid',this.openid)
      if(this.selBirth){
        let thisYear = new Date().getFullYear()
        let birthyear = this.selBirth.getFullYear()
        this.userAge = thisYear - birthyear
        console.log('userAge',this.userAge)
      }
      if(
        this.staffCode !== '' &&
        this.userName !== '' &&
        this.userGender !== '' &&
        this.selBirth !== '' &&
        this.userAge !== ''
      ){
        console.log("输入完成")
        this.$axios({
          method: "post",
          url: "order/addOrder",
          data: {
            staffCode: this.staffCode,
            userName: this.userName,
            userGender: this.userGender,
            userBirthday: this.selBirth,
            userAge: this.userAge,
            remark: this.remark,
            wxOpenid: this.openid,
            customerCode: this.openid,
            serviceExtras: this.serviceExtras
          }
        })
          .then(result => {
            console.log('result',result);
            if (result.data.resultCode == "200"){
              var msg = result.data.data
              this.$router.push({
                path: 'fillSuccess',
                query: { 
                  orderCode: msg.orderCode,
                  userName: msg.userName,
                  userGender: msg.userGender,
                  postTime: msg.postTime
                }
              })
            }else{
              // alert(result.data.message)
              this.$dialog.alert({
                message: result.data.message
              }).then(() => {
                // on close
              });
            }
          })
          .catch(err => {
            alert("网络请求超时！");
            // alert("错误：获取数据异常" + err);
            
          });
      }else{
        alert("请将信息填写完整！")
      }
    }
  },
  mounted(){
    this.staffCode = this.$route.query.staffCode
    console.log("获取地址栏参数staffCode",this.staffCode)
    this.openid = this.$route.query.openid
    console.log("获取地址栏参数openid",this.openid)
    this.serviceExtras = this.$route.query.serviceExtras
    console.log("获取地址栏参数serviceExtras",this.serviceExtras)
  }
}

</script>
<style lang='scss'>
@import "@/assets/style/invitation.scss";
.van-cell{
  padding: 0;
  line-height: normal;
  font-size: 26px;
}
.van-picker__toolbar{
  height: 80px;
  line-height: 80px;
  font-size: 36px;
}
.van-picker__cancel, .van-picker__confirm {
  font-size: 36px;
}
.van-picker__title {
  font-size: 36px;
}
.van-picker-column {
  font-size: 36px;
}
.van-picker__columns{
  height: 80px;
  line-height: 80px;
}
.van-cell:not(:last-child):after {
  border-bottom: 0;
}
.van-dialog__header{
  font-size: 32px;
}
.van-dialog__message{
  font-size: 32px;
}
.van-button{
  font-size: 32px;
  height: 80px;
  line-height: 80px;
}
</style>