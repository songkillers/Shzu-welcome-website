<!-- 主导航栏组件 - 固定顶部，包含校徽和导航按钮 -->
<template>
  <nav class="main-navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <!-- 左侧：校徽（包含校名） -->
      <div class="navbar-brand">
        <div class="logo-container">
          <img src="/images/logo.svg" alt="石河子大学校徽" class="logo-image" />
        </div>
      </div>

      <!-- 右侧：导航按钮 -->
      <div class="navbar-menu">
        <div class="nav-buttons">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-button"
            :class="{ 'nav-active': isActiveRoute(item.path) }"
          >
            <div class="nav-button-content">
              <div class="nav-icon">
                <i :class="item.icon"></i>
              </div>
              <div class="nav-text">
                <span class="nav-label">{{ item.label }}</span>
                <span class="nav-desc">{{ item.description }}</span>
              </div>
            </div>
            <div class="nav-indicator"></div>
          </router-link>
        </div>

        <!-- 移动端菜单按钮 -->
        <button
          class="mobile-menu-toggle"
          @click="toggleMobileMenu"
          :class="{ 'menu-open': isMobileMenuOpen }"
        >
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
        </button>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div class="mobile-menu" :class="{ 'menu-open': isMobileMenuOpen }">
      <div class="mobile-menu-content">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="mobile-nav-item"
          :class="{ 'mobile-nav-active': isActiveRoute(item.path) }"
          @click="closeMobileMenu"
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 响应式数据
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// 导航项配置
const navItems = [
  {
    path: '/',
    label: '首页',
    description: '欢迎页面',
    icon: 'fas fa-home'
  },
  {
    path: '/campus',
    label: '校园风采',
    description: '探索校园',
    icon: 'fas fa-university'
  },
  {
    path: '/guide',
    label: '迎新指南',
    description: '报到指引',
    icon: 'fas fa-book-open'
  },
  {
    path: '/interaction',
    label: '新生互动',
    description: '交流答疑',
    icon: 'fas fa-comments'
  }
]

// 检查当前路由是否激活
const isActiveRoute = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

// 处理滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// 切换移动端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// 生命周期
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 主导航栏 */
.main-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, rgb(33, 68, 122) 0%, #1976d2 50%, #1e88e5 100%);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(21, 101, 192, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
}

.main-navbar.navbar-scrolled {
  background: linear-gradient(135deg, rgb(23, 53, 102) 0%, rgb(33, 68, 122) 50%, #1565c0 100%);
  backdrop-filter: blur(30px);
  box-shadow: 0 4px 24px rgba(13, 71, 161, 0.2);
  border-bottom: 1px solid rgba(21, 101, 192, 0.4);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  position: relative;
}

/* 左侧品牌区域 */
.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
}

.logo-container {
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 12px;
  box-shadow: none;
  transition: all 0.3s ease;
  position: relative;
}

.main-navbar.navbar-scrolled .logo-container {
  transform: scale(0.9);
}

.logo-container:hover {
  transform: scale(1.05);
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* 右侧导航菜单 */
.navbar-menu {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
}

/* 导航按钮 */
.nav-button {
  position: relative;
  text-decoration: none;
  padding: 16px 24px;
  border-radius: 18px;
  background: transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  min-width: 140px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button:hover {
  transform: translateY(-2px);
  background: rgba(30, 60, 114, 0.04);
}

.nav-button.nav-active {
  background: linear-gradient(135deg, rgba(30, 60, 114, 0.1) 0%, rgba(42, 82, 152, 0.06) 100%);
  box-shadow: 0 4px 16px rgba(30, 60, 114, 0.1);
}

.nav-button-content {
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 2;
  position: relative;
}

.nav-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 50%, #2196f3 100%);
  color: white;
  border-radius: 14px;
  font-size: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(33, 150, 243, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.nav-button:hover .nav-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 6px 20px rgba(33, 150, 243, 0.8);
  background: linear-gradient(135deg, #90caf9 0%, #64b5f6 50%, #42a5f5 100%);
}

.nav-button.nav-active .nav-icon {
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 50%, #bbdefb 100%);
  color: #1565c0;
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(33, 150, 243, 0.4);
  border-color: rgba(33, 150, 243, 0.8);
}

.nav-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.nav-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.nav-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  margin-top: 1px;
  transition: color 0.3s ease;
}

.nav-button:hover .nav-label {
  color: rgba(255, 255, 255, 0.9);
}

.nav-button:hover .nav-desc {
  color: rgba(255, 255, 255, 0.7);
}

.nav-button.nav-active .nav-label {
  color: white;
}

.nav-button.nav-active .nav-desc {
  color: rgba(255, 255, 255, 0.8);
}

.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, #1e3c72 0%, #64b5f6 100%);
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-button.nav-active .nav-indicator {
  transform: translateX(-50%) scaleX(1);
}

/* 移动端菜单按钮 */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1001;
}

.mobile-menu-toggle:hover {
  background: rgba(33, 150, 243, 0.1);
}

.menu-line {
  width: 24px;
  height: 2px;
  background: white;
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.menu-line:nth-child(1) {
  margin-bottom: 4px;
}

.menu-line:nth-child(3) {
  margin-top: 4px;
}

.mobile-menu-toggle.menu-open .menu-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.menu-open .menu-line:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.mobile-menu-toggle.menu-open .menu-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* 移动端菜单 */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 320px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  box-shadow: -4px 0 24px rgba(30, 60, 114, 0.1);
  transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  overflow-y: auto;
}

.mobile-menu.menu-open {
  right: 0;
}

.mobile-menu-content {
  padding: 100px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-decoration: none;
  color: #1976d2;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
  background: transparent;
}

.mobile-nav-item:hover {
  background: rgba(33, 150, 243, 0.08);
  transform: translateX(4px);
}

.mobile-nav-item.mobile-nav-active {
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.15) 0%, rgba(25, 118, 210, 0.1) 100%);
  color: #1565c0;
  font-weight: 600;
}

.mobile-nav-item i {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1976d2 0%, #2196f3 100%);
  color: white;
  border-radius: 8px;
  font-size: 12px;
  flex-shrink: 0;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .navbar-container {
    padding: 0 20px;
  }

  .nav-button {
    min-width: 110px;
    padding: 10px 16px;
    height: 60px;
  }

  .nav-label {
    font-size: 13px;
  }

  .nav-desc {
    font-size: 10px;
  }

  .university-name {
    font-size: 22px;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 16px;
    height: 80px;
  }

  .logo-container {
    width: 140px;
    height: 52px;
  }

  .logo-image {
    width: 100%;
    height: 100%;
  }

  .nav-buttons {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .main-navbar.navbar-scrolled .logo-container {
    transform: none;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 12px;
  }

  .logo-container {
    width: 120px;
    height: 48px;
  }

  .logo-image {
    width: 100%;
    height: 100%;
  }

  .mobile-menu {
    width: 85%;
  }

  .mobile-menu-content {
    padding: 90px 16px 16px;
  }
}
</style>