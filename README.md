# 配置
## route 
- 配置文件 入口,`configs/settings`(配置主路由 名字指向modules下的文件名字)
- 所有路由 固定写在`src/modules`下, 路由名字就是modules下的文件名字,一级路由默认Index.vue文件,二级路由任意名字.vue
- 动态路由`home/$xxx`代表`home/:xxx`
- fallback 默认 匹配错误路由
## store
- 同route,在当前目录下创建一个store文件 格式如下,使用的时候 要加上当前的文件名
```js
const store = {
  namespaced:true,
  state: {
    count: 1
  },
  mutations: {
    increment (state,data) {
      // 变更状态
      state.count = state.count+data
    },
    del(state,data){
      state.count = state.count-data
    }
  },
  actions: {
    increment (context,data) {
      context.commit('increment',data)
    }
  },
  getters: {
    test:(state)=>{
      return state.count
    }
  }
}
export default store
```
## 全局api
- 全局注册组件 文件'src/global/components' 下写的组件 会自动注册到全局
- mixins 若是注册全局的 直接用Vue进行注册  内部会执行js文件,若是局部的 需要自己引入
- 过滤器 等等 同mixins
