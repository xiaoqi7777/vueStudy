
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
// state
// const store = new Vuex.Store({
//   state: {
//     count: 0,
//     number:1
//   },
//   mutations: {
//     increment (state,d1) {
//       console.log('increment',state,d1)
//       state.count++
//     }
//   }
// })

// getter
// const store = new Vuex.Store({
//   state: {
//     todos: [
//       { id: 1, text: '...', done: true },
//       { id: 2, text: '...', done: false }
//     ]
//   },
//   getters: {
//     doneTodos: state => {
//       return state.todos.filter(todo => todo.done)
//     },
//     doneTodosCount: (state, getters) => {
//       console.log(state,getters.doneTodos)
//       return getters.doneTodos.length
//     }
//   }
// })


// Mutation
const store = new Vuex.Store({
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
  }
})
export default store