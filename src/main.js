// Vue3主入口文件 - 石河子大学迎新主题网页
// 实现Vue3与Bootstrap5的无缝集成
// 参考文档: https://vuejs.org/guide/
// Bootstrap5集成参考: https://getbootstrap.com/docs/5.3/getting-started/javascript/

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// 导入根组件
import App from './App.vue'

// 导入路由配置
import routes from '@/router/index.js'

// 导入Bootstrap5 CSS和JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 导入石河子大学主题样式
import '@/assets/css/shzu-theme.css'
// 导入修复后的全局样式（覆盖Bootstrap默认样式）
import '@/assets/css/global-fixed.css'

// 创建Vue3应用实例
const app = createApp(App)

// 创建路由实例
const router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // 路由切换时的滚动行为
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 注册全局路由守卫
router.beforeEach((to, from, next) => {
  // 页面标题动态设置
  document.title = to.meta.title
    ? `${to.meta.title} - 石河子大学`
    : '石河子大学 - 2026级新生欢迎页面'
  next()
})

// 挂载路由
app.use(router)

// 全局错误处理
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue全局错误:', err, info)
  // 可以在这里添加错误上报逻辑
}

// 全局属性定义（可选）
app.config.globalProperties.$filters = {
  // 可以添加全局过滤器
}

// 挂载应用
app.mount('#app')

// 开发环境调试信息
if (import.meta.env.DEV) {
  console.log('石河子大学迎新网页已启动')
  console.log('Vue版本:', app.version)
}