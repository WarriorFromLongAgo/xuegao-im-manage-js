import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Http from '@/components/Http'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '登录',
            component: Login,
            hidden: true
        }, {
            path: '/http',
            name: '你好Http',
            component: Http,
            hidden: true
        }, {
            path: '/home',
            name: '',
            component: Home,
            hidden: true
        }
    ]
})
