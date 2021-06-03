/*
 * @Author: your name
 * @Date: 2021-06-03 10:27:28
 * @LastEditTime: 2021-06-03 10:55:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \the_ground\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/rest.css";
import "./assets/css/global.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
