<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BScroll from "@better-scroll/core";
// import Pullup from "@better-scroll/pull-up";
// BScroll.use(Pullup);

import BS from "better-scroll";

export default {
  name: "BetterScroll",
  data() {
    return {
      bs: null
    };
  },
  props: {
    click: {
      type: Boolean,
      default: false
    },
    pullupLoad: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.bs = new BS(".wrapper", {
      click: this.click,
      pullUpLoad: this.pullupLoad,
      probeType: this.probeType
      // mouseWheel: true,
      // disableMouse: false,
      // disableTouch: false
    });
    //监听滚动事件
    this.bs.on("scroll", position => {
      // console.log(position);
      this.$emit("bascroll", position);
    });
    // this.scroll.refresh();
    //监听上拉事件
    this.bs.on("pullingUp", () => {
      console.log("上拉加载");
      this.$emit("pullup");
      // this.bs.finishPullUp();
      // bs.finishPullUp
    });
  },
  methods: {
    finishpullup() {
      this.bs.finishPullUp();
    }
  }
};
</script>
<style scoped>
</style>