import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',   // 去除路由中的 # 号
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        requireAuth: false
      }, //meta:{requireAuth: true }，这个配置，主要为验证做服务。
    }
  ]
})
