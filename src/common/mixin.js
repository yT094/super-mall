/*
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-09-04 16:30:44
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-09-04 16:51:11
 * @FilePath: \super-mall\src\common\mixin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { debounce } from "@/common/utils";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
    };
  },
  mounted() {
    // 1.监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh);

    this.itemImgListener = () => {
      // better-scroll 重新计算高度
      console.log("首页不应该打印");
      refresh();
    };

    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
};
