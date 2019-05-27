<!-- 活动分析 -->
<template>
  <div class="activityAnalysis">
    <dl class="analysis-panel">
      <dt>
        <div class="icon"><img src="~IMG/analysis-icon1.png" alt=""></div>
        <h2 class="tit">综合活动量跟踪</h2>
        <div class="v-line"></div>
        <h3>跟踪对比统计近10天内每天的检测次数和新增客户数及活动业务员数。</h3>
      </dt>
      <dd id="activityVolume"></dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods:{
    drawActivityVolume(){
      var myChart = this.$echarts.init(document.getElementById('activityVolume'));
      myChart.setOption({
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'联盟广告',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'视频广告',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name:'直接访问',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name:'搜索引擎',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330, 1320]
              }
          ]
      });
    }
  },
  mounted(){
    this.drawActivityVolume();
    let query = this.$route.query
    let staffCode = query.staffCode
    let token = query.token
    // alert(query);
    alert(staffCode);
    alert(token);
  }
}

</script>
<style lang='scss' scoped>
@import "@/assets/style/chartsAnalysis.scss";
</style>