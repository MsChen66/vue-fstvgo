import Vue from 'vue'
import Router from 'vue-router'

//配置路由
import Home from '../components/home/Home'
import Cart from '../components/pages/Cart'
import Mine from '../components/pages/Mine'
import Inwards from '../components/pages/Inwards'
import Canteen from '../components/pages/Canteen'
import Product from '../components/pages/Product'
import Category from '../components/prolist/Category'
import Detail from '../components/prolist/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      name: 'home'
    },
    {
      path: '/cart',
      component: Cart,
      name: 'cart'
    },
    {
      path: '/mine',
      component: Mine,
      name: 'mine'
    },
    {
      path: '/inwards',
      component: Inwards,
      name: 'inwards'
    },
    {
      path: '/canteen',
      component: Canteen,
      name: 'canteen'
    },
    {
      path: '/product',
      component: Product,
      name: 'product',
    },
    {
      path: '/category',
      component: Category,
      name: 'category',
    },
    {
      path: '/detail/:id',
      component: Detail,
      name: 'detail',
      props: true
    },
  ],
  mode: 'history' //解决#问题 要和后台说明这里用的是history 而不是hash模式
})
