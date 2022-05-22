import Vue from 'vue'
import Router from 'vue-router'
//引入VueRouter
import VueRouter from 'vue-router'

//引入组件
import Login from '../views/Login'



//应用插件
Vue.use(VueRouter)

const router = new Router({
    routes: [
        //访问/路径重定向到login路径
        {
            path:'/', redirect:'/login'
        },
        {
        path:'/login',
        component:Login
        }
    ]
})

export default router