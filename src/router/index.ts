import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Billing from '@/views/Billing.vue';
import Charts from '@/views/Charts.vue';
import Settings from '@/views/Settings.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'/billing'
  },
  {
    path: '/billing',
    name: 'Billing',
    component: Billing
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
];

const router = new VueRouter({
  routes
});

export default router;
