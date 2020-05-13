<template>
  <div class="goods">
    <GoodsListitem v-for="(item,index) in goods" :key="index" :goodsitem="item"></GoodsListitem>
  </div>
</template>

<script>
import GoodsListitem from "./GoodsListitem";
export default {
  name: "GoodList",
  // data(){
  //     return{
  //     }
  // },
  components: {
    GoodsListitem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.goods {
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  padding: 3px 3px 50px 3px;
}
</style>