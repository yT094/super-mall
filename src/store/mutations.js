/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-11 21:22:18
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-12 15:22:04
 * @FilePath: \super-mall\src\store\mutations.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { ADD_COUNTER, ADD_TO_CART_LIST } from "./mutations-types";

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART_LIST](state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  },
};
