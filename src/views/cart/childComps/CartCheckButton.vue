<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-12 08:37:17
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-12 15:23:07
 * @FilePath: \super-mall\src\views\cart\childComps\CartCheckButton.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="~assets/img/cart/yes.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #aaa;
}

.check {
  border-color: red;
  background-color: red;
}
</style>
