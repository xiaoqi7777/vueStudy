<template>
<div>
  标题
    <TableColumn v-bind="$attrs" v-on="$listeners">
      123
    </TableColumn>
</div>
</template>

<script>

import { TableColumn } from 'element-ui';
export default {
    name:'tc',
    components:{
      TableColumn
    },
    mounted(){
      console.log(`-------------`,this.$attrs)
    } 
}
</script>

<style lang="scss" scoped>

</style>