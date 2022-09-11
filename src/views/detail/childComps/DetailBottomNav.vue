<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-11 08:55:30
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-11 11:13:55
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
      <div class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomNav",
  props: {},
};
</script>

<style lang="less" scoped>
#bottom-nav {
  display: flex;
  position: fixed;
  background-color: #fff;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 49px;
  // 文字居中显示
  text-align: center;
  font-size: 14px;
  box-shadow: 0 -0.04rem 0.4rem gray;

  .v-left {
    display: flex;
    flex: 1;

    > div {
      flex: 1;
      border-right: 0.04rem solid rgba(128, 128, 128, 0.2);
    }
    .icon {
      display: block;
      background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
      width: 16px;
      height: 16px;
      margin: 0.12rem auto;
    }
    .service {
      .icon {
        background-position: 0 -2.4rem;
      }
    }
    .shop {
      .icon {
        background-position: 0 -4.5rem;
      }
    }
  }
  .v-right {
    display: flex;
    flex: 1;

    > div {
      flex: 1;
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
