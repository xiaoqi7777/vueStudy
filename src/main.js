import Vue from 'vue'
import App from './App.vue'
import '../global/index'
import router from '../global/router/index'
import store from '../global/vuex/index'
console.log(`store`,store)
Vue.config.productionTip = false
new Vue({
  store:store,
  router,
  render: h => h(App),
}).$mount('#app')
