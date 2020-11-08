<template>
  <div>
      index test ==> {{test}}
          <button @click="btn1"> 测试+ </button>
    <button @click="testBtn"> 测试- </button>
  </div>
</template>

<script>
  import {mapActions,mapGetters,mapMutations} from 'vuex'
  export default {
    computed:{
      ...mapGetters('name',['test'])
    },
    methods:{
      ...mapActions('name',['increment']),
      ...mapMutations('name',['del']),
      btn1(){
        this.increment(1)
      },
      btn2(){
        this.del(1)
      }
    },
  }
</script>

