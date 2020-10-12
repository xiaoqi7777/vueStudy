import Vue from "vue";


// import "./plugins/cookies.js";
// import "./plugins/utils.js";
// import "./plugins/ajax.js";

// import moment from "moment";
// import "moment/locale/zh-cn";

// moment.locale("zh-cn");

Vue.config.devtools = process.env.NODE_ENV === "development";

const globalRequires = require.context("@/global", true, /\.\/([a-zA-Z0-9$_-]+)\/(.*)(\.js|\.vue)$/);
globalRequires.keys().forEach((item) => {
    const nameExec = /\.\/([a-zA-Z0-9$_-]+)\/(.*)(\.js|\.vue)$/.exec(item);
    if (nameExec && nameExec.length >= 2) {
        const directoryName = nameExec[1];
        switch (directoryName) {
        case "components":
            Vue.component(nameExec[2], globalRequires(item).default);
            break;
        case "directives":
        case "plugins":
        case "filters":
        case "mixins":
            // 加载当前的文件
            globalRequires(item);
            break;
        }
    }
});