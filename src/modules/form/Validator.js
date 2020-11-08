import {Validator} from '../../../validator/Validator'

let Rules = {
  age() {
    return (rule, value, callback) => {
      if(value<20){
        return callback(new Error('年龄报错'));
      }else{
        callback();
      }
    };
  },
  name() {
    return (rule, value, callback) => {
      if(value.length&&value.length<6){
        return callback(new Error('长度不够'));
      }else{
        callback();
      }
    };
},
}
let rule = {
  age: [
    {  validateName: 'age', trigger: 'change' },
  ],
  name: [
    {  validateName: 'name', trigger: 'change' },
  ],
}

let validator = new Validator(Rules)
validator.createRulesFromObj(rule)

export default validator