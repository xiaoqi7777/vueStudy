
<template>
  <div>
    123
  </div>
</template>

<script>
import Base from './base'
import mixin from './mixin'
  export default {
      extends:Base,
      mixins:[mixin],
      data(){
        return{
          base:{
            age:13
          }
        }
      },
      // methods:{
      //   btn(){
      //     console.log(this.base.name)
      //   }
      // }
  }
</script>

<style lang="scss" scoped>

</style>