import Vue from "vue";
import VueRouter from "vue-router";
import Routes from "./router/index";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
});

Vue.use(BootstrapVue);

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
