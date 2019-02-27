// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' // 1、在这里引入axios

Vue.prototype.$http = axios;   // 2、在vue中使用axios
//配置全局的请求axios
// import axios from "axios"
// Vue.prototype.$http = axios

Vue.config.productionTip = false

//引入iView
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
Vue.use(iView)

//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入全局sass文件
import './stylesheets/main.scss'

//引入全局的rem
import '../public/js/font'

//font-awesome图标
import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

// Vue.component('font-awesome-icon', FontAwesomeIcon)



//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "../node_modules/swiper/dist/css/swiper.css"
//注册swiper
Vue.use(VueAwesomeSwiper)

//全局注册vuex
import store from './store'

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
