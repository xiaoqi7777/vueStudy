let routeRequires = require.context('@/modules', true, /\.\/[a-zA-Z0-9$_-]+\/routes.js$/);

let moduleRoutes = [];

routeRequires.keys().forEach((item) => {
    let route = routeRequires(item);
    moduleRoutes = moduleRoutes.concat(route.default);
});


let modulesRequires = require.context('@/modules', true, /\.\/[a-zA-Z0-9$_-]+\/store.js$/);

let moduleStores = {};
modulesRequires.keys().forEach((item) => {
    let nameExec = /\.\/([a-zA-Z0-9$_-]+)\/store.js$/.exec(item);
    if (nameExec && nameExec.length >= 2) {
        moduleStores[nameExec[1]] = modulesRequires(item).default;
    }
});

let globalModuleRequires = require.context('@/modules', true, /\.\/[a-zA-Z0-9$_-]+\/store.js$/);

globalModuleRequires.keys().forEach((item) => {
    let nameExec = /\.\/([a-zA-Z0-9$_-]+)\/store.js$/.exec(item);
    if (nameExec && nameExec.length >= 2) {
        moduleStores[nameExec[1]] = globalModuleRequires(item).default;
    }
});
export {
    moduleRoutes,
    moduleStores
};
