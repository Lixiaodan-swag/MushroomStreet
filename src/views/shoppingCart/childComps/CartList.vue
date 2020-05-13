<template>
  <div class="cart-item">
    <CartListItem v-for="(item,index) in cartList" :key="index" :itemInfo="item" />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";
export default {
  name: "CartList",

  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>
</style>
