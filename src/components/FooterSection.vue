<!-- 页脚组件 - 石河子大学迎新主题网页 -->
<!-- 包含素材来源合规标注 -->

<template>
  <footer class="footer-section">
    <div class="container">
      <!-- 素材来源标注 -->
      <div class="sources-section">
        <div class="source-info">
          <p class="source-text">
            <i class="fas fa-images me-2"></i>
            图片素材来源：<a href="https://www.shzu.edu.cn/66/list.htm" target="_blank" rel="noopener">石河子大学官网校园风光网站</a>
          </p>
          <p class="source-text">
            <i class="fas fa-code me-2"></i>
            本网站基于 Vue.js 3 + Bootstrap 5 架构制作
          </p>
        </div>
      </div>

      <!-- 合规声明 -->
      <div class="compliance-notice">
        <div class="notice-content">
          <i class="fas fa-shield-alt me-2"></i>
          <span class="notice-text">
            本网页素材均为合规无版权资源，仅供"网聚创意"易协联创网页设计大赛使用
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 页脚组件 - 包含完整的素材来源标注和合规声明
</script>

<style scoped>
.footer-section {
  background-color: var(--text-primary);
  color: white;
  padding: var(--spacing-lg) 0 var(--spacing-md);
  margin-top: var(--spacing-xxl);
}

.sources-section {
  margin-bottom: var(--spacing-md);
}

.source-info {
  text-align: center;
}

.source-text {
  color: #333;
  font-size: var(--text-md);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.source-text:last-child {
  margin-bottom: 0;
}

.source-text i {
  color: var(--primary-light);
  font-size: var(--text-lg);
}

.source-text a {
  color: #90caf9;
  text-decoration: none;
  font-weight: var(--fw-medium);
  transition: all var(--transition-fast);
}

.source-text a:hover {
  color: #e3f2fd;
  text-decoration: underline;
}

.compliance-notice {
  background: rgba(255, 255, 255, 0.1);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  margin-bottom: 0;
}

.notice-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.notice-content i {
  font-size: var(--text-h3);
  color: var(--primary-light);
}

.notice-text {
  font-size: var(--text-md);
  font-weight: var(--fw-medium);
  color: rgba(255, 255, 255, 0.9);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-section {
    padding: var(--spacing-lg) 0 var(--spacing-md);
  }

  .source-title {
    font-size: var(--text-h3);
    margin-bottom: var(--spacing-sm);
  }

  .notice-content {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-xs);
  }

  .notice-text {
    font-size: var(--text-sm);
  }
}

@media (max-width: 576px) {
  .source-text {
    font-size: var(--text-sm);
  }
}

/* 打印样式 */
@media print {
  .footer-section {
    background-color: white;
    color: black;
    padding: 20px 0;
  }

  .source-text {
    color: #333;
  }

  .compliance-notice {
    background-color: transparent;
    color: #333;
  }
}
</style>