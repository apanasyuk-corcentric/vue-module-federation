import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../components/App.vue';
import MicroFrontend from "@/components/MicroFrontend";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
  { path: '/first-micro-frontend', component: MicroFrontend, props: {mfName:'firstApp', mfUrl:"localhost:3003", mfProps: { baseRoute:'/first-micro-frontend',  text :'props from app shel for first mf'}} },
  { path: '/second-micro-frontend', component: MicroFrontend, props: {mfName:'secondApp', mfUrl:"localhost:3004", mfProps: { text :'props from app shel for second mf'}} },
];

export default function initRouter() {
  return new VueRouter({
    mode: 'history',
    routes,
  });
}
