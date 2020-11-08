import Vue from 'vue'
import App from './App.vue'
import '../global/index'
import router from '../global/router/index'
import store from '../global/vuex/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


// import Test from './Test.vue'
// import Vue from 'vue'



// import LoadingComp from './LoadingComp.vue'
// import ErrorComp from './ErrorComp.vue'
// // const AsyncComp = ()=>({
// //   // 需要加载的组件。应当是一个promise
// //   component:import('./async.vue'),
// //   // 加载中应当渲染的组件
// //   loading:LoadingComp,
// //   // 出错时渲染的组件
// //   error:ErrorComp,
// //   // 渲染加载中组件前的等待时间。默认200ms
// //   delay:200,
// //   // 最长等待时间,超出此时间则渲染错误组件,默认:Infinity
// //   timeout:1000
// // })

// const AsyncComponent = () => ({
//   // 需要加载的组件 (应该是一个 `Promise` 对象)
//   component: import('./async.vue'),
//   // 异步组件加载时使用的组件
//   loading: LoadingComp,
//   // 加载失败时使用的组件
//   error: ErrorComp,
//   // 展示加载时组件的延时时间。默认值是 200 (毫秒)
//   delay: 2000,
//   // 如果提供了超时时间且组件加载也超时了，
//   // 则使用加载失败时使用的组件。默认值是：`Infinity`
//   timeout: 3000
// })
// Vue.component('HHello',AsyncComponent)
// new Vue({
//   el:'#app',
//   render(h){
//    return h(Test)
//   },
//   mounted(){
//     console.log(this.message)
//   },
//   data:{
//     message:'hello world'
//   }
// })
