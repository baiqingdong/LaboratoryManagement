import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Index = () => import('../components/Index/Index.vue');
/* Layout */

// 公共路由
export const constantRoutes = [
  {
    path: '/',
    component: Index
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
