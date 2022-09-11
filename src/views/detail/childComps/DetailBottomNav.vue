<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-11 08:55:30
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-11 17:55:52
 * @FilePath: \super-mall\src\views\detail\childComps\DetailBottomNav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="bottom-nav">
    <div class="v-left">
      <div class="service">
        <i class="icon"></i>
        <span class="text">客服</span>
      </div>
      <div class="shop">
        <i class="icon"></i>
        <span class="text">店铺</span>
      </div>
      <div class="collect">
        <i class="icon"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="v-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomNav",
  props: {},
  methods: {
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style lang="less" scoped>
#bottom-nav {
  // display: flex;
  position: fixed;
  background: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;

  display: flex;
  font-size: 14px;
  // 客服,店铺,收藏 居中
  text-align: center;
  // 添加过渡效果
  box-shadow: 0 -0.04rem 0.4rem gray;

  .v-left {
    // 平分
    flex: 1;
    display: flex;
    .icon {
      display: block;
      width: 16px;
      height: 16px;
      // 精灵图展示
      background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
      // 图标居中
      margin: 2px auto;
    }
    > div {
      flex: 1;
      border-right: 0.04rem solid rgba(128, 128, 128, 0.2);
    }

    .service {
      .icon {
        background-position: 0 -38px;
      }
    }
    .shop {
      .icon {
        background-position: 0 -72px;
      }
    }
  }

  .v-right {
    // 平分
    flex: 1;
    display: flex;
    > div {
      flex: 1;
      // 加入购物车居中
      line-height: 49px;
    }
    .cart {
      background-color: rgb(255, 174, 0);
    }
    .buy {
      background-color: var(--color-tint);
      color: white;
    }
  }
}
</style>
