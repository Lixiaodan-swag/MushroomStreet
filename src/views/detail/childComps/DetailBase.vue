<template>
  <div class="base-info" v-if="Object.keys(goods).length!=0">
    <h3 class="info-title">{{goods.title}}</h3>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-sales">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBase",
  props: {
    goods: Object,
    defalut() {
      return {};
    }
  }
};
</script>

<style scoped>
.info-price {
  margin: 15px 0px;
}
.new-price {
  font-size: 20px;
  color: hotpink;
}
.discount {
  margin-left: 10px;
}
.info-sales {
  display: flex;
  flex: 1;
  justify-content: space-between;
  height: 30px;
  border-bottom: 1px solid #ccc;
}

.info-services {
  display: flex;
  flex: 1;
  padding: 15px 0px;
  justify-content: space-between;
  border-bottom: 3px solid #ccc;
}
.info-services img {
  width: 15px;
  height: 15px;
}
</style>
