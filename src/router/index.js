import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    {
      path: '/news/news-detail',
      name: '新闻详情页',
      component: resolve => require(['@/view/news/new'], resolve)
    },
    {
      path: '/details',
      name: '订单详情页面',
      component: resolve => require(['@/view/details'], resolve)
    },

  ]
})
