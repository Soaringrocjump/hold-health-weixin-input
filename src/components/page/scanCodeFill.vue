<!-- 面对面扫码信息输入 -->
<template>
  <div class="scanCodeFill">
    <TopBg>
      <div class="slogan">
        <img src="~IMG/login-slogan.png" alt="">
      </div>
    </TopBg>
    <div class="invitation-info">客户信息登记</div> 
    <div class="fill-info">
      <dl>
        <dt>您的专属健康专员工号</dt>
        <dd><input type="text" class="disabled-input" placeholder="" :value="staffCode" disabled></dd>
      </dl>
      <dl>
        <dt>姓名<span class="nes">*</span></dt>
        <dd><input type="text" v-model="userName" placeholder="请输入您的姓名"></dd>
      </dl>
      <dl>
        <dt>性别<span class="nes">*</span></dt>
        <dd>
          <!-- <span class="arrow"><img src="~IMG/down.png" alt=""></span> -->
          <select v-model="userGender">
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>生日<span class="nes">*</span></dt>
        <dd>
          <input type="text" placeholder="请输入您的生日" :value="userBirthday | formatterDate" readonly="readonly" @click="birthSelect">
        </dd>
      </dl>
      <dl>
        <dt>身高（厘米 cm）<span class="nes">*</span></dt>
        <dd><input type="number" v-model="userHeight" placeholder="请输入您的身高"></dd>
      </dl>
      <dl>
        <dt>体重（公斤 kg）<span class="nes">*</span></dt>
        <dd><input type="number" v-model="userWeight" placeholder="请输入您的体重"></dd>
      </dl>
      <dl>
        <dt>民族<span class="nes">*</span></dt>
        <dd>
          <!-- <span class="arrow"><img src="~IMG/down.png" alt=""></span> -->
          <select v-model="userNation">
            <option v-for="(item,index) in nation" :key="index" :value="item.code">{{item.name}}</option>
          </select>
        </dd>
      </dl>
      <dl>
        <dt>常住地<span class="nes">*</span></dt>
        <dd>
          <input type="text" placeholder="省市区选择" :value="selArea" readonly="readonly" @click="areaSelect">
        </dd>
      </dl>
      <div class="confirmBtn" @click="submit">确认</div>
    </div>
    <van-popup v-model="show1" position="bottom" :overlay="true">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @cancel="show1 = false" 
        @confirm="onConfirm" 
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
    <van-popup v-model="show2" position="bottom" :overlay="true">
      <van-area :area-list="areaList" :columns-num="3" @cancel="show2 = false" @confirm="onConfirm2" @change="onChange2" title="请先选择地址" />
    </van-popup>
  </div>
</template>

<script>
import TopBg from 'Module/TopBg'
import areaData from '@/assets/js/area'
export default {
  data () {
    return {
      show1: false,
      show2: false,
      currentDate: new Date(1980, 0, 1),
      minDate: new Date(1949, 0, 1),
      maxDate: new Date(),
      staffCode: '',
      userName: '',
      userGender: '',
      userBirthday: '',
      userAge: '',
      userHeight: '',
      userWeight: '',
      userNation: '',
      nation: [],
      areaList: areaData,
      selArea: '',
      rowState: '',
      postTime: '',
      orderCode: '',
      openId: ''
    };
  },
  components:{
    TopBg
  },
  methods:{
    //点击生日
    birthSelect(){
      this.show1 = true
    },
    //生日确认
    onConfirm(val){
      console.log('确认',val)
      this.userBirthday = val
      let birthYear = val.getFullYear()
      console.log('birthYear',birthYear)
      this.show1 = false
    },
    //点击省市区
    areaSelect(){
      this.show2 = true
    },
    //省市区确认
    onConfirm2(val){
      console.log('确认',val)
      let areaArr = []
      val.forEach(el => {
        areaArr.push(el.name)
      });
      console.log("areaArr",areaArr)
      this.selArea = areaArr.join('')
      this.show2 = false
    },
    onChange2(picker){
      let val = picker.getValues();
      console.log(val)
    },
    submit(){
      console.log('提交信息')
      console.log('userName',this.userName)
      console.log('userGender',this.userGender)
      console.log('userBirthday',this.userBirthday)
      console.log('selArea',this.selArea)
      console.log('userHeight',this.userHeight)
      console.log('userWeight',this.userWeight)
      console.log('userNation',this.userNation)
      console.log('rowState',this.rowState)
      console.log('orderCode',this.orderCode)
      console.log('typeof',typeof (this.userBirthday))
      if(typeof (this.userBirthday) == 'number'){
        let thisYear = new Date().getFullYear()
        let birthYear = new Date(this.userBirthday).getFullYear()
        this.userAge = thisYear - birthYear
        console.log('userAge',this.userAge)
      }else{
        let thisYear = new Date().getFullYear()
        let birthYear = this.userBirthday.getFullYear()
        this.userAge = thisYear - birthYear
        console.log('userAge',this.userAge)
      }
      
      if(
        this.staffCode !== '' &&
        this.userName !== '' &&
        this.userGender !== '' &&
        this.userBirthday !== '' &&
        this.selArea !== '' &&
        this.userHeight !== '' &&
        this.userWeight !== '' &&
        this.userNation !== ''
      ){
        console.log("输入完成")
        this.$axios({
          method: "post",
          url: "order/orderEdit?rowState="+this.rowState+"&userAddress="+this.selArea,
          data: {
            staffCode: this.staffCode,
            userName: this.userName,
            userGender: this.userGender,
            userBirthday: this.userBirthday,
            userAge: this.userAge,
            userHeight: this.userHeight,
            userWeight: this.userWeight,
            userNation: this.userNation,
            orderCode: this.orderCode,
            wxOpenid: this.openId
          }
        })
          .then(result => {
            console.log('submit-result',result);
            if (result.data.resultCode == "200"){
              var msg = result.data.data
              this.$router.push({
                path: '/fillSuccess'
                // query: { 
                //   orderCode: this.orderCode,
                //   userName: msg.userName,
                //   userGender: msg.userGender,
                //   postTime: msg.postTime
                // }
              })
            }else{
              alert(result.data.message)
            }
          })
          .catch(err => {
            alert("错误：获取数据异常" + err);
          });
      }else{
        alert("请将信息填写完整")
        // alert(
        //   "rowState",this.rowState,
        //   "staffCode",this.staffCode,
        //   "userName",this.userName,
        //   "userGender",this.userGender,
        //   "userBirthday",this.userBirthday,
        //   "userNation",this.userNation,
        //   "orderCode",this.orderCode,
        //   "selArea",this.selArea
        // )
      }
    },
    //根据orderCode获取信息
    getInfo(orderCode){
      this.$axios({
        method: "post",
        url: "order/orderDetail",
        data: {
          orderCode: orderCode,
        }
      })
        .then(result => {
          console.log('getInfo-result',result);
          if (result.data.resultCode == "200"){
            var msg = result.data.data
            if(msg != null){
              this.staffCode = msg.staffCode
              this.userName = msg.userName
              this.userGender = msg.userGender
              this.userBirthday = msg.userBirthday
              this.userHeight = msg.userHeight
              this.userWeight = msg.userWeight
              this.rowState = msg.rowState
              console.log('获取rowState',this.rowState)
            }
          }else{
            alert(result.data.message)
          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    },
    //获取民族字典
    getNation(){
      this.$axios({
        method: "get",
        url: "dic/getListByType?type=ZX_GS_BM_MZ",
      })
        .then(result => {
          // console.log('result',result);
          if (result.data.resultCode == "200"){
            var msg = result.data.data.values
            console.log('民族',msg)
            this.nation = msg
          }else{
            alert(result.data.message)
          }
        })
        .catch(err => {
          alert("错误：获取数据异常" + err);
        });
    }
  },
  mounted(){
    this.getNation()
    let query = this.$route.query
    console.log('query',query)
    if(query.orderCode){
      this.orderCode = this.$route.query.orderCode
      console.log("getInfo")
      this.getInfo(this.orderCode)
    }
    
    if(query.openId){
      this.openId = this.$route.query.openId
    }
    if(query.staffCode){
      this.staffCode = this.$route.query.staffCode
    }
    console.log("获取地址栏参数")
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
</style>