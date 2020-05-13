<template>
  <div>
    <Navbar class="back-image">
      <div slot="left" @click="backHome">
        <img src="../../../assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="titles">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="titles-item"
          :class="{active:index==currentIndex}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "../../../components/common/nav-bar/Navbar";

export default {
  name: "DetailBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    Navbar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      console.log(this.currentIndex);
      this.$emit("itemClick", index);
    },
    backHome() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.titles {
  display: flex;
}
.titles-item {
  flex: 1;
}
.back-image img {
  margin-top: 12px;
}
.active {
  color: hotpink;
}
</style>
