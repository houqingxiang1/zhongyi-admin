import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                
                {
                    path: '/question-data',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/QuestionData.vue'),
                    meta: { title: '题库数据' }
                },
                {
                    path: '/reference-data',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/ReferenceData.vue'),
                    meta: { title: '临证数据' }
                },
                {
                    path: '/tizhi-data',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BodyData.vue'),
                    meta: { title: '体质数据' }
                },
                {
                    path: '/treatment-data',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/TreatmentData.vue'),
                    meta: { title: '方剂数据' }
                },
                
                
                {
                    path: '/tiku',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/QuestionForm.vue'),
                    meta: { title: '题库' }
                },
                {
                    path: '/reference',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/ReferenceForm.vue'),
                    meta: { title: '临证参考' }
                },
                {
                    path: '/tizhi',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BodyForm.vue'),
                    meta: { title: '体质' }
                },
                {
                    path: '/treatment',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/TreatmentForm.vue'),
                    meta: { title: '方剂' }
                },
                {
                    path: '/treatment-category',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/TreatmentCategoryForm.vue'),
                    meta: { title: '方剂分类' }
                },
                {
                    path: '/treatment-category-data',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/TreatmentCategoryData.vue'),
                    meta: { title: '方剂分类' }
                },
                {
                    path: '/jingluo-data',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/JingluoData.vue'),
                    meta: { title: '经络' }
                },
                {
                    path: '/jingluo',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/JingluoForm.vue'),
                    meta: { title: '经络' }
                },
                {
                    path: '/xuewei-category',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/xueweiCategoryForm.vue'),
                    meta: { title: '穴位分类' }
                },
                {
                    path: '/xuewei-category-data',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/XueweiCategoryData.vue'),
                    meta: { title: '穴位分类列表' }
                },
                {
                    path: '/xuewei',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/XueweiForm.vue'),
                    meta: { title: '穴位' }
                },
                {
                    path: '/xuewei-data',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/XueweiData.vue'),
                    meta: { title: '穴位列表' }
                },
                {
                    path: '/food',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/FoodForm.vue'),
                    meta: { title: '药膳' }
                },
                {
                    path: '/food-data',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/FoodData.vue'),
                    meta: { title: '药膳列表' }
                },
                
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '/register',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Register.vue'),
            meta: { title: '注册' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
