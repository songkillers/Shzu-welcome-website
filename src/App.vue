<!-- 根组件 App.vue - 石河子大学迎新主题网页 -->
<!-- 整体布局结构定义 -->
<template>
  <div id="app">
    <!-- 主导航栏组件 -->
    <MainNavbar />

    <!-- 主要内容区域 -->
    <main class="main-content">
      <!-- 路由视图 -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚组件 -->
    <FooterSection />

    <!-- 返回顶部按钮 -->
    <BackToTop />
  </div>
</template>

<script setup>
// Vue3 Composition API
import MainNavbar from '@/components/MainNavbar.vue'
import FooterSection from '@/components/FooterSection.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>

<style scoped>
/* 页面整体样式 */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: var(--font-zh-cn), var(--font-en), sans-serif;
}

.main-content {
  flex: 1;
  padding-top: 90px; /* 为固定导航栏留出空间 */
}

/* 路由切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>