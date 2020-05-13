<template>
  <Swiper>
    <SwiperItem v-for="(item,index) in topImages" :key="index" class="swiper-item">
      <img :src="item" alt class="top-images" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      defalut() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.swiper-item {
  height: 300px;
}
</style>
