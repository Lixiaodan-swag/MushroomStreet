<template>
  <div id="home">
    <Navbar class="nav-bar">
      <!-- <div slot="left"></div> -->
      <div slot="center">蘑菇街</div>
      <!-- <div slot="right"></div> -->
    </Navbar>
    <TabControl
      :titles="['流行','新款','精选']"
      class="tab-control"
      @tabClick="tabClick"
      v-show="isTabFixed"
      ref="TabFixed"
    />
    <BetterScroll
      class="better-scroll"
      :click="true"
      :pullupLoad="true"
      :probeType="3"
      ref="scroll"
      @bascroll="homeScroll"
      @pullup="loadMore"
    >
      <home-swiper :lists="lists" />
      <home-list :recommends="recommends" />
      <home-shop :shoplists="shoplists" />
      <TabControl
        :titles="['流行','新款','精选']"
        class="tab-control"
        @tabClick="tabClick"
        v-show="!isTabFixed"
        ref="TabControl"
      />
      <GoodList :goods="goods[currentType].list"></GoodList>
    </BetterScroll>
    <BackTop v-show="isShowTop" @click.native="backTop" />
  </div>
</template>

<script>
//公共组件
import Navbar from "../../components/common/nav-bar/Navbar";
import HomeSwiper from "./childComps/HomeSwiper";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodList from "../../components/content/goods/GoodList";
import BetterScroll from "../../components/common/better-scroll/BetterScroll";
import { backTopMixin } from "../../components/common/minxin";

//子组件
import HomeList from "./childComps/HomeList";
import HomeShop from "./childComps/HomeShop";
import { getHomeMultidata, getHomegood } from "../../network/home";
// import {request} from '../../network/request'

export default {
  name: "Home",
  mixins: [backTopMixin],
  components: {
    Navbar,
    HomeSwiper,
    HomeList,
    HomeShop,
    TabControl,
    GoodList,
    BetterScroll
  },
  data() {
    return {
      lists: [],
      shoplists: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",

      isTabFixed: false
      // isTabShow: true
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
      this.$refs.TabFixed.currentIndex = index;
      this.$refs.TabControl.currentIndex = index;
    },
    homeScroll(position) {
      this.getBackTopShow(position);
      this.isTabFixed = position.y < -651;
    },

    loadMore() {
      this.getHomegood(this.currentType);
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
          this.$refs.scroll.finishpullup();
        })
        .catch(err => {
          this.$refs.scroll.finishpullup();
        });
    }
  }

  // created(){
  // getHomeMultidata().then(res => {
  //         this.lists = res.data.banner.list
  //         this.shoplists = res.data.shoplist.list
  //         this.recommends = res.data.recommend.list
  //       })
  // },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.nav-bar {
  background: pink;
  font-size: 18px;
  color: white;
}
.tab-control {
  position: sticky;
  top: 44px;
  background: white;
  padding: 10px;
  z-index: 10;
}
.better-scroll {
  height: calc(100% - 94px);
  overflow: hidden;
  /* height: 540px; */
}
</style>