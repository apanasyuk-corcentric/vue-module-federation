import Vue from 'vue';
import VueRouter from 'vue-router';
import MicroFrontend from "@/components/MicroFrontend";

Vue.use(VueRouter);

const routes = [
  { name:"fmf", path: '/first-micro-frontend', component: MicroFrontend, props: {mfName:'firstApp', mfUrl:"localhost:3003", mfProps: { baseRoute:'/first-micro-frontend',  text :'Props from app shel for first mf'}} },
  { name:"smf", path: '/second-micro-frontend', component: MicroFrontend, props: {mfName:'secondApp', mfUrl:"localhost:3004", mfProps: { text :'Props from app shel for second mf'}} },
  { name:"reactmf", path: '/react-micro-frontend', component: MicroFrontend, props: {mfName:'reactApp', mfUrl:"localhost:3005", mfProps: { text :'Props from app shel for react mf'}} },
];

export default function initRouter() {
  return new VueRouter({
    mode: 'history',
    routes,
  });
}
