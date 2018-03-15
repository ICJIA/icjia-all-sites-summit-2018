// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import App from "./App";
import router from "./router";
import bootstrap from "bootstrap";
import $ from "jquery";

window.jQuery = $;
window.$ = $;

let VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
import Meta from "vue-meta";
Vue.use(Meta);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
