<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-04-30 18:51:34
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-12 16:34:49
 * @FilePath: \super-mall\src\views\cart\Cart.vue
 * @Description: 购物车首页
-->
<template>
  <div id="cart">
    <!-- 导航栏 -->
    <nav-bar class="t-cart-nav">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>

    <!-- 列表 -->
    <scroll class="t-content" ref="scroll">
      <cart-list :cart-list="cartList" />
    </scroll>

    <!-- 底部汇总 -->
    <cart-bottom-bar class="t-cart-bottom" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style lang="less" scoped>
#cart {
  height: 100vh; // 可视区域
  z-index: 1;
  padding-top: 44px; // 必须加,否则nav-bar将遮挡滚动内容

  .t-cart-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;

    background-color: var(--color-tint);
    color: #fff;
  }
  .t-content {
    height: calc(100% - 44px - 40px); // 滚动区域
  }
  // .t-cart-bottom {
  //   position: fixed;
  //   bottom: 49px;
  //   left: 0;
  //   right: 0;
  //   z-index: 9;

  //   background-color: var(--color-tint);
  //   color: #fff;
  // }
}
</style>
