<!-- 工作版首页 - 确保图片正常加载 -->
<template>
  <div class="home-working">
    <!-- 使用简化轮播图 -->
    <BannerCarousel-Simple />

    <!-- 主要内容区域 -->
    <div class="container">
      <!-- 欢迎介绍 -->
      <section class="welcome-section py-5">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-title">
              <i class="fas fa-university me-3"></i>
              欢迎来到石河子大学
            </h2>
            <p class="section-subtitle">
              石河子大学创建于1949年，是国家"211工程"重点建设高校、国家"双一流"建设高校
            </p>
          </div>
        </div>
      </section>

      <!-- 快速导航 -->
      <section class="quick-nav-section py-5">
        <h3 class="text-center mb-4">
          <i class="fas fa-compass me-2"></i>
          快速导航
        </h3>
        <div class="row g-4">
          <div class="col-md-3" v-for="nav in quickNavItems" :key="nav.path">
            <router-link :to="nav.path" class="nav-card">
              <div class="nav-icon">
                <i :class="nav.icon"></i>
              </div>
              <h5>{{ nav.title }}</h5>
              <p>{{ nav.description }}</p>
            </router-link>
          </div>
        </div>
      </section>

      <!-- 校园风光展示 -->
      <section class="campus-preview py-5 bg-light">
        <h3 class="text-center mb-4">
          <i class="fas fa-camera me-2"></i>
          校园风光
        </h3>
        <div class="row g-4">
          <div class="col-md-4" v-for="image in campusImages" :key="image.id">
            <div class="campus-image-card">
              <img :src="image.url" :alt="image.alt" class="img-fluid">
              <div class="image-info">
                <h5>{{ image.title }}</h5>
                <p>{{ image.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/campus" class="btn btn-primary btn-lg">
            查看更多校园风光 <i class="fas fa-arrow-right ms-2"></i>
          </router-link>
        </div>
      </section>

      <!-- 学校优势 -->
      <section class="advantages-section py-5">
        <h3 class="text-center mb-4">
          <i class="fas fa-trophy me-2"></i>
          学校优势
        </h3>
        <div class="row g-4">
          <div class="col-md-4" v-for="advantage in advantages" :key="advantage.title">
            <div class="advantage-card">
              <div class="advantage-icon">
                <i :class="advantage.icon"></i>
              </div>
              <h4>{{ advantage.title }}</h4>
              <p>{{ advantage.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { getSHZUImages } from '@/utils/imageData.js'
import BannerCarouselSimple from '@/components/BannerCarousel-Simple.vue'

// 快速导航数据
const quickNavItems = [
  {
    title: '校园风光',
    description: '探索美丽校园',
    icon: 'fas fa-university',
    path: '/campus'
  },
  {
    title: '迎新指南',
    description: '新生报到指引',
    icon: 'fas fa-book-open',
    path: '/guide'
  },
  {
    title: '新生互动',
    description: '留言交流答疑',
    icon: 'fas fa-comments',
    path: '/interaction'
  },
  {
    title: '联系我们',
    description: '咨询答疑通道',
    icon: 'fas fa-phone-alt',
    path: '/contact'
  }
]

// 校园图片展示
const campusImages = ref(getSHZUImages('landmarks').slice(0, 3))

// 学校优势
const advantages = [
  {
    title: '学科齐全',
    description: '涵盖文、理、工、农、医、经、管、法、教、艺等十大学科门类',
    icon: 'fas fa-graduation-cap'
  },
  {
    title: '师资雄厚',
    description: '拥有2000余名教职工，其中高级职称教师1000余人',
    icon: 'fas fa-chalkboard-teacher'
  },
  {
    title: '科研实力强',
    description: '承担多项国家级科研项目，科研经费充足',
    icon: 'fas fa-microscope'
  },
  {
    title: '就业前景好',
    description: '毕业生就业率高，深受用人单位欢迎',
    icon: 'fas fa-chart-line'
  },
  {
    title: '校园环境美',
    description: '四季分明的美丽校园，学习生活环境优越',
    icon: 'fas fa-tree'
  },
  {
    title: '设施完善',
    description: '现代化的教学设施和生活设施',
    icon: 'fas fa-building'
  }
]
</script>

<style scoped>
.home-working {
  padding-top: 60px;
}

.section-title {
  color: #C1272D;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.section-subtitle {
  color: #595959;
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* 导航卡片 */
.nav-card {
  display: block;
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #C1272D;
}

.nav-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #C1272D, #D94045);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 15px;
}

.nav-card h5 {
  color: #262626;
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.nav-card p {
  color: #595959;
  line-height: 1.5;
  margin: 0;
}

/* 校园图片卡片 */
.campus-image-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.campus-image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.campus-image-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.campus-image-card:hover img {
  transform: scale(1.05);
}

.image-info {
  padding: 15px;
  background: white;
}

.image-info h5 {
  color: #262626;
  margin-bottom: 8px;
  font-weight: 600;
}

.image-info p {
  color: #595959;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

/* 优势卡片 */
.advantage-card {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.advantage-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #C1272D, #D94045);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 15px;
}

.advantage-card h4 {
  color: #262626;
  margin-bottom: 10px;
  font-weight: 600;
}

.advantage-card p {
  color: #595959;
  line-height: 1.5;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
  }

  .campus-image-card img {
    height: 150px;
  }
}

/* 通用样式 */
.btn-primary {
  background-color: #C1272D;
  border-color: #C1272D;
  padding: 12px 30px;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #D94045;
  border-color: #D94045;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(193, 39, 45, 0.3);
}

.bg-light {
  background-color: #f8f9fa;
}

.py-5 {
  padding-top: 60px;
  padding-bottom: 60px;
}

.mb-4 {
  margin-bottom: 24px;
}

.text-center {
  text-align: center;
}
</style>