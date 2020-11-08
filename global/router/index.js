import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes.js';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// import { globalRoutes } from '../../modules';


import settings from '@/configs/settings.js';

// 路由进度条动画
NProgress.configure({ showSpinner: false });

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

const router = new Router({
    base: settings.routeBase || '/',
    mode: settings.routeMode || 'history',
    routes
    // routes: globalRoutes.concat(routes)
});

export default router;
