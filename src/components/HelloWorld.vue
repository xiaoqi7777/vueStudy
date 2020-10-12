<template>
  <div>
    <button @click="testBtn"> 测试 全局混合mixin</button>
    <br/>
    全局指令测试 <input type="text" v-model="d" v-split-x.xxx='expression'>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        d:'',
        expression:'11111'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>