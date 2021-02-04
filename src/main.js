import Vue from "vue";
import App from "./App.vue";
import AxiosPlugin from "./plugin/axiosPlugin.js";

Vue.use(AxiosPlugin);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
