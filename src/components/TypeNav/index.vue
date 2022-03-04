<template>
  <div class="type-nav">
    <div class="container" @mouseleave="leaveAction" @mouseenter="enterAction">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div id="demo">
        <transition-group
          name="animate__animated animate__bounce"
          enter-active-class="animate__rubberBand"
          leave-active-class="animate__headShake"
        >
          <div class="sort" @click="goSearch" v-show="isShow" key="1">
            <div class="all-sort-list2">
              <div
                class="item"
                v-for="(c1, index) in baseCategoryList"
                :key="c1.categoryId"
                :class="{ bc: currentStyle == index }"
                @mouseenter="currentStyle = index"
              >
                <h3>
                  <!-- <router-link
                  :to="{
                    path: '/MySearch',
                    query: { categoryName: c1.categoryName, id: c1.categoryId },
                  }"
                >
                  {{ c1.categoryName }}
                </router-link> -->
                  <a
                    href="JavaScript:;"
                    :data-c1Name="c1.categoryName"
                    :data-c1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <!-- <router-link
                        :to="{
                          path: '/MySearch',
                          query: {
                            categoryName: c2.categoryName,
                            id: c2.categoryId,
                          },
                        }"
                      >
                        {{ c2.categoryName }}
                      </router-link> -->
                        <a
                          href="JavaScript:;"
                          :data-c2Name="c2.categoryName"
                          :data-c2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <!-- <router-link
                          :to="{
                            path: '/MySearch',
                            query: {
                              categoryName: c3.categoryName,
                              id: c3.categoryId,
                            },
                          }"
                        >
                          {{ c3.categoryName }}
                        </router-link> -->
                          <a
                            href="JavaScript:;"
                            :data-c3Name="c3.categoryName"
                            :data-c3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "animate.css";
export default {
  data: function () {
    return {
      currentStyle: -1,
      isShow: true,
      show: true,
    };
  },
  methods: {
    goSearch(e) {
      let target = e.target.dataset;
      console.log(target.c1id);
      if (target.c1id) {
        this.$router.push({
          path: "/MySearch",
          query: {
            categoryName: target.c1name,
            id: target.c1id,
          },
        });
      } else if (target.c2id) {
        this.$router.push(
          {
            path: "/MySearch",
            query: {
              categoryName: target.c2name,
              id: target.c2id,
            },
          },
          () => {},
          () => {}
        );
      } else {
        this.$router.push({
          path: "/MySearch",
          query: {
            categoryName: target.c3name,
            id: target.c3id,
          },
        });
      }
    },
    leaveAction() {
      this.currentStyle = -1;
      if(this.$route.path!=='/MyHome'){
        this.isShow = false;
      }
    },
    enterAction() {
      console.log('path',this.$route.path);
      console.log(this.$route.path!='/MyHome');
      if(this.$route.path!='/MyHome'){
        this.isShow = true;
        console.log('enter');
      }
      
    },
  },
  computed: {
    ...mapState("home", ["baseCategoryList"]),
  },
  mounted() {
    console.log("path", this.$route.path);
    if (this.$route.path == "/MySearch/") {
      this.isShow = false;
    }
  },
};
</script>

<style lang='less' scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            // background-color: rgb(0, 183, 255);
            .item-list {
              display: block;
            }
          }
        }
        .bc {
          background-color: rgb(0, 183, 255);
        }
      }
      .sort-enter-active,
      .sort-leave-active {
        transition: opacity 0.5s;
      }
      .sort-enter, .sort-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }
    }
  }
}
</style>