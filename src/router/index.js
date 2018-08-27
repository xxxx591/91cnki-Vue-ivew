import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import upload from '@/view/upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/upload',
      name: '文章上传',
      component: upload
    },

  ]
})
