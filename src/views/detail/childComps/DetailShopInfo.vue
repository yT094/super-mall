<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-05-15 10:14:30
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-05-15 21:13:32
 * @FilePath: \super-mall\src\views\detail\childComps\DetailSwiper.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" />
      <span class="p-title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left shop-middle-item">
        <div class="info-sells">
          <div class="sells-count">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{ shop.goodsCount }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-right shop-middle-item">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  components: {},
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style lang="less" scoped>
#shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
  .shop-top {
    display: flex;
    align-items: center;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
    .p-title {
      margin-left: 10px;
    }
  }

  .shop-middle {
    display: flex;
    .shop-middle-item {
      flex: 1;
    }
    .shop-middle-left {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      color: #333;
      text-align: center;
      border-right: 1px solid rgba(0, 0, 0, 0.1);

      .sells-count,
      .goods-count {
        font-size: 18px;
      }

      .sells-text,
      .goods-text {
        margin-top: 10px;
        font-size: 12px;
      }
    }

    .shop-middle-right {
      font-size: 13px;
      color: #333;

      table {
        width: 120px;
        margin-left: 30px;
        td {
          padding: 5px 0;
        }
      }
      .score-better,
      .better-more {
        color: #f13e3a;
      }
    }
  }

  .shop-bottom {
    text-align: center;
    margin-top: 10px;

    .enter-shop {
      display: inline-block;
      font-size: 14px;
      background-color: #f2f5f8;
      width: 150px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 10px;
    }
  }
}
</style>
