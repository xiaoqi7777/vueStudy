export class Rules {
  static required (form) {
      return (rule, value, callback) => {
          const { nrule } = rule;
          const { errMsg } = nrule;
          if ((value !== 0 && !value) || value.length === 0) {
              callback(new Error(errMsg || "不能为空"));
              return;
          }
          callback();
      };
  }

  static vaildUpcase (form) {
      return (rule, value, callback) => {
          const reg = /^[A-Z0-9]+$/g;
          const { nrule: { errMsg } } = rule;
          if (!reg.test(value)) {
              callback(new Error(errMsg || "必须为大写字母和数字"));
              return;
          }
          callback();
      };
  }

  static validAmount (form, num) {
      return (rule, value, callback) => {
          const { nrule: { errMsg } } = rule;
          if (value > num) {
              callback(new Error(errMsg || `金额最大值为${num}`));
              return;
          }
          callback();
      };
  }

  static validFloat (form, precision) {
      return (rule, value, callback) => {
          const { nrule: { errMsg } } = rule;
          const reg = new RegExp(`^\\d+(\\.\\d{${precision}})?$`);
          if (!reg.test(value)) {
              callback(new Error(errMsg || `需整数或者${precision}位小数`));
              return;
          }
          callback();
      };
  }

  static validNum (form) {
      return (rule, value, callback) => {
          const { nrule: { errMsg } } = rule;
          if (isNaN(value) || value < 0 || `${value}`.indexOf(".") >= 0) {
              callback(new Error(errMsg || "请输入正整数"));
              return;
          }
          callback();
      };
  }

  static validNumMax (form, max) {
      return (rule, value, callback) => {
          const { nrule: { errMsg } } = rule;
          if (value > max) {
              callback(new Error(errMsg || `不能大于${max}`));
              return;
          }
          callback();
      };
  }

  static validComma (form) {
      return (rule, value, callback) => {
          const reg = /^[\w|\u4e00-\u9fa5]+$/g;
          const { nrule: { errMsg } } = rule;
          if (value && !reg.test(value)) {
              callback(new Error(errMsg || "不支持特殊字符"));
              return;
          }
          callback();
      };
  }

  static validString (form) {
      return (rule, value, callback) => {
          const reg = /^\w+$/g;
          const { nrule: { errMsg } } = rule;
          if (!reg.test(value)) {
              callback(new Error(errMsg || "必须为数字，字母，下划线"));
              return;
          }
          callback();
      };
  }

  static validUserName (form) {
      return (rule, value, callback) => {
          const reg = /^\w{6,15}$/;
          const { nrule: { errMsg } } = rule;
          if (!reg.test(value)) {
              callback(new Error(errMsg || "必须为6-15位字母、数字、下划线的组合"));
              return;
          }
          callback();
      };
  }

  static validName (form) {
      return (rule, value, callback) => {
          const { nrule: { errMsg } } = rule;
          if (value && !/^[A-Za-z\u4e00-\u9fa5]+$/.test(value)) {
              callback(new Error(errMsg || "必须为汉字、英文组合"));
              return;
          }
          callback();
      };
  }

  static validCompanyName (form) {
      return (rule, value, callback) => {
          const { nrule: { errMsg } } = rule;
          if (value && !/^[\u4e00-\u9fa5A-Z0-9()（）]+$/g.test(value)) {
              callback(new Error(errMsg || "公司名称必须为汉字、数字、大写字母、中文括号"));
              return;
          }
          callback();
      };
  }

  static stringLength (form, min, max) {
      return (rule, value, callback) => {
          if (value && value.toString) {
              value = value.toString();
          } else {
              value = "";
          }
          const leng = value.length || 0;
          const { nrule: { errMsg } } = rule;
          if (leng > max || leng < min) {
              callback(new Error(errMsg || `长度必须大于等于${min}小于等于${max}`));
              return;
          }
          callback();
      };
  }

  static validatePhone (form) {
      return (rule, value, callback) => {
          const { nrule: { errMsg } } = rule;
          if (value && !/^\d{7,12}$/.test(value)) {
              callback(new Error(errMsg || "号码格式错误"));
              return;
          }
          callback();
      };
  }

  static validateId (form) {
      return (rule, value, callback) => {
          const { nrule: { errMsg } } = rule;
          var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
          if (value && !reg.test(value)) {
              callback(new Error(errMsg || "validateId"));
              return;
          }
          callback();
      };
  }

  static validateNum (form) {
      return (rule, value, callback) => {
          const { nrule: { errMsg } } = rule;
          if (value && !/^[0-9]*$/.test(value)) {
              callback(new Error(errMsg || "必须为数字"));
              return;
          }
          callback();
      };
  }

  static compareDateLessThan (form, dateField1, dateField2) {
      return (rule, value, callback) => {
          const { nrule: { errMsg } } = rule;
          const value1 = form.model[dateField1];
          const value2 = form.model[dateField2];
          if (value1 && value2 && value1 >= value2) {
              callback(new Error(errMsg || "前一日期必须小于后一日期"));
              return;
          }
          callback();
      };
  }

  static validNumAndLetters () {
      return (rule, value, callback) => {
          const { nrule: { errMsg } } = rule;
          if (value && !/^[A-Za-z0-9]+$/.test(value)) {
              callback(new Error(errMsg || "必须为字母、数字或两者组合"));
              return;
          }
          callback();
      };
  }
}