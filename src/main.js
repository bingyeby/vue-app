//es6加载模块
import Vue from 'vue'
import Vuex from 'Vuex';
import VueRouter from 'vue-router';

import app from './basic/app.vue';

// import transition from "./transition"; // new vue(dom,component)

import father from "./father/father.vue";

import "./css/reset.css"

/*ele UI*/
import ElementUI from 'element-ui' // 引入element-ui
Vue.use(ElementUI); //全局使用ElementUI 就可以在其他.vue文件使用element-ui
import login from "./test_eleUI/login.vue"

/*transition*/
import t0 from "./transition/t0.vue";
import t1 from "./transition/t1.vue";
import t2 from "./transition/t2.vue";

import transitionAll from "./transition/transitionAll.vue"; // 包含三个动效

import transitionRouter from "./transition/transitionRouter.vue"; // 包含子路由

/*bs welcome*/
import bs from "./test_bs/index"
import welcome from "./test_bs/welcome"

/**/

// 全局注册 创建根实例1
// Vue.component('app', App);
// new Vue({
//     el: '#app'
// });

// 局部注册 创建一个vue实例,挂载在body上面
// new Vue({
//   el: '#app',
//   components: { app }
// });


// 全局注册 创建根实例2
// Vue.component('my-component', {
//   template: '<div>A simple custom component!</div>'
// });
// new Vue({
//   el: '#testComponent'
// });

// // 局部注册 插件实例
// var myComponent = {
//   template: '<div>A custom component!</div>'
// };
// new Vue({
//   el: '#testComponent',
//   components: {
//     myComponent// <my-component> 将只在父模板可用
//   }
// });


/**
 * C test with vue-router
 * 包含路由功能的页面
 * ---
 * 创建组件：创建单页面应用需要渲染的组件
 * 创建路由：创建VueRouter实例
 * 映射路由：调用VueRouter实例的map方法
 * 启动路由：调用VueRouter实例的start方法
 */
Vue.use(VueRouter);

const User = {
    template: `
    <div class="user">
      <h2>User {{ $route.params.userId }}</h2>
      <router-view></router-view>
    </div>
  `
};

const routes = [
    {path: '/father', component: father},
    {path: '/basic', component: app},
    {path: '/transition-all', component: transitionAll},
    {path: "/", redirect: "/transition/t0", alias: '/xxxx'}, /* 重定向 别名*/
    {
        path: '/user/:userId',
        name: 'user',
        component: User// component: Vue.extend({ template: "<div>111</div>" }),
    },
    {
        path: '/transition-router',
        name: "transition",
        component: transitionRouter,
        children: [
            {path: "", redirect: "t0"},
            {path: 't0', component: t0},
            {path: 't1', component: t1},
            {path: 't2', component: t2}
        ]
    },
    {path: "/login", name: "login", component: login},
    {path: "/bs", name: "bs", component: bs},
    {path: "/welcome", name: "welcome", component: welcome}
];


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({routes});// （缩写）相当于 routes: routes

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

const app2 = new Vue({
    el: "#main",
    router
});


// 方式2: new Vue({router}).$mount('#main');

// 现在，应用已经启动了！

