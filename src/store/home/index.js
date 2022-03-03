import req from '../../api/request'
export default {
    namespaced:'home',
    state:{
        baseCategoryList:[],
        isShow:false
    },
    actions:{
        async categoryList(context) {
          let res = await req({
                url:'/api/product/getBaseCategoryList',
                method:'get'
            })
          context.commit('CATEGORYLIST',res)
        }
    },
    mutations:{
        CATEGORYLIST(state,categoryList) {
            state.baseCategoryList = categoryList
        },
    },
    getters:{}
}
