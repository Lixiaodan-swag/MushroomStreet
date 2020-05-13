<template>
  <div v-if="Object.keys(details).length!=0" class="detail-item">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{details.desc}}</div>
      <div class="end"></div>
    </div>

    <!-- /////上面部分/// -->
    <div v-for="(item,index) in details.detailImage" :key="index">
      <!-- <div class="key">{{details.detailImage[0].key}}</div> -->
      <div>{{item.key}}</div>
      <div class="item-img">
        <img
          v-for="(item,index) in details.detailImage[0].list"
          :key="index"
          :src="item"
          @load="imageload"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailMore",
  data() {
    return {
      imgLength: 0,
      num: 0
    };
  },
  props: {
    details: {
      type: Object,
      defalut() {
        return {};
      }
    }
  },
  methods: {
    imageload() {
      this.num++;
      if (this.num === this.imgLength) {
        this.$emit("imgload");
      }
    }
  },
  watch: {
    details() {
      this.imgLength = this.details.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.start,
.end {
  width: 90px;
  height: 1px;
  background: black;
  position: relative;
}
.start {
  float: left;
}
.end {
  float: right;
}
.start::before,
.end::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
}
.desc {
  padding: 15px;
}
.detail-item {
  width: 100%;
}
.item-img img {
  width: 100%;
}
</style>
