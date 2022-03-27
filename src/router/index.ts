import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import AddBilling from '@/views/AddBilling.vue';
import AddIcon from '@/views/AddIcon.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import Charts from '@/views/Charts.vue';
import DeleteBilling from '@/views/DeleteBilling.vue';


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
    path: '/addIcon',
    name: 'AddIcon',
    component: AddIcon
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
    path: '/charts',
    name: 'charts',
    component:Charts
  },
  {
    path: '/delete/:index',
    name: 'DeleteBilling',
    component: DeleteBilling
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
