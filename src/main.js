import Vue from 'vue';
import { Lazyload, Toast } from 'vant';
import animate from 'animate.css';

import base from '@/api/base';
import App from './App.vue';
import router from './router';
import global_ from './Global.vue';
import api from './api';

// 全局注册
Vue.use(Lazyload);
Vue.use(Toast);
Vue.use(animate);
Vue.prototype.$global = global_;
Vue.prototype.$base = base;
Vue.prototype.$eventBus = new Vue();
Vue.prototype.$api = api;

Vue.config.productionTip = false;
const errorHandler = () => {
  Toast.loading({
    message: '资源加载中',
    duration: 1000,
  });
};
Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (err) => { errorHandler(err); };

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
