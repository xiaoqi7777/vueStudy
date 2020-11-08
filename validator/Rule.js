import cloneDeep from "lodash/cloneDeep";

export class Rule {
    static ruleId = 1000;

    constructor (ruleOpt) {
        ruleOpt = ruleOpt || {};
        this.ruleId = Rule.ruleId++;
        this.type = ruleOpt.type;
        this.validateName = ruleOpt.validateName;
        this.args = ruleOpt.args || [];
        this.trigger = ruleOpt.trigger;
        this.errMsg = ruleOpt.errMsg;
    }

    clone () {
        const rule = new Rule();
        rule.type = this.type;
        rule.validateName = this.validateName;
        rule.args = cloneDeep(this.args);
        rule.trigger = this.trigger;
        rule.errMsg = this.errMsg;
        return rule;
    }

    update (ruleOpt = {}) {
        Object.assign(this, ruleOpt);
        return this;
    }
}