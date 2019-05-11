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
    //webview测试
    {
      path: '/webview',
      name: 'webview',
      component: () => import ("@/components/page/webview")
    },
  ]
})