<template>
  <div class="center">
    <!--banner轮播-->
    <div class="swiper-container" ref="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/js/swiper.js";
import "swiper/css/swiper.css";
import { mapState } from "vuex";
export default {
  name: "Carousel",
  computed: {
    ...mapState("home", ["bannerList"]),
  },
  watch: {
    bannerList() {
    },
  },
  mounted() {
    this.$store.dispatch("home/bannerList");
    this.$nextTick(() => {
        console.log('nextTick');
    })
  },
};
</script>

<style>
.center {
  box-sizing: border-box;
  width: 740px;
  height: 100%;
  padding: 5px;
  float: left;
}
</style>