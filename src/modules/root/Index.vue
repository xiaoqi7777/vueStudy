<template>
  <div>
    store测试==>{{test}}=>{{t}}
    <br/>
    <button @click="btn1"> 测试+ </button>
    <button @click="btn2"> 测试- </button>
  </div>
</template>

<script>
  import {mapActions,mapState,mapGetters,mapMutations} from 'vuex'
  export default {
    data(){
      return{

      }
    },
    components:{

    },
    computed:{
      ...mapState('root',{
        t:state=>{
          return state.count
        }
      }),
      ...mapGetters('root',['test'])
    },
    methods:{
      ...mapActions('root',['increment']),
      ...mapMutations('root',['del']),
      btn1(){
        this.increment(1)
      },
      btn2(){
        this.del(1)
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>