import Guide from '@/components/Guide';
import Home from '@/components/Home';
import ProductDetails from '@/components/product/productdetails';
import ProductList from '@/components/product/ProductList';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
Vue.use(Home)
Vue.use(ProductList)
Vue.use(ProductDetails)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'guide',
      component: Guide
    },
    {
      path: '/home',
      name: 'hoem',
      component: Home
    },
    {
      path: '/product/productlist',
      name: 'productlist',
      component: ProductList,
      meta: {
        keepAlive: true
      }
    },
    {
      path:'/product/productdetails',
      name:'productdetails',
      component:ProductDetails
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
       $(".mescroll").scrollTop(from.params.sc)
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
         //from.meta.savedPosition = document.body.scrollTop
         from.meta.savedPosition=to.params.sc;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
