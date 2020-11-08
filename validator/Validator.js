// import { Rules } from "./Rules";
import { Rule } from "./Rule";

export class Validator {
    constructor (injectRules) {
        this._form = null;
        this._validators = {};
        this._Rules = injectRules;
    }

    init (form) {
        if (form) {
            this._form = form;
            this.injectForm();
        }
    }

    get form () { return this._form; }

    addRule (fieldName, rule) {
        if (!this.validators[fieldName]) {
            this.validators[fieldName] = [];
        }
        const validators = this.validators[fieldName];
        const validate = this._Rules[rule.validateName];
        if (!validate) {
            console.log("Rules类添加规则先。");
            return;
        }
        let ruleFun = validate;
        if (this.form) {
            ruleFun = validate.apply(this, [this.form, ...rule.args]);
        }
        const { type, trigger, ruleId } = rule;
        const item = { validator: ruleFun, ruleId, type, trigger, nrule: rule, form: !!this.form };
        validators.push(item);
        return ruleId;
    }

    addRules (fieldName, rules) {
        const n = rules.length;
        const ruleIds = [];
        for (let i = 0; i < n; i++) {
            const rule = rules[i];
            const ruleId = this.addRule(fieldName, rule);
            if (ruleId) {
                ruleIds.push(ruleId);
            }
        }
        return ruleIds;
    }

    removeRule (ruleId) {
        Object.keys(this.validators).forEach((key) => {
            const rules = this.validators[key];
            const index = rules.findIndex(i => {
                return i.ruleId === ruleId;
            });
            if (index >= 0) {
                rules.splice(index, 1);
            }
        });
    }

    injectForm () {
        Object.keys(this.validators).forEach((key) => {
            const validators = this.validators[key];
            validators.forEach(item => {
                if (!item.form) {
                    const { validator, nrule } = item;
                    item.form = !!this.form;
                    item.validator = validator.apply(this, [this.form, ...nrule.args]);
                }
            });
        });
    }

    createRulesFromObj (rulesObj) {
        Object.keys(rulesObj).forEach(key => {
            const rules = [];
            const n = rulesObj[key].length;
            for (let i = 0; i < n; i++) {
                const ruleObj = rulesObj[key][i];
                rules[i] = new Rule(ruleObj);
            }
            this.addRules(key, rules);
        });
    }

    get validators () { return this._validators; }
}
