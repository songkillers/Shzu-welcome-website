<!-- 迎新指南页面 - 石河子大学迎新主题网页 -->

<template>
  <div class="guide-page">
    <div class="container">
      <!-- 页面标题 -->
      <section class="page-header text-center py-5">
        <h1 class="page-title">
          <i class="fas fa-book-open me-3"></i>
          迎新服务指南
        </h1>
        <p class="page-subtitle">
          为2026级新生提供全方位的报到指引和生活服务
        </p>
      </section>

      <!-- 指南模块 -->
      <section class="guide-content">
        <GuideAccordion />
      </section>

      <!-- 重要提醒 -->
      <section class="important-notice py-5">
        <div class="notice-card">
          <h3 class="notice-title">
            <i class="fas fa-exclamation-triangle me-2"></i>
            重要提醒
          </h3>
          <div class="notice-content">
            <div class="notice-item">
              <i class="fas fa-calendar-check"></i>
              <div>
                <h5>按时报到</h5>
                <p>请务必在规定时间内报到，如有特殊情况需提前联系招生办公室</p>
              </div>
            </div>
            <div class="notice-item">
              <i class="fas fa-shield-alt"></i>
              <div>
                <h5>防范诈骗</h5>
                <p>警惕各类诈骗信息，学校不会通过电话索要银行卡信息或密码</p>
              </div>
            </div>
            <div class="notice-item">
              <i class="fas fa-file-alt"></i>
              <div>
                <h5>材料准备</h5>
                <p>提前准备好所有必要证件的原件和复印件，避免报到时手忙脚乱</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 联系方式 -->
      <section class="contact-info py-5">
        <h2 class="section-title">
          <i class="fas fa-phone-alt me-3"></i>
          联系我们
        </h2>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="contact-card">
              <div class="contact-icon">
                <i class="fas fa-building"></i>
              </div>
              <div class="contact-details">
                <h5>招生办公室</h5>
                <p><i class="fas fa-phone me-2"></i>0993-1234567</p>
                <p><i class="fas fa-envelope me-2"></i>zhaosheng@shzu.edu.cn</p>
                <p><i class="fas fa-map-marker-alt me-2"></i>行政楼一楼</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contact-card">
              <div class="contact-icon">
                <i class="fas fa-headset"></i>
              </div>
              <div class="contact-details">
                <h5>迎新热线</h5>
                <p><i class="fas fa-phone me-2"></i>0993-7654321</p>
                <p><i class="fas fa-clock me-2"></i>8:00-22:00（报到期间）</p>
                <p><i class="fas fa-mobile-alt me-2"></i>支持微信咨询</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import GuideAccordion from '@/components/GuideAccordion.vue'
</script>

<style scoped>
.guide-page {
  padding-top: 80px;
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, rgba(193, 39, 45, 0.05), rgba(24, 144, 255, 0.05));
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-xl);
}

.page-title {
  color: var(--primary-color);
  font-size: var(--text-display);
  font-weight: var(--fw-bold);
  margin-bottom: var(--spacing-md);
}

.page-subtitle {
  color: var(--text-secondary);
  font-size: var(--text-lg);
}

.section-title {
  color: var(--text-primary);
  font-size: var(--text-h2);
  font-weight: var(--fw-bold);
  margin-bottom: var(--spacing-xl);
  border-left: 5px solid var(--primary-color);
  padding-left: var(--spacing-md);
}

.guide-content {
  margin: var(--spacing-xl) 0;
}

/* 重要提醒 */
.important-notice {
  margin: var(--spacing-xl) 0;
}

.notice-card {
  background: linear-gradient(135deg, rgba(250, 173, 20, 0.1), rgba(250, 173, 20, 0.05));
  border: 2px solid var(--warning-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.notice-title {
  color: var(--warning-color);
  font-size: var(--text-h3);
  font-weight: var(--fw-bold);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.notice-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.notice-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: white;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.notice-item i {
  font-size: 48px;
  color: var(--warning-color);
}

.notice-item h5 {
  color: var(--text-primary);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--spacing-sm);
}

.notice-item p {
  color: var(--text-secondary);
  margin: 0;
  line-height: var(--lh-relaxed);
}

/* 联系方式 */
.contact-info {
  margin: var(--spacing-xl) 0;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border-left: 5px solid var(--primary-color);
  transition: all var(--transition-normal);
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.contact-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  flex-shrink: 0;
}

.contact-details h5 {
  color: var(--text-primary);
  font-weight: var(--fw-bold);
  margin-bottom: var(--spacing-md);
}

.contact-details p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
}

.contact-details i {
  color: var(--primary-color);
  width: 20px;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: var(--text-h1);
  }

  .notice-content {
    grid-template-columns: 1fr;
  }

  .contact-card {
    flex-direction: column;
    text-align: center;
  }

  .contact-details p {
    justify-content: center;
  }
}
</style>