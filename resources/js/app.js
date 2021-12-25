import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios);

import App from './components/App.vue';
import StoreCategory from './components/StoreCategory.vue';
import Category from './components/Category.vue';
import UpdateCategory from './components/UpdateCategory.vue';

const routes = [
    {
        path: "/",
        name: "Category",
        component: Category
    },
    {
        path: "/StoreCategory",
        name: "StoreCategory",
        component: StoreCategory
    },
    {
        path: "/UpdateCategory/:id",
        name: "UpdateCategory",
        component: UpdateCategory
    },
];

const router = new VueRouter({mode:'history',routes:routes});

require('./bootstrap');

window.Vue = require('vue').default;



new Vue(Vue.util.extend({router},App)).$mount('#app');


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

