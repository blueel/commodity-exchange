import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import mockServer from './mock/mockServer'
import Carousel from './components/Carousel'

Vue.component(Carousel.name,Carousel)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')