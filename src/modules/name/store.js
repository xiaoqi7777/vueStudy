

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





