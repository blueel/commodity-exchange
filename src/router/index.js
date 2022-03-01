import Vue from 'vue'
import router from 'vue-router'
import MyHome from '../pages/MyHome'
import MySearch from '../pages/MySearch'
import Login from '../pages/Login'
Vue.use(router)
export default new router({
    routes: [
        {
            path:'/',
            redirect:'/MyHome'
        },
        {
            path:'/MyHome',
            component: MyHome,
            meta: {
                isShow:true
            }
        },
        {
            name:'MySearch',
            path:'/MySearch/:res?',
            component: MySearch,
            meta: {
                isShow:true
            }
        },
        {
            path:'/Login',
            component: Login,
            meta: {
                isShow:false
            }
        }
    ]
})