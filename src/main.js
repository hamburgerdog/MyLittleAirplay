import Vue from 'vue';
import { Lazyload } from 'vant';

import base from '@/api/base';
import App from './App.vue';
import router from './router';
import global_ from './Global.vue';
import api from './api';

// 全局注册
Vue.use(Lazyload);
Vue.prototype.$global = global_;
Vue.prototype.$base = base;
Vue.prototype.$eventBus = new Vue();
Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
