<!-- 返回顶部按钮组件 - 石河子大学迎新主题网页 -->
<!-- Font Awesome图标: CC BY 4.0协议 - https://fontawesome.com/license -->

<template>
  <transition name="fade">
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="back-to-top"
      :title="'返回顶部'"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

// 监听滚动事件
const handleScroll = () => {
  isVisible.value = window.pageYOffset > 300
}

// 返回顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  z-index: var(--z-fixed);
}

.back-to-top:hover {
  background: var(--primary-light);
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.back-to-top:active {
  transform: translateY(-2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-normal);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>