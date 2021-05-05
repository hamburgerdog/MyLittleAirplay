import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '../views/main/Main.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Main },
];

const router = new VueRouter({
  routes,
});

export default router;
