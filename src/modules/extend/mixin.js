// import  Vue from 'vue'
// Vue.mixin({
//   methods:{
//     testBtn(){
//       console.log('testBtn')
//     }
//   }
// })

export default {
  beforeCreate() {
    console.log('mixin1.js')
  },
  methods: {
    btn1(){
      console.log('testBtn mixin')
    }
  },
}