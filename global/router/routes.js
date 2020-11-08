
import settings from '@/configs/settings';

let routeRequires = require.context('@/modules', true, /\.\/[a-zA-Z0-9$_-]+\/([^/]*).vue$/);

let rootRoutes = [];

let entryName = settings.entry;

if (!entryName) {
    throw new Error('settings必须要有entry配置');
}
routeRequires.keys().forEach((item) => {
    let nameExec = /\.\/([a-zA-Z0-9$_-]+)\/([^/]*).vue$/.exec(item);
    if (nameExec && nameExec.length >= 2) {
        let routeName = dynamicRoute((nameExec[1]));
        if (routeName === entryName && nameExec[2] === 'Index') {
            rootRoutes.push(
            {
                path: '/',
                name: 'entry',
                component: routeRequires(item).default,
            }
            );
        } else {
            let namePath = nameExec[2] === 'Index' ? '' : dynamicRoute(nameExec[2])
            rootRoutes.push({
                path: `/${routeName}${namePath ? '/' : ''}${namePath}`,
                name: `${routeName}${namePath ? '-' : ''}${namePath}`,
                component: routeRequires(item).default
            });
            if (routeName === 'fallback' && nameExec[2] === 'Index') {
                rootRoutes.push({
                    path: '*',
                    redirect: 'fallback'
                });
            }
        }
    }
});

// console.log('rootRoutes',rootRoutes)

export default [
    ...rootRoutes
];

function dynamicRoute(data){
    let rs = /^\$.+/.test(data)
    if(rs){
        return data.replace(/\$/g,()=>':')
    }else{
        return data
    }
}