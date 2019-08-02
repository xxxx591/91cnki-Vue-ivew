// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/style/index.scss'
import MetaInfo from 'vue-meta-info'

import axios from 'axios'
// axios全局配置
Vue.prototype.$axios = axios;  
Vue.prototype.$url = 'http://119.23.226.232:8089'
// axios.defaults.baseURL = host
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers['XPS-Version'] = '1.0.0'
Vue.use(iView);
Vue.use(MetaInfo)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
