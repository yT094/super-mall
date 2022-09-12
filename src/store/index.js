/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-11 16:33:43
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-11 21:58:41
 * @FilePath: \super-mall\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

// 1.安装插件
Vue.use(Vuex);

// 2.创建 Store 对象
const state = {
  cartList: [],
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

// 3.挂载Vue实例上
export default store;
