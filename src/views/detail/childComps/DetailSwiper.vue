<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-05-15 10:14:30
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-05-15 11:29:56
 * @FilePath: \super-mall\src\views\detail\childComps\DetailSwiper.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item.id">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components: { Swiper, SwiperItem },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
