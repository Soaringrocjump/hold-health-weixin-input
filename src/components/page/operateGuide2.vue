<!-- 操作指南2-月卡政策 -->
<template>
  <div class="operateGuide">
    <img src="~IMG/guide-top2.png" alt="">
    <div class="tab">
      <div v-for="(item,index) in tab" :key="index" :class="[item.active ? 'active' : '', 'tabBtn']" @click="handle(item)">
        {{item.name}}
      </div>
    </div>
    <components :is="actModule"/>
  </div>
</template>

<script>
import cardWhat from './guide2/card-what'
import cardHow from './guide2/card-how'
import diamondHow from './guide2/diamond-how'
export default {
  data () {
    return {
      tab:[
        {
          name: '了解月卡政策',
          active: true,
          module: 'cardWhat',
          disable: false
        },
        {
          name: '月卡如何支付',
          active: false,
          module: 'cardHow',
          disable: false
        },
        {
          name: '钻石如何让购买',
          active: false,
          module: 'diamondHow',
          disable: true
        }
      ],
      actModule: cardWhat
    };
  },
  components:{
    cardWhat,
    cardHow,
    diamondHow
  },
  methods:{
    handle(val){
      this.tab.forEach(el => {
        el.active = false
      })
      val.active = true
      this.actModule = val.module
    }
  }
}

</script>
<style lang='scss' scoped>
.operateGuide{
  position: relative;
  width: 750px;
  .tab{
    display: flex;
    justify-content: space-between;
    .tabBtn{
      width: 248px;
      height: 97px;
      background: #EAEAEA;
      color: #777777;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      i{
        height: 36px;
        font-size: 36px;
        margin-right: 8px;
      }
    }
    .active{
      position: relative;
      color: #fff;
      background:linear-gradient(0deg,rgba(169,79,255,1),rgba(230,53,255,1));
      &::before{
        position: absolute;
        left: 50%;
        bottom: -15px;
        content: "";
        transform: translateX(-50%);
        width: 0;
        height: 0;
        z-index: 1;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 15px solid #a94fff;
      }
    }
  }
}
</style>