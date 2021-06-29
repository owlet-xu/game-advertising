
import Vue from 'vue';
import App from './App.vue';

import 'babel-polyfill';
import Es6Promise from 'es6-promise';
Es6Promise.polyfill();

import ElementUI from 'element-ui';
import config from '@/utils/appconfig';
import store from './store';
import router from './router';


import 'element-ui/lib/theme-chalk/index.css';

config(store).then(() => {
  Vue.use(ElementUI);
  new Vue({
    store,
    router,
    render: (h: any) => h(App)
  }).$mount('#app');
});
