/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-04 16:30:44
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-11 15:11:41
 * @FilePath: \super-mall\src\common\mixin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { debounce } from "@/common/utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null,
    };
  },
  mounted() {
    // 1.监听item中图片加载完成
    this.newRefresh = debounce(this.$refs.scroll.refresh);

    // better-scroll 重新计算高度
    this.itemImgListener = () => {
      this.newRefresh();
    };

    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
};

export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
    };
  },
  methods: {
    // 监听点击回到顶部事件
    onBackClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
};
