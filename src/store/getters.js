/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-11 21:56:09
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-11 21:58:12
 * @FilePath: \super-mall\src\store\getters.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  cartLength(state) {
    return state.cartList.length;
  },
  cartList(state) {
    return state.cartList;
  },
};
