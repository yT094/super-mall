<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      // 这是 scroll 对象
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
  },
  mounted() {
    // 1.创建 BScroll 对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: true,
    });

    // 2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      console.log(this.probeType);
      console.log(position);
    });
  },
};
</script>

<style lang="less" scoped>
</style>
