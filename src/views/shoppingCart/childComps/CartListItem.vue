<template>
  <div class="shop-item">
    <div class="button">
      <CheckButton :ischecked="itemInfo.checked" @checkClick="changeCheck" />
    </div>

    <div class="item-img">
      <img :src="itemInfo.img" alt />
    </div>
    <div class="item-info">
      <div class="cart-item-title">{{itemInfo.title}}</div>
      <div class="cart-item-text">{{itemInfo.desc}}</div>

      <div class="item-bottom">
        <div class="item-price">¥{{itemInfo.price}}</div>
        <div class="item-count">✖{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/CheckButton";
export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  // data() {
  //   return {
  //     isChecked: this.itemInfo.checked
  //   };
  // },
  components: {
    CheckButton
  },
  methods: {
    changeCheck() {
      console.log("111");
      // this.itemInfo.checked = !this.itemInfo.checked;
      this.$store.commit("changeCheck", this.itemInfo);
      console.log(this.itemInfo);
    }
  }
};
</script>

<style scoped>
.shop-item {
  width: 100%;
  /* height: 100vm; */
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.button {
  padding-top: 50px;
}
.button img {
  width: 100px;
}
.item-img {
  width: 30%;
}
.cart-item img {
  width: 100%;
  height: 100%;
}
.item-info {
  width: 60%;
}
.cart-item-title,
.cart-item-text {
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-bottom {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.item-price {
  color: red;
}
</style>
