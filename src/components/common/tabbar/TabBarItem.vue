<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active: isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
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

  .active {
    color: red;
  }
}
</style>
