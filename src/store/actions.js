/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-11 21:22:10
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-11 21:33:41
 * @FilePath: \super-mall\src\store\actions.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { ADD_COUNTER, ADD_TO_CART_LIST } from "./mutations-types";

export default {
  addCart(context, payload) {
    // 1.查找之前数组中是否存在该商品
    let oldProduct = context.state.cartList.find(
      (item) => item.iid === payload.iid
    );

    // 2.判断oldProduct
    if (oldProduct) {
      context.commit(ADD_COUNTER, oldProduct);
    } else {
      // 初次赋值
      payload.count = 1;
      context.commit(ADD_TO_CART_LIST, payload);
    }
  },
};
