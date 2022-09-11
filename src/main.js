/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-04-30 13:56:24
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-11 16:50:19
 * @FilePath: \super-mall\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
