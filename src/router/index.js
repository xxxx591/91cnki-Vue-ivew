import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: resolve => require(['@/view/index'], resolve)
    },
    {
      path: '/upload',
      name: '文章上传',
      component: resolve => require(['@/view/upload'], resolve)
    },
    {
      path: '/flower',
      name: '检测流程',
      component: resolve => require(['@/view/flower'], resolve)
    },
    {
      path: '/download',
      name: '文章下载',
      component: resolve => require(['@/view/download'], resolve)
    },

  ]
})
