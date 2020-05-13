<template>
  <div class="list">
    <div>热门推荐</div>
    <div class="list-item">
      <GoodListItem
        class="item"
        v-for="(item,index) in recommendInfo"
        :key="index"
        :goodsitem="item"
      />
    </div>
  </div>
</template>

<script>
import GoodListItem from "../../../components/content/goods/GoodsListitem";
export default {
  name: "DetailList",
  props: {
    recommendInfo: Array
  },
  components: {
    GoodListItem
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  flex-wrap: wrap;
  /* float: left; */
}
.item {
  width: 48%;
}
</style>
