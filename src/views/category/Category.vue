<template>
  <div class="category-all">
    <div>
      <CategoryBar />
      <Navbar class="category">
        <div slot="center">商品分类</div>
      </Navbar>
    </div>
    <Scroll class="content left" ref="scroll" :click="true">
      <CategoryList :cate-list="cateList" @listClick="titleClick"></CategoryList>
    </Scroll>
    <Scroll class="content left" ref="scroll" :click="true" :probeType="3">
      <CategoryItem class="left" :list-item="listItem"></CategoryItem>
    </Scroll>
  </div>
</template>

<script>
import Navbar from "../../components/common/nav-bar/Navbar";

import Scroll from "../../components/common/better-scroll/BetterScroll";
import GoodList from "../../components/content/goods/GoodList";
import CategoryBar from "./childComps/CategoryBar";
import CategoryList from "./childComps/CategoryList";
import CategoryItem from "./childComps/CategoryItem";
import { getCategory, getCategoryItem } from "../../network/category";
export default {
  name: "Category",
  components: {
    Navbar,
    CategoryBar,
    CategoryList,
    CategoryItem,
    Scroll
  },
  data() {
    return {
      cateList: [],
      currentKey: 3627,
      listItem: []
    };
  },
  created() {
    this.getCategory();
    this.getCategoryItem(this.currentKey);
  },
  methods: {
    titleClick(maitKey) {
      console.log(maitKey);
      this.currentKey = maitKey;
      this.getCategoryItem(this.currentKey);
      // console.log(this.currentIndex);
    },
    //3个点击项

    getCategory() {
      getCategory().then(res => {
        console.log(res);
        this.cateList = res.data.category.list;
      });
    },
    getCategoryItem(maitKey) {
      getCategoryItem(maitKey).then(res => {
        this.listItem = res.data.list;
      });
    }
  }
};
</script>

<style scoped>
.category-all {
  height: 100vh;
  width: 100%;
}
.content {
  height: calc(100% - 150px);
}

.category {
  background: pink;
}
</style>