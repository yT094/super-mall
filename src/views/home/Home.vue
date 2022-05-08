<template>
  <div id="home" class="wrapper">
    <!-- 导航栏 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <!-- tab control -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="onTabClick"
      class="tab-control"
      ref="tabControl1"
      v-show="isTabFixed"
    />

    <!-- 滚动区域 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="onContentScroll"
      :pull-up-load="true"
      @pullingUp="onLoadMore"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />

      <!-- 推荐 -->
      <recommend-view :recommends="recommends" />

      <!-- Feature -->
      <feature-view />

      <!-- tab control -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="onTabClick"
        ref="tabControl2"
      />

      <!-- 商品 -->
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="onBackClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 组件创建完成就发送网络请求
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 1.监听item中图片加载完成
    const refresh = this.debounce(this.$refs.scroll.refresh);
    this.$bus.$on("itemImageLoad", () => {
      // better-scroll 重新计算高度
      refresh();
    });
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    onTabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;

        case 2:
          this.currentType = "sell";
          break;

        default:
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    // 监听点击回到顶部事件
    onBackClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    // 监听内容滚动的位置
    onContentScroll(position) {
      // 1.决定 BackTop 是否显示
      const positionY = -position.y;
      this.isShowBackTop = positionY > 1000;

      // 2.决定tabControl是否吸顶（设置position: fixed）
      this.isTabFixed = positionY > this.tabOffsetTop;
    },

    // 监听加载更多事件
    onLoadMore() {
      this.getHomeGoods(this.currentType);
    },

    // 监听轮播图图片加载完成
    swiperImageLoad() {
      // 获取tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // 拿到 type 对应的数据
        this.goods[type].list.push(...res.data.list);
        // 页码加 1
        this.goods[type].page += 1;
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style lang="less" scoped>
#home {
  position: relative;
  padding-top: 44px;
  height: 100vh;
  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;

    background-color: var(--color-tint);
    color: #fff;
  }

  // 改变层级，设置相对定位即可
  .tab-control {
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
}
</style>
