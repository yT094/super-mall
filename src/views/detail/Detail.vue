<!--
 * @Author: ycs 1748780248@qq.com
 * @Date: 2022-05-14 10:05:37
 * @LastEditors: ycs 1748780248@qq.com
 * @LastEditTime: 2022-05-14 21:25:07
 * @FilePath: \super-mall\src\views\detail\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>详情页面 {{ iid }}</div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
    };
  },
  created() {
    console.log("Detail");
    this.iid = this.$route.params.iid;
    console.log(this.iid);
  },
  components: {},
};
</script>

<style lang="less" scoped></style>
