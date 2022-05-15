<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-05-02 09:51:14
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-05-14 21:16:08
 * @FilePath: \super-mall\src\components\content\goods\GoodsListItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="goods-item" @click="onItemClick">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 图片加载完成事件
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    // 监听GoodsItem的点击
    onItemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style lang="less" scoped>
.goods-item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;

  img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;

    p {
      overflow: hidden; //超出的文本隐藏
      text-overflow: ellipsis; //溢出用省略号显示
      white-space: nowrap; //溢出不换行
      margin-top: 3px;
    }

    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }

    .collect {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
      }
    }
  }
}
</style>
