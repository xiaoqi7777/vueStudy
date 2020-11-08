<template>
  <div class="layout">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称1" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
       <el-form-item label="活动名称2" prop="age">
        <el-input v-model="ruleForm.age"></el-input>
      </el-form-item>
    </el-form>  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
  </div>
</template>

<script>
import validator from './Validator'
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          age: '',
        },
        rules: {}
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted(){
        validator.init(this.$refs.ruleForm)
        this.rules = validator.validators
    }
  }
</script>

<style  scoped>
.layout{
  width: 400px;
}
</style>