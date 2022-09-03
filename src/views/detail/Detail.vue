<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-05-14 10:05:37
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-03 22:49:13
 * @FilePath: \super-mall\src\views\detail\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="detail-root">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :goods-info="goodsInfo" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

import Scroll from "components/common/scroll/Scroll";

import { getDetailData } from "network/detail";
import { Goods, Shop } from "../../network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      netData: {},
    };
  },
  watch: {
    goodsInfo: {
      handler(newVal, oldVal) {
        console.log("oldVal:", oldVal);
        console.log("newVal:", newVal);
        this.goodsInfo = newVal;
      },
      // 立即处理, 进入页面就触发
      immediate: true,
      // 深度监听属性的变化
      deep: true,
    },
  },

  created() {
    // 1.拿到商品的iid
    this.iid = this.$route.params.iid;
    console.log("Detail", this.iid);
    // 2.通过iid拿数据
    this.getDetailData();
  },
  methods: {
    // 获取DetailData
    getDetailData() {
      getDetailData(this.iid).then((res) => {
        const data = res.result;
        // 1.获取顶部轮播图的数据
        this.topImages = data.itemInfo.topImages;
        console.log("data:", data);

        // 2.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // console.log("Goods:", this.goods);

        // 3.获取店铺信息
        this.shop = new Shop(data.shopInfo);

        // 4.获取商品的详细信息
        this.goodsInfo = data.detailInfo;

        console.log("goodsInfo:", this.goodsInfo);
      });
    },
    // 防抖操作
    debounce(func, delay = 300) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
  },
};
</script>

<style lang="less" scoped>
#detail-root {
  position: relative;
  z-index: 1;
  height: 100vh;
  background-color: #fff;
  padding-top: 44px;

  .detail-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    // 内容的滚动区域
    height: calc(100% - 44px);
    background-color: #fff;
  }
}
</style>
