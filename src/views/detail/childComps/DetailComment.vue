<template>
  <div v-if="Object.keys(comments).length!=0">
    <div class="info-header">
      <div class="info-title">用户评价</div>
      <div class="info-title">更多</div>
    </div>
    <div class="info-user">
      <img :src="comments.user.avatar" alt />
      <span>{{comments.user.uname}}</span>
    </div>
    <div>
      <p>{{comments.content}}</p>
      <div>
        <span class="data">{{comments.created | showData}}</span>
        <span>{{comments.style}}</span>
      </div>
      <div class="show-img">
        <img :src="item" v-for="(item,index) in comments.images" :key="index" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { formatData } from "../../../components/common/data";
export default {
  name: "DetailComment",
  props: {
    comments: {
      type: Object,
      default() {
        return;
      }
    }
  },
  filters: {
    showData(value) {
      // const date = ;
      // console.log(date);
      return formatData(new Date(value * 1000), "yyyy-MM-dd hh:mm:ss");
    }
  }
};
</script>

<style scoped>
.info-header {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
}
.info-user img {
  width: 50px;
  height: 50px;
}
.show-img {
  display: flex;
}
.show-img img {
  width: 20%;
  height: 20%;
}
</style>
