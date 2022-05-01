<template>
  <div id="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  components: {},
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
#recommend {
  display: flex;
  text-align: center;
  font-size: 13px;

  .recommend-item {
    flex: 1;
    margin-top: 10px;
    padding: 10px 0 20px 0;
    border-bottom: 8px solid #eee;

    img {
      height: 65px;
      width: 65px;
      margin-bottom: 10px;
    }
  }
}
</style>
