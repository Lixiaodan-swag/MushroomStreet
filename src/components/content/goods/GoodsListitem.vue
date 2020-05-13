<template>
  <div class="good-list-item" @click="itemClick">
    <img :src="getImage" alt />
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">¥{{goodsitem.price}}</span>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListitem",
  methods: {
    itemClick() {
      // console.log(this.goodsitem);
      this.$router.push("/detail/" + this.goodsitem.iid);
    }
  },
  props: {
    goodsitem: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  computed: {
    getImage() {
      return this.goodsitem.image || this.goodsitem.show.img;
    }
  }
};
</script>
<style scoped>
.good-list-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
  padding-left: 5px;
}
.good-list-item img {
  width: 100%;
}
.goods-info {
  font-size: 14px;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  color: red;
  margin-right: 20px;
}
.goods-info .cfav {
  position: relative;
}
.goods-info .cfav::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  left: -5px;
  top: 0px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>