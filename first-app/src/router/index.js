import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue';
import Grid from "@/Grid";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
  { path: '/grid', component: Grid },
];

export default function initRouter(baseRoute) {
  return new VueRouter({
    mode: 'history',
    base: baseRoute || "",
    routes ,
  });
}
