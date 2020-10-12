export default {
    increment (state) {
      console.log('222222',state)
      // 变更状态
      state.count = state.count+11
    }
}