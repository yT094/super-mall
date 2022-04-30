<template>
  <div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
};
</script>

<style lang="less" scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  /* 文字居中对齐 */
  text-align: center;

  img {
    width: 24px;
    height: 24px;
  }
}
</style>
