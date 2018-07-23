import Vue from 'vue'
import Router from 'vue-router'
import Guide from '@/components/Guide'
import t from '@/components/test'

Vue.use(Router)
Vue.use(t)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'guide',
      component: Guide
    },
    {
      path: '/',
      name: 't',
      component: t
    }
  ]
})
