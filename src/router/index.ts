import { createRouter, createWebHashHistory } from "vue-router"

// 每个路由都需要映射到一个组件。
const routes = [
  { path: '/', component: HomeVue },
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
