<template>
  <div>
    {{$parent.message}}
    ==>
    <HHello @click="btn"/>
  </div>
</template>

<script>
  export default {
    created(){
      console.log('this',this)
    },
    methods:{
      btn(){
        console.log('123')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>