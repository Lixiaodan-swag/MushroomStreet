<template>
  <div class="check-button" :class="{active:ischecked}" @click="checkClick">
    <img src="../../../src/assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    ischecked: {
      type: Boolean
      // default: false
    }
  },
  methods: {
    checkClick() {
      console.log("111");
      this.$emit("checkClick");
    }
  }
};
</script>

<style scoped>
.check-button {
  /* width: 20px; */
  border-radius: 50%;
  border: 2px solid #aaa;
  /* background: white; */
  cursor: pointer;
}
.active {
  background: hotpink;
  border: 2px solid hotpink;
}
</style>

