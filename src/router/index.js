// Vue Router配置 - 石河子大学迎新主题网页
// 参考文档: https://router.vuejs.org/guide/
// MIT协议路由配置示例

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home-Integrated.vue'),
    meta: {
      title: '首页',
      description: '石河子大学2026级新生欢迎首页'
    }
  },
  {
    path: '/campus',
    name: 'Campus',
    component: () => import('@/views/Campus-Enhanced.vue'),
    meta: {
      title: '校园风采',
      description: '探索石河子大学校园地标、自然景观和生活设施'
    }
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('@/views/Guide-Enhanced.vue'),
    meta: {
      title: '迎新指南',
      description: '新生报到、宿舍分配、缴费通道、校园卡办理指南'
    }
  },
  {
    path: '/interaction',
    name: 'Interaction',
    component: () => import('@/views/Interaction.vue'),
    meta: {
      title: '新生互动',
      description: '新生留言板和常见问题解答'
    }
  },
  // 404页面
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '页面未找到'
    }
  }
]

export default routes