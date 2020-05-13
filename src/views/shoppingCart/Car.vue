<template>
  <div class="car">
    <nav-bar>
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <BetterScroll class="better-scroll" :click="true">
      <CartList />
    </BetterScroll>
    <CartBottomBar />
  </div>
</template>

<script>
import NavBar from "../../components/common/nav-bar/Navbar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
import BetterScroll from "../../components/common/better-scroll/BetterScroll";
import { mapGetters } from "vuex";
export default {
  name: "Car",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    BetterScroll
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList"
    })
  }
};
</script>

<style scoped>
.car {
  height: 100vh;
}
.nav-bar {
  background: pink;
}
.better-scroll {
  height: calc(100% - 44px - 60px);
}
</style>