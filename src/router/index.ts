import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Billing from '@/views/Billing.vue';
import Charts from '@/views/Charts.vue';
import Settings from '@/views/Settings.vue';
import NotFound from '@/views/NotFound.vue';
import AddBilling from '@/views/AddBilling.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Billing',
    component: Billing
  },
  {
    path: '/addBilling',
    name: 'AddBilling',
    component: AddBilling
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
