<template>
  <div>
      base
        <button @click="btn">base测试</button>
        <button @click="btn1">btn1 测试</button>
  </div>
</template>

<script>
  export default {
    beforeCreate(){
      console.log('base')
    },
      data(){
        return{
          base:{
            name:'base_sg'
          }
        }
      },
      methods:{
        btn(){
          console.log(this.base.name)
          console.log(this.base.age)
        }
      }
  }
</script>

<style lang="scss" scoped>

</style>