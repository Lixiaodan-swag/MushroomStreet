<template>
  <div class="category-bar">
    <!-- <Navbar class="search"> -->
    <div class="left">
      <i class="iconfont icon-dunpai"></i>
      <input class="ipt" type="text" placeholder="购物街" />
      <i class="iconfont icon-shuaxin"></i>
    </div>
    <!-- <div class="right">

    </div>-->
    <!-- </Navbar> -->
  </div>
</template>

<script>
import Navbar from "../../../components/common/nav-bar/Navbar";
export default {
  name: "CategoryBar",
  components: {
    Navbar
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
.category-bar {
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 10;
}
.left {
  display: flex;
  width: 100%;
  padding: 5px;
  background: white;
}
.ipt {
  width: 80%;
  height: 35px;
  outline: none;
  border: none;
  background: #eaecee;
}
.icon-dunpai {
  background: #eaecee;
  height: 35px;
  line-height: 35px;
  vertical-align: middle;
}
.icon-shuaxin {
  height: 35px;
  line-height: 35px;
  vertical-align: middle;
  padding-left: 10px;
}
</style>
