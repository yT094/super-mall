<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-12 06:42:47
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-12 09:40:10
 * @FilePath: \super-mall\src\views\cart\childComps\cartList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <cart-list-item
      :cart-list-item="item"
      v-for="(item, index) in cartList"
      :key="index + 'A'"
    />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
