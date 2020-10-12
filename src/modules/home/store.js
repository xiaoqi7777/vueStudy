



const store = {
  namespaced:true,
  state: {
    count: 1
  },
  mutations: {
    increment (state,data) {
      console.log('222222')
      // 变更状态
      state.count = state.count+data
    }
  },
  actions: {
    increment (context,data) {
      console.log('123',data)
      context.commit('increment',data)
    }
  },
  getters: {
    test:()=>()=>11111
  }
}
export default store






