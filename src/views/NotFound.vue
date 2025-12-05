<!-- 404页面 - 石河子大学迎新主题网页 -->
<!-- Font Awesome图标: CC BY 4.0协议 - https://fontawesome.com/license -->

<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-content text-center">
        <div class="error-icon">
          <i class="fas fa-search"></i>
        </div>
        <h1 class="error-title">404</h1>
        <h2 class="error-subtitle">页面未找到</h2>
        <p class="error-description">
          抱歉，您访问的页面不存在或已被移动
        </p>
        <div class="error-actions">
          <router-link to="/" class="btn btn-primary">
            <i class="fas fa-home me-2"></i>
            返回首页
          </router-link>
          <button @click="goBack" class="btn btn-outline-primary">
            <i class="fas fa-arrow-left me-2"></i>
            返回上页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const goBack = () => {
  window.history.back()
}
</script>

<style scoped>
.not-found-page {
  padding-top: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(193, 39, 45, 0.05), rgba(24, 144, 255, 0.05));
}

.not-found-content {
  padding: var(--spacing-xxl);
}

.error-icon {
  font-size: 120px;
  color: var(--primary-color);
  margin-bottom: var(--spacing-lg);
  opacity: 0.8;
}

.error-title {
  font-size: 120px;
  font-weight: var(--fw-black);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  line-height: 1;
}

.error-subtitle {
  font-size: var(--text-h2);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

.error-description {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
}

.error-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
}

@media (max-width: 768px) {
  .error-icon {
    font-size: 80px;
  }

  .error-title {
    font-size: 80px;
  }

  .error-subtitle {
    font-size: var(--text-h3);
  }

  .error-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>