<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-04-30 13:56:24
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-05-15 11:16:49
 * @FilePath: \super-mall\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>

<style lang="less" scoped>
@import "./assets/css/base.css";
</style>
