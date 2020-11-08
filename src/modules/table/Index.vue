<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <tc
      prop="date"
      label="日期"
      :render-header='fn'
      width="180">
    </tc>
    <tc
      prop="name"
      label="姓名"
      width="180">
    </tc>
    <tc
      prop="address"
      label="地址">
    </tc>
  </el-table>
  <!-- <div>
    <Tcc></Tcc>
  </div> -->
</template>
<script>
  export default {
    
  }
</script>

<script>
import tc from './tc'
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      }
    },
    components:{
      tc
    },
    methods: {
      fn:(h,{column})=>{
        return h('span',column.label+11)
      }
    },
  }
</script>