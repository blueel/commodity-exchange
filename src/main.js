import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import mockServer from './mock/mockServer'
import Carousel from './components/Carousel'
//映入全局轮播图样式
import "swiper/css/swiper.css";
//注册全局轮播图组件
Vue.component(Carousel.name,Carousel)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')