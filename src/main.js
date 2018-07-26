// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import router from './router'
import { Checkbox, CheckboxButton, CheckboxGroup, InputNumber } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import { TabContainer, TabContainerItem, Tabbar, TabItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'jquery/dist/jquery.min'
import 'mescroll.js/mescroll.min.css'
// import WechatAuth from '../dist/wechatAuthor'
import App from './App'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(WeVue)
Vue.use(Tabbar)
Vue.use(TabItem)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(InputNumber)

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
// const queryString = require('query-string')
// Vue.use(WechatAuth, { appid: 'wx4a9bbd75f5e74c81' })
// const store = new Vuex.Store({
//   state: {
//     loginStatus: 0,
//     userInfo: {}
//   },
//   mutations: {

//   }
// })
// router.beforeEach((to, from, next) => {
//   if (store.state.loginStatus === 0) {
//     // 微信未授权登录跳转到授权登录页面
//     let url = window.location.href
//     // 解决重复登录url添加重复的code与state问题
//     let parseUrl = queryString.parse(url.split('?')[1])
//     let loginUrl
//     if (parseUrl.code && parseUrl.state) {
//       delete parseUrl.code
//       delete parseUrl.state
//       loginUrl = `${url.split('?')[0]}?${queryString.stringify(parseUrl)}`
//     } else {
//       loginUrl = url
//     }
//     WechatAuth.redirect_uri = loginUrl
//     store.dispatch('setLoginStatus', 1)
//     window.location.href = WechatAuth.authUrl
//   } else if (store.state.loginStatus === 1) {
//     try {
//       WechatAuth.returnFromWechat(to.fullPath)
//     } catch (err) {
//       store.dispatch('setLoginStatus', 0)
//       next()
//     }
//     store.dispatch('loginWechatAuth', WechatAuth.code).then((res) => {
//       if (res.status === 1) {
//         store.dispatch('setLoginStatus', 2)
//       } else {
//         store.dispatch('setLoginStatus', 0)
//       }
//       next()
//     }).catch(() => {
//       next()
//     })
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
