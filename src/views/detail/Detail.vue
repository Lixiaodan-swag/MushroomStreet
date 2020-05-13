<template>
  <div id="detail">
    <DetailBar @itemClick="itemClick" ref="nav" />
    <BetterScroll
      class="better-scroll"
      ref="scroll"
      :click="true"
      :pullupLoad="true"
      :probeType="3"
      @bascroll="detailScroll"
    >
      <!-- <div>
        <li v-for="item in $store.state.cartList">{{item}}</li>
      </div>-->
      <DetailSwiper :top-images="topImages" />
      <DetailBase :goods="goodsInfo" />
      <DetailShop :shops="shopsInfo" />
      <DetailMore :details="detailsInfo" @imgload="imgload" />
      <DetailPram ref="params" :prams="goodsParam" />
      <DetailComment ref="recomment" :comments="commentInfo" />
      <DetailList ref="list" :recommendInfo="recommendInfo" />
    </BetterScroll>
    <DetailBottomBar @addCart="addCart" />
    <BackTop v-show="isShowTop" @click.native="backTop"></BackTop>
  </div>
</template>

<script>
import DetailBar from "./childComps/DetailBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBase from "./childComps/DetailBase";
import DetailShop from "./childComps/DetailShop";
import DetailMore from "./childComps/DetailMore";
import DetailPram from "./childComps/DetailPram";
import DetailList from "./childComps/DetailList";
import DetailBottomBar from "./childComps/DetailBottomBar";
import DetailComment from "./childComps/DetailComment";
import BetterScroll from "../../components/common/better-scroll/BetterScroll";
import GoodsList from "../../components/content/goods/GoodList";
import { backTopMixin } from "../../components/common/minxin";
import { debounce } from "../../components/common/debounce";

import {
  getDetail,
  GoodsInfo,
  Shop,
  GoodsParam,
  getRecommendData
} from "../../network/detail";
export default {
  name: "Detail",
  mixins: [backTopMixin],
  components: {
    DetailBar,
    DetailSwiper,
    DetailBase,
    DetailShop,
    DetailMore,
    DetailPram,
    DetailComment,
    BetterScroll,
    DetailList,
    DetailBottomBar
  },
  data() {
    return {
      iid: null,
      detailsInfo: {},
      goodsParam: {},
      commentInfo: {},
      themeTopYs: [],
      recommendInfo: [],
      topImages: [],
      goodsInfo: {},
      shopsInfo: {},
      getpositionY: null
      // currentIndex: 0
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    //获取详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      let data = res.result;
      // 获取轮播图
      this.topImages = data.itemInfo.topImages;
      // console.log(this.topImages);
      // 获取详情数据
      this.goodsInfo = new GoodsInfo(
        data.columns,
        data.itemInfo,
        data.shopInfo
      );
      // console.log(this.goodsInfo);
      // 获取店铺数据
      this.shopsInfo = data.shopInfo;
      // console.log(this.shopsInfo);
      // 获取商品详情数据
      this.detailsInfo = data.detailInfo;

      // console.log(this.detailsInfo);

      //获取商品参数数据
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // console.log(this.goodsParam);
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
        console.log(this.commentInfo);
      }
    });
    //获取推荐数据
    getRecommendData().then(res => {
      console.log(res);
      this.recommendInfo = res.data.list;
    });
    this.getpositionY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(-this.$refs.params.$el.offsetTop + 44);
      this.themeTopYs.push(-this.$refs.recomment.$el.offsetTop + 44);
      this.themeTopYs.push(-this.$refs.list.$el.offsetTop + 44);
      console.log(this.themeTopYs);
    }, 300);
  },

  methods: {
    itemClick(index) {
      console.log(index);
      this.$refs.scroll.bs.scrollTo(0, this.themeTopYs[index], 1000);
    },
    //监听
    imgload() {
      // console.log("...........");
      this.$refs.scroll.bs.refresh();
      this.getpositionY();
    },
    detailScroll(position) {
      let y = position.y;
      for (let i in this.themeTopYs) {
        // console.log(i);
        if (
          this.currentIndex != i &&
          ((y < this.themeTopYs[i] &&
            y > this.themeTopYs[+i + 1] &&
            i < this.themeTopYs.length - 1) ||
            (i == this.themeTopYs.length - 1 && y < this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = i;
          // console.log(i);
        }
      }
      this.getBackTopShow(position);
    },
    addCart() {
      // console.log("111");
      let cartInfo = {};
      cartInfo.img = this.topImages[0];
      cartInfo.title = this.goodsInfo.title;
      cartInfo.desc = this.goodsInfo.desc;
      cartInfo.price = this.goodsInfo.Price;
      cartInfo.iid = this.iid;
      console.log(cartInfo.price);
      //将商品加入购物车
      // this.$store.commit("addCart", cartInfo);
      this.$store.dispatch("addCart", cartInfo);
    }
  }
};
</script>

<style scoped>
/* .detail {
  display: flex;
} */
#detail {
  height: 100vh;
  position: relative;
  z-index: 12;
  background-color: #fff;
}
.better-scroll {
  height: calc(100% - 44px - 60px);
}
</style>





