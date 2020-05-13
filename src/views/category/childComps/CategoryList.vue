<template>
  <div class="category-list">
    <!-- <BetterScroll class="better-scroll" ref="scroll" :click="true"> -->
    <ul>
      <li
        v-for="(item,index) in cateList"
        :key="index"
        @click="listClick(item,index)"
        class="list-item"
        :class="{active:index==currentIndex}"
      >{{item.title}}</li>
    </ul>
    <!-- </BetterScroll> -->
  </div>
</template>

<script>
import BetterScroll from "../../../components/common/better-scroll/BetterScroll";
export default {
  name: "CategoryList",
  components: {
    BetterScroll
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    listClick(item, index) {
      this.currentIndex = index;
      // console.log(item.maitKey);
      this.$emit("listClick", item.maitKey);
    }
  },
  props: {
    cateList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.category-list {
  width: 30vw;
}
ul {
  width: 100%;
}
li {
  height: 50px;
  line-height: 50px;
  vertical-align: center;
  text-align: center;
}
.list-item {
  background: #ccc;
}
.active {
  background: white;
  border-left: 4px solid pink;
}
</style>
