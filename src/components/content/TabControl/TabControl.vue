<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="item.id"
      @click="itemClick(index)"
      :class="{ active: currentIndex === index }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      console.log(index);
      this.currentIndex = index;
      this.$emit('tabClick', index)
    },
  },
};
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
  background-color: #fff;

  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--color-height-text);
    span {
      // 让下划线宽于文字
      padding: 5px;
      // 给 span 加下划线
      border-bottom: 3px solid var(--color-tint);
    }
  }
}
</style>
