<template>
  <div class="bottom-bar">
    <div class="bar-left bar-item">
      <div>
        <span class="icon service"></span>
        <span class="text">客服</span>
      </div>
      <div>
        <span class="icon shop"></span>
        <span class="text">店铺</span>
      </div>
      <div>
        <span class="icon select"></span>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right bar-item">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  methods: {
    addCart() {
      this.$emit("addCart");
    }
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background: white;
  height: 60px;
  display: flex;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item div {
  flex: 1;
}
.bar-left {
  text-align: center;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 0 auto;
  background: url(../../../assets/img/detail/detail_bottom.png) 0 0/100%;
}
.bar-left .service {
  background-position: 0px -54px;
}
.bar-left .shop {
  background-position: 0px -99px;
}
.bar-left .select {
  background-position: 0px -149px;
}
.bar-right {
  line-height: 60px;
  font-size: 14px;
  text-align: center;
}
.bar-right .cart {
  background: #ffe818;
  color: #333;
}
.bar-right .buy {
  background: #ff6799;
  color: #fff;
}
</style>
