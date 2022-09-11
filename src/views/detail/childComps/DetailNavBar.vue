<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-05-15 08:55:55
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-08 13:08:04
 * @FilePath: \super-mall\src\views\detail\childComps\DetailNavBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="detail">
    <nav-bar class="detail-nav">
      <div slot="left" class="v-left" @click="onBackClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="v-center">
        <div
          class="r-item"
          v-for="(item, index) in titles"
          :key="item.index"
          :class="{ active: index === currentIndex }"
          @click="onItemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: { NavBar },
  data() {
    return {
      iid: null,
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  created() {},

  methods: {
    // 监听item的点击
    onItemClick(index) {
      this.currentIndex = index;
      this.$emit("topTitleClick", this.currentIndex);
    },
    // 监听返回的点击
    onBackClick() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.detail-nav {
  .v-center {
    display: flex;
    font-size: 13px;
    .r-item {
      flex: 1;
    }

    .active {
      color: var(--color-high-text);
    }
  }

  .v-left {
    img {
      margin-top: 10px;
    }
  }
}
</style>
