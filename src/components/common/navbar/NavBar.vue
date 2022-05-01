<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  // 下面三行代码，让文字处于盒子中心位置
  height: 44px;
  line-height: 44px;
  text-align: center;
  // 有平滑的阴影效果 
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  .left,
  .right {
    width: 44px;
  }
  .center {
    flex: 1;
  }
}
</style>

