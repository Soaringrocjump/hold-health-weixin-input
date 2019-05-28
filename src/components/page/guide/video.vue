<!-- 操作视频 -->
<template>
  <div class="guide">
    <ul class="video-list" v-if="orgCode && orgCode.includes('CPIC')">
      <a href="http://video.guanqi2019.com/video/z1.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>智能面访信息录入操作流程.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/z2.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>太保邀约贴转发流程.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/t.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>健康检测操作流程.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/b.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>检测报告转发流程.mp4</li>
      </a>
    </ul>
    <ul class="video-list" v-else>
      <a href="http://video.guanqi2019.com/video/y.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>邀约贴转发+客户录入流程.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/t.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>健康检测操作流程.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/b.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>检测报告转发流程.mp4</li>
      </a>
     </ul>
    <!--<ul class="video-list" v-else>
      <a href="http://video.guanqi2019.com/video/t.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>邀约贴转发+客户录入流程.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/z1.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>健康检测操作流程.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/z2.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>检测报告转发流程.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/y.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>邀约贴分享+信息确认录入.mp4</li>
      </a>
      <a href="http://video.guanqi2019.com/video/b.mp4">
      <li><i class="iconfont icon-748bianjiqi_shipin"></i>报告分享视频-1.mp4</li>
      </a>
    </ul> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      orgCode: ''
    };
  },
  mounted(){
    this.orgCode = this.$route.query.orgCode
  }
}

</script>
<style lang='scss' scoped>
.guide{
  padding-top: 50px;
  text-align: center;
  .video-list{
    width: 520px;
    margin: 50px auto;
    li{
      display: flex;
      align-items: center;
      font-size: 32px;
      color: #a94fff;
      // background: linear-gradient(0deg,#a94fff,#e635ff);
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      margin-top: 75px;
      i{
        font-size: 36px;
        margin-right: 15px;
      }
    }
  }
}
</style>