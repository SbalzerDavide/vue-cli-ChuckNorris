import axios from "axios";
const BASE_URL = "https://api.chucknorris.io/jokes/categories";

export default {
  install(Vue) {
    Vue.prototype.axios = axios;
    Vue.prototype.base_url = BASE_URL;
  }
};
