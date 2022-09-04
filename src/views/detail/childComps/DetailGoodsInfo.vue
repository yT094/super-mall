<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-05-21 14:27:35
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-04 10:09:01
 * @FilePath: \super-mall\src\views\detail\childComps\DetailGoodsInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="c-start"></div>
      <div class="c-desc">{{ goodsInfo.desc }}</div>
      <div class="c-end"></div>
    </div>

    <div class="info-key">
      {{ goodsInfo.detailImage[0]["key"] }}
    </div>

    <div class="info-list">
      <img
        v-for="(item, index) in goodsInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  components: {},
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  created() {
    // console.log("goodsInfo.detailImage", this.goodsInfo);
  },
  methods: {
    imageLoad() {
      this.$emit("imageLoad");
    },
  },
};
</script>

<style lang="less" scoped>
#goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
  .info-desc {
    padding: 0 15px;

    .c-start {
      float: left;
    }

    .c-start,
    .c-end {
      position: relative;
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;

      &:before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
      }
    }

    .c-end {
      float: right;
      &:before {
        right: 0;
      }
    }

    .c-desc {
      padding: 15px 0;
      font-size: 14px;
    }
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list {
    padding: 0 5px;
    img {
      width: 100%;
    }
  }
}
</style>
