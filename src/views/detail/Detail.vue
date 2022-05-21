<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-05-14 10:05:37
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-05-21 14:26:20
 * @FilePath: \super-mall\src\views\detail\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :goods-info="goodsInfo" />
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

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
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      goodsInfo: {},
    };
  },
  created() {
    // 1.拿到商品的iid
    this.iid = this.$route.params.iid;
    console.log("Detail", this.iid);
    // 2.通过iid拿数据
    this.getDetailData();
  },
  methods: {
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
  },
};
</script>

<style lang="less" scoped></style>
