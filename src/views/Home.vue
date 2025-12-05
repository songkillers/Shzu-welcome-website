<!-- 首页 - 石河子大学迎新主题网页 -->

<template>
  <div class="home-page">
    <!-- Banner轮播 -->
    <BannerCarousel />

    <!-- 主要内容区域 -->
    <div class="container">
      <!-- 欢迎标语 -->
      <section class="welcome-section text-center py-5">
        <h1
          class="welcome-title"
          data-scroll-animation
          data-animation="fade-in-down"
        >
          <span class="text-gradient">2026级新生</span>
          <br>
          欢迎来到石河子大学
        </h1>
        <p
          class="welcome-subtitle"
          data-scroll-animation
          data-animation="fade-in-up"
          data-delay="200"
        >
          在这里开启你的大学之旅，探索无限可能
        </p>
        <div
          class="welcome-stats"
          data-scroll-animation
          data-animation="fade-in-up"
          data-delay="400"
        >
          <div class="stat-item" data-scroll-animation data-animation="scale-in" data-delay="600">
            <div class="stat-number">70+</div>
            <div class="stat-label">本科专业</div>
          </div>
          <div class="stat-item" data-scroll-animation data-animation="scale-in" data-delay="800">
            <div class="stat-number">3万+</div>
            <div class="stat-label">在校学生</div>
          </div>
          <div class="stat-item" data-scroll-animation data-animation="scale-in" data-delay="1000">
            <div class="stat-number">2000+</div>
            <div class="stat-label">教职工</div>
          </div>
        </div>
      </section>

      <!-- 快速导航 -->
      <section class="quick-nav py-5">
        <h2
          class="section-title text-center mb-5"
          data-scroll-animation
          data-animation="fade-in-up"
        >
          <i class="fas fa-compass me-3"></i>
          快速导航
        </h2>
        <div class="row g-4">
          <div class="col-md-3">
            <router-link
              to="/campus"
              class="nav-card card-hover"
              data-scroll-animation
              data-animation="fade-in-left"
              data-delay="200"
            >
              <div class="nav-icon">
                <i class="fas fa-university"></i>
              </div>
              <h5>校园风光</h5>
              <p>探索美丽校园</p>
            </router-link>
          </div>
          <div class="col-md-3">
            <router-link
              to="/guide"
              class="nav-card card-hover"
              data-scroll-animation
              data-animation="fade-in-up"
              data-delay="400"
            >
              <div class="nav-icon">
                <i class="fas fa-book-open"></i>
              </div>
              <h5>迎新指南</h5>
              <p>新生报到指引</p>
            </router-link>
          </div>
          <div class="col-md-3">
            <router-link
              to="/interaction"
              class="nav-card card-hover"
              data-scroll-animation
              data-animation="fade-in-up"
              data-delay="600"
            >
              <div class="nav-icon">
                <i class="fas fa-comments"></i>
              </div>
              <h5>新生互动</h5>
              <p>留言交流答疑</p>
            </router-link>
          </div>
          <div class="col-md-3">
            <a
              href="#contact"
              class="nav-card card-hover"
              data-scroll-animation
              data-animation="fade-in-right"
              data-delay="800"
            >
              <div class="nav-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <h5>联系我们</h5>
              <p>咨询答疑通道</p>
            </a>
          </div>
        </div>
      </section>

      <!-- 校园亮点 -->
      <section class="campus-highlights py-5">
        <h2
          class="section-title text-center mb-5"
          data-scroll-animation
          data-animation="fade-in-up"
        >
          <i class="fas fa-star me-3"></i>
          校园亮点
        </h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div
              class="highlight-card card-hover"
              data-scroll-animation
              data-animation="fade-in-left"
              data-delay="200"
            >
              <div class="highlight-image">
                <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="学术氛围">
              </div>
              <div class="highlight-content">
                <h5>浓厚学术氛围</h5>
                <p>国家级重点学科，雄厚的师资力量，为你提供优质教育资源</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="highlight-card card-hover"
              data-scroll-animation
              data-animation="fade-in-up"
              data-delay="400"
            >
              <div class="highlight-image">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="校园生活">
              </div>
              <div class="highlight-content">
                <h5>多彩校园生活</h5>
                <p>丰富的社团活动，完善的生活设施，让大学生活更加精彩</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="highlight-card card-hover">
              <div class="highlight-image">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="未来发展">
              </div>
              <div class="highlight-content">
                <h5>广阔发展前景</h5>
                <p>优质就业平台，创新创业支持，助力你的职业发展</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 新生留言板预览 -->
      <section class="message-preview py-5">
        <div class="row">
          <div class="col-lg-12">
            <div class="message-card">
              <h3 class="card-title">
                <i class="fas fa-comments me-2"></i>
                新生留言板
              </h3>
              <p class="card-text">
                查看其他新生的留言，分享你的期待和想法
              </p>
              <router-link to="/interaction" class="btn btn-primary">
                查看更多留言
                <i class="fas fa-arrow-right ms-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import BannerCarousel from '@/components/BannerCarousel.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

// 初始化滚动动画
const { initAnimation } = useScrollAnimation()

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      console.log('初始化滚动动画...')
      const elements = document.querySelectorAll('[data-scroll-animation]')
      console.log(`找到 ${elements.length} 个动画元素`)
      initAnimation()
    }, 500)
  })
})
</script>

<style scoped>
.home-page {
  padding-top: 60px; /* 为固定导航栏留出空间 */
}

/* 欢迎区域 */
.welcome-section {
  background: linear-gradient(135deg, rgba(193, 39, 45, 0.05), rgba(24, 144, 255, 0.05));
  border-radius: var(--radius-xl);
  margin: var(--spacing-xl) 0;
}

.welcome-title {
  font-size: var(--text-display);
  font-weight: var(--fw-bold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.2;
}

.welcome-subtitle {
  font-size: var(--text-h3);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
}

.welcome-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.stat-item {
  text-align: center;
  padding: var(--spacing-lg);
}

.stat-number {
  font-size: var(--text-h2);
  font-weight: var(--fw-bold);
  color: var(--primary-color);
  display: block;
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: var(--text-md);
  color: var(--text-secondary);
  font-weight: var(--fw-medium);
}

/* 快速导航 */
.section-title {
  color: var(--primary-color);
  font-size: var(--text-h2);
  font-weight: var(--fw-bold);
  margin-bottom: var(--spacing-xl);
}

.nav-card {
  display: block;
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--surface);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: var(--text-primary);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  height: 100%;
}

.nav-card:hover {
  color: var(--text-primary);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.nav-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
  font-size: 32px;
}

.nav-card h5 {
  font-size: var(--text-lg);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--spacing-sm);
}

.nav-card p {
  color: var(--text-secondary);
  margin: 0;
}

/* 校园亮点 */
.highlight-card {
  background: var(--surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  height: 100%;
}

.highlight-image {
  height: 200px;
  overflow: hidden;
}

.highlight-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.highlight-card:hover .highlight-image img {
  transform: scale(1.1);
}

.highlight-content {
  padding: var(--spacing-lg);
}

.highlight-content h5 {
  color: var(--text-primary);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--spacing-sm);
}

.highlight-content p {
  color: var(--text-secondary);
  margin: 0;
  line-height: var(--lh-relaxed);
}

/* 留言板预览 */
.message-preview {
  margin: var(--spacing-xl) 0;
}

.message-card {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.message-card .card-title {
  font-size: var(--text-h2);
  font-weight: var(--fw-bold);
  margin-bottom: var(--spacing-md);
}

.message-card .card-text {
  font-size: var(--text-lg);
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.message-card .btn {
  background: white;
  color: var(--primary-color);
  border: none;
  padding: var(--spacing-sm) var(--spacing-xl);
  font-weight: var(--fw-semibold);
}

.message-card .btn:hover {
  background: var(--surface);
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .welcome-title {
    font-size: var(--text-h1);
  }

  .welcome-stats {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .nav-icon {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
}
</style>