<!-- 导航栏组件 - 石河子大学迎新主题网页 -->
<!-- 固定顶部导航，响应式设计 -->

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <!-- 校徽和名称 -->
      <router-link class="navbar-brand" to="/">
        <i class="fas fa-graduation-cap fa-2x"></i>
        <span class="brand-text">石河子大学</span>
      </router-link>

      <!-- 移动端切换按钮 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="切换导航"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 导航菜单 -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active">
              <i class="fas fa-home me-1"></i>
              首页
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/campus" active-class="active">
              <i class="fas fa-building me-1"></i>
              校园风采
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/guide" active-class="active">
              <i class="fas fa-book me-1"></i>
              迎新指南
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/interaction" active-class="active">
              <i class="fas fa-comments me-1"></i>
              新生互动
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// 导航栏组件
// Font Awesome图标使用说明: CC BY 4.0协议 - https://fontawesome.com/license
</script>

<style scoped>
.navbar {
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px var(--shadow-color);
  transition: all var(--transition-normal);
  z-index: var(--z-fixed);
}

.navbar-brand {
  font-size: var(--text-h4);
  font-weight: var(--fw-bold);
  color: var(--primary-color) !important;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.brand-text {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.navbar-toggler {
  border: 2px solid var(--primary-color);
  padding: var(--spacing-xs) var(--spacing-sm);
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.25rem rgba(193, 39, 45, 0.25);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(193, 39, 45, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-nav {
  gap: var(--spacing-sm);
}

.nav-link {
  color: var(--text-primary) !important;
  font-weight: var(--fw-medium);
  padding: var(--spacing-sm) var(--spacing-md) !important;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.nav-link:hover {
  color: var(--primary-color) !important;
  background-color: rgba(193, 39, 45, 0.1);
  transform: translateY(-2px);
}

.nav-link.active {
  color: var(--primary-color) !important;
  background-color: rgba(193, 39, 45, 0.15);
  font-weight: var(--fw-semibold);
}

.nav-link i {
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .navbar-nav {
    padding-top: var(--spacing-md);
    text-align: center;
  }

  .nav-link {
    justify-content: center;
    padding: var(--spacing-md) !important;
  }
}

@media (max-width: 576px) {
  .brand-text {
    display: none;
  }

  .navbar-brand {
    font-size: 24px;
  }

  .navbar-toggler {
    padding: 4px 8px;
  }
}

/* 滚动时的导航栏效果 */
.navbar-scrolled {
  box-shadow: 0 4px 20px var(--shadow-color);
}
</style>