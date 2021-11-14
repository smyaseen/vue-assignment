import Vue from "vue";
import VueRouter from "vue-router";
import Routes from "./router/index";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Vuex from "vuex";
import App from "./App.vue";
import vueStore from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
});

Vue.use(BootstrapVue);

Vue.use(Vuex);

const store = new Vuex.Store(vueStore);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
  store: store,
}).$mount("#app");
