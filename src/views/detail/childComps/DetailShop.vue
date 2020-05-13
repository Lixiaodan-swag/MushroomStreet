<template>
  <div v-if="Object.keys(shops).length!=0">
    <div class="shop-top">
      <img :src="shops.shopLogo" alt />
      <span class="shops-name">{{shops.name}}</span>
    </div>
    <!-- /////logo以及标题//////// -->
    <div class="shop-info">
      <div class="shop-item1">
        <div class="num-item">{{shops.cSells|cSellsCountFilter}}</div>
        <div class="text-item">总销量</div>
      </div>

      <div class="shop-item2">
        <div class="num-item">{{shops.cGoods}}</div>
        <div class="text-item">全部宝贝</div>
      </div>
      <div class="shop-item3">
        <table>
          <tr v-for="(item,index) in shops.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter?'高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="btn">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shops: {
      type: Object,
      defalut() {
        return {};
      }
    }
  },
  filters: {
    cSellsCountFilter(value) {
      let result = value;
      if (value > 1000) {
        result = (result / 10000).toFixed(1) + "万";
      }
      return result;
    }
  }
};
</script>

<style scoped>
.shop-top {
  font-size: 22px;
  padding-top: 15px;
}
.shop-top img {
  width: 100px;
  height: 80px;
}
.shop-info {
  display: flex;
  justify-content: space-around;
}
.shop-item2 {
  border-right: 2px solid #ccc;
  padding-right: 20px;
}
.num-item {
  font-size: 25px;
  font-weight: bold;
}
.text-item {
  font-size: 15px;
}
.shop-item3 .score {
  color: lawngreen;
}
.shop-item3 .score-better {
  color: orangered;
}
.shop-item3 .better {
  background: lawngreen;
  color: white;
}
.shop-item3 .better-more {
  background: red;
  color: white;
}
.btn {
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
  /* color: white; */
}
</style>
