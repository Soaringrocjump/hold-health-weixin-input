import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    //邀约广告
    {
      path: '/invitationAdv',
      name: 'invitationAdv',
      component: () => import ("@/components/page/invitationAdv")
    },
    //提交预约信息
    {
      path: '/fillAppointment',
      name: 'fillAppointment',
      component: () => import ("@/components/page/fillAppointment")
    },
    //面对面邀约客户修改
    {
      path: '/scanCodeFill',
      name: 'scanCodeFill',
      component: () => import ("@/components/page/scanCodeFill")
    },
    //修改成功
    {
      path: '/fillSuccess',
      name: 'fillSuccess',
      component: () => import ("@/components/page/fillSuccess")
    },
    //健康在手介绍
    {
      path: '/holdHealth',
      name: 'holdHealth',
      component: () => import ("@/components/page/holdHealth")
    },
    //用户协议
    {
      path: '/userAgreement',
      name: 'userAgreement',
      component: () => import ("@/components/page/userAgreement")
    },
    //关于我们
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import ("@/components/page/aboutUs")
    },
    //操作指南
    {
      path: '/operateGuide',
      name: 'operateGuide',
      component: () => import ("@/components/page/operateGuide")
    },
    //操作指南2-月卡政策
    {
      path: '/operateGuide2',
      name: 'operateGuide2',
      component: () => import ("@/components/page/operateGuide2")
    },
    //活动分析
    {
      path: '/activityAnalysis',
      name: 'activityAnalysis',
      component: () => import ("@/components/page/activityAnalysis")
    },
    //使用分析
    {
      path: '/usageAnalysis',
      name: 'usageAnalysis',
      component: () => import ("@/components/page/usageAnalysis")
    },
    //营养师介绍
    {
      path: '/dietitian',
      name: 'dietitian',
      component: () => import ("@/components/page/dietitian")
    },
  ]
})