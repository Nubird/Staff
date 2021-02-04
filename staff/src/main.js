// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 程序入口文件，主要作用：导包
import Vue from 'vue'
import App from './App'
import ElementUi from 'element-ui'
// 样式文件需要单独引入
import 'element-ui/lib/theme-chalk/index.css'

//公共样式在入口文件main.js中引入
import '@/assets/css/reset.css'

import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
