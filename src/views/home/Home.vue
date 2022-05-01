<template>
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      // console.log(res);
      // this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style lang="less" scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
