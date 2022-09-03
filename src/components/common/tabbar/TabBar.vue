<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-04-30 16:58:48
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-05-31 19:19:04
 * @FilePath: \super-mall\src\components\common\tabbar\TabBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style lang="less" scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  /* 底部显示 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* 有平滑的阴影效果 */
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>

