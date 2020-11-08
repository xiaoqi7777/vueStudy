

<script>
import Base from './base'
import mixin1 from './mixin'
import mixin2 from './mixin2'
  export default {
      mixins:[mixin2,mixin1],
      extends:Base,
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