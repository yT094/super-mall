<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-12 06:43:08
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-12 16:54:57
 * @FilePath: \super-mall\src\views\cart\childComps\CartBottomBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="cart-bottom-bar">
    <div class="r-check-all">
      <cart-check-button :isChecked="checkAll" ref="checkButtonRef" />全选
    </div>
    <div class="r-calc">总计：{{ totalPrice }}</div>
    <div class="r-buy">去购买({{ totalLength }})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartCheckButton from "./CartCheckButton.vue";
export default {
  name: "CartBottomBar",
  components: {
    CartCheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
      );
    },
    totalLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    // 是否全选: 显示状态; 点击全选
    checkAll() {
      if (this.cartList.length === 0) return false;
      // 方法一: 使用find
      return !this.cartList.find((item) => !item.checked); // 找到就结束查找

      // 方法二: 使用filter
      // return !this.cartList.filter((item) => !item.checked).length; // 也可以获取数组的长度

      // 方法三: 普通遍历
      // for (let item of this.cartList) {
      //   if (!item.checked) {
      //     return false;
      //   }
      // }
      // return true;
    },
  },
};
</script>

<style lang="less" scoped>
#cart-bottom-bar {
  display: flex;
  background-color: rgb(228, 228, 228);
  text-align: center;
  font-size: 0.7rem;
  position: relative;
  height: 40px;
  .r-check-all {
    display: flex;
  }
  .r-calc {
    flex: 1;
  }
  .r-buy {
    width: 80px;
    background-color: #f03;
    color: white;
  }
}
</style>
