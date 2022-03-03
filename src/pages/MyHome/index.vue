<template>
  <div>
    <!-- 三级联动 -->
    <TypeNav/>

    <!--列表-->
    <ListContainer/>

    <!--今日推荐-->
    <TodayRecommend/>

    <!-- 商品排行 -->
    <Rank/>

    <!-- 猜你喜欢 -->
    <Like/>
    
    <!--楼层-->
    <Floor/>
    <Floor/>

    <!--商标-->
    <Brand/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import "./css/swiper.min.css";
import TypeNav from '../../components/TypeNav'
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
export default {
    components:{
        TypeNav,
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand
    },
};
</script>

<style lang='less' scoped>
</style>