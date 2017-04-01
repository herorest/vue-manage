import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: require('./entry/main/index.vue')
        }, {
            path: '/userfeedbackmng',
            component: require('./entry/feedback/index.vue')
        },
        {
            path: '*',
            redirect: '/home'
        }
]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
