import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',   // 去除路由中的 # 号
  routes: [{
    // 用户中心主页
    path: '/',
    name: 'systemHome',
    component: (resolve) => require(['@/views/home.vue'], resolve),
    meta: {
      requireAuth: false
    }, //meta:{requireAuth: true }，这个配置，主要为验证做服务。
    children: [{
      path: '/',
      name: 'index',
      components: {
        default: (resolve) => require(['@/views/index.vue'], resolve),
        mainPanel: (resolve) => require(['@/views/index.vue'], resolve),
      },
    },]
  },
  ]
})
