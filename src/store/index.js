import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
// const actions = {
//     add(context,value) {
//         context.commit('ADD',value)
//     }
// }
// const mutations = {
//     ADD(state,value) {
//         state.count+=value
//     },
//     DECREASE(state,value) {
//         state.count--
//         console.log('@',value);
//     }
// }
// const getters = {
//     bigCount(state) {
//         return state.count * 10
//     }
// }
const addSection = {
    namespaced:true,
    state:{
        count:1
    },
    actions:{
        add(context,value) {
            context.commit('ADD',value)
        }
    },
    mutations:{
        ADD(state,value) {
            state.count+=value
        },
    },
    getters:{
        bigCount(state) {
            return state.count * 10
        }
    }
}
const decSection = {
    namespaced:true,
    state:{
        count:2
    },
    actions:{},
    mutations:{
        DECREASE(state,value) {
            state.count--
            console.log('@',value);
        }
    },
    getters:{
        bigCount(state) {
            return state.count * 20
        }
    }
}
export default new Vuex.Store({
    modules:{
        addSection,
        decSection
    }
})