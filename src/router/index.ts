import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Settings from '@/views/Settings.vue';
import NotFound from '@/views/NotFound.vue';
import AddBilling from '@/views/AddBilling.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/statistics',
  },
  {
    path: '/addBilling',
    name: 'AddBilling',
    component: AddBilling
  },
  {
    path: '/labels',
    name: 'Labels',
    component: Labels
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
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
