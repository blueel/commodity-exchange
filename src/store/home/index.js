import {request,mockBanner} from '../../api'
export default {
    namespaced:'home',
    state:{
        baseCategoryList:[],
        bannerList:[],
        isShow:false
    },
    actions:{
        async categoryList(context) {
          let res = await request()
          context.commit('CATEGORYLIST',res.data.data)
        },
        async bannerList(context) {
          let res = await mockBanner()
        //   console.log('banner执行');
          context.commit('BANNERLIST',res.data.data)
        }
    },
    mutations:{
        CATEGORYLIST(state,categoryList) {
            state.baseCategoryList = categoryList
        },
        BANNERLIST(state,bannerList) {
            // console.log('修改数据');
            state.bannerList = bannerList
        }
    },
    getters:{}
}
