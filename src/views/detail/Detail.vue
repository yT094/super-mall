<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-05-14 10:05:37
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-07 14:03:31
 * @FilePath: \super-mall\src\views\detail\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="detail-root">
    <detail-nav-bar
      class="detail-nav"
      @topTitleClick="onTopTitleClick"
    ></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :goods-info="goodsInfo"
        @imageLoad="onImageLoad"
        ref="goods"
      />
      <!-- 尺码信息 -->
      <detail-param-info :param-info="goodsParamsInfo" ref="params" />
      <!-- 评论 -->
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <!-- 推荐 -->
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import Scroll from "components/common/scroll/Scroll";

import { getDetailData, getRecommend } from "network/detail";
import { Goods, GoodsParam, Shop } from "../../network/detail";
import { itemListenerMixin } from "@/common/mixin";
import { debounce } from "common/utils";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      goodsParamsInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
    };
  },
  watch: {
    goodsInfo: {
      handler(newVal) {
        this.goodsInfo = newVal;
      },
      // 立即处理, 进入页面就触发
      immediate: true,
      // 深度监听属性的变化
      deep: true,
    },
  },
  mixins: [itemListenerMixin],
  created() {
    // 1.拿到商品的iid
    this.iid = this.$route.params.iid;

    // 2.通过iid拿数据
    this.getDetailData();

    // 3.获取推荐数据
    this.getRecommend();

    // 4.获取各主题的 TopY 值(对给 this.themeTopYs赋值的操作进行防抖)
    this.getThemeTopY = debounce(() => {
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    }, 100);
  },
  destroyed() {
    // 取消全局事件的监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
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

        // 3.获取店铺信息
        this.shop = new Shop(data.shopInfo);

        // 4.获取商品的详情信息
        this.goodsInfo = data.detailInfo;

        // 5.获取商品的参数信息
        this.goodsParamsInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );

        // 6.获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
          console.log(" this.commentInfo", this.commentInfo);
        }
      });
    },

    // 获取推荐数据
    getRecommend() {
      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    },

    // 监听goodsItem 图片加载
    onImageLoad() {
      this.newRefresh();
      this.getThemeTopY();
    },

    // 顶部 item 的点击
    onTopTitleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
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
