<template>
  <div class="category-item left">
    <!-- <Scroll class="content left" ref="scroll" :click="true" :probeType="3"> -->
    <div v-for="(item,index) in listItem" :key="index" class="item-list">
      <img :src="item.image" alt />
      <div>{{item.title}}</div>
    </div>
    <TabControl
      class="tab-control"
      :titles="['综合','新品','销量']"
      ref="TabControl"
      @tabClick="tabClick"
    />
    <GoodList :goods="goods[currentType].list" />
    <!-- </Scroll> -->
  </div>

  <!-- <div class="scroll-list-wrap">
    <cube-scroll ref="scroll" :data="items" :options="options">
      <div v-for="(item,index) in listItem" :key="index" class="item-list">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </div>
    </cube-scroll>
  </div>-->
</template>

<script>
import TabControl from "../../../components/content/tabControl/TabControl";
import { getHomeMultidata, getHomegood } from "../../../network/home";
import GoodList from "../../../components/content/goods/GoodList";
import Scroll from "../../../components/common/better-scroll/BetterScroll";
export default {
  name: "CategoryItem",
  props: {
    listItem: Array
  },
  components: {
    TabControl,
    GoodList,
    Scroll
  },
  data() {
    return {
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  created() {
    this.getHomeMultiData();
    this.getHomegood("pop");
    this.getHomegood("new");
    this.getHomegood("sell");
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.TabControl.currentType = index;
    },
    getHomeMultiData() {
      getHomeMultidata().then(res => {
        this.lists = res.data.banner.list;
        this.shoplists = res.data.shoplist.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomegood(type) {
      const page = this.goods[type].page + 1;
      getHomegood(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list);
          // console.log(res);
          this.goods[type].page += 1;
          // this.$refs.scroll.finishpullup();
        })
        .catch(err => {
          // this.$refs.scroll.finishpullup();
        });
    }
  }
};
</script>

<style scoped>
/* .scroll-list-wrap{
  height: 350px
} */

.category-item {
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}
.content {
  height: calc(100% - 150px);
}
.item-list {
  width: 33%;
}
.item-list img {
  width: 100%;
}
.tab-control {
  padding: 10px 0px;
}
</style>
