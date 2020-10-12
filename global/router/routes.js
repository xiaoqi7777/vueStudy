
import settings from '@/configs/settings';

let routeRequires = require.context('@/modules', true, /\.\/[a-zA-Z0-9$_-]+\/([^/]*).vue$/);

let rootRoutes = [];

let entryName = settings.entry;

if (!entryName) {
    throw new Error('settings必须要有entry配置');
}
console.log('==============>',routeRequires.keys())
routeRequires.keys().forEach((item) => {
    let nameExec = /\.\/([a-zA-Z0-9$_-]+)\/([^/]*).vue$/.exec(item);
    if (nameExec && nameExec.length >= 2) {
        let routeName = (nameExec[1]);
        console.log('routeName',routeName,nameExec[2],entryName)
        if (routeName === entryName && nameExec[2] === 'Index') {
            rootRoutes.push({
                path: '/',
                name: 'entry',
                component: routeRequires(item).default,
            });
        } else {
            let namePath = nameExec[2] === 'Index' ? '' : nameExec[2]
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

console.log('rootRoutes',rootRoutes)

export default [
    ...rootRoutes
];

