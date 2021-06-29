import Vue from 'vue';
import Router, { RawLocation } from 'vue-router';

/* Home */
import Home from '@/views/home/home.vue';
import Table from '@/views/table/table.vue';

Vue.use(Router);

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirec·t` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 */
export const constantRouterMap = [
  {
    path: '/',
    name: 'LOL',
    hidden: true,
    component: Home
  }, {
    path: '/xiaohei',
    name: '小黑',
    hidden: true,
    component: Table
  }
];

export default new Router({
  routes: constantRouterMap
});
