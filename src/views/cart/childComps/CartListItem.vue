<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-12 06:42:19
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-12 15:25:32
 * @FilePath: \super-mall\src\views\cart\childComps\cartListItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="cart-list-item">
    <div class="m-left">
      <cart-check-button
        :isChecked="cartListItem.checked"
        @click.native="checkClick"
      />
    </div>
    <div class="m-right">
      <div class="t-image">
        <img :src="cartListItem.image" alt="" />
      </div>
      <div class="t-info">
        <div class="title">{{ cartListItem.title }}</div>
        <div class="desc">{{ cartListItem.desc }}</div>
        <div class="bottom">
          <div class="price">￥{{ cartListItem.price }}</div>
          <div class="count">x{{ cartListItem.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckButton from "./CartCheckButton.vue";
export default {
  name: "CartListItem",
  components: { CartCheckButton },
  props: {
    cartListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    checkClick() {
      // checked 属性在 vuex 中定义; 该值也应该通过模型来实时显示
      this.cartListItem.checked = !this.cartListItem.checked;
    },
  },
};
</script>

<style lang="less" scoped>
#cart-list-item {
  display: flex;
  .m-left {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .m-right {
    width: 86%; // 必须写,否则将根据内容展示
    display: flex;
    .t-image {
      flex: 1;
      padding: 5px;
    }
    .t-info {
      overflow: hidden; // 必须写,否则将占满整行
      font-size: 17px;
      color: #333;
      padding: 5px 10px;
      .title,
      .desc {
        //  内容会被修剪，并且其余内容不可见
        overflow: hidden;
        // nowrap 和 normal 一样，连续的空白符会被合并。但文本内的换行无效。
        white-space: nowrap;
        // 显示 ..., 需要搭配 overflow, white-space 两个属性
        text-overflow: ellipsis;
      }

      .desc {
        font-size: 14px;
        color: #666;
        margin-top: 10px;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        color: orangered;
      }
    }

    img {
      width: 80px;
      height: 100px;
      border-radius: 5px;
    }
  }
}
</style>
