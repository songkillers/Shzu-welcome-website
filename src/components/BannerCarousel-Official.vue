<!-- 石河子大学官方轮播图组件 - 使用真实校园图片 -->
<template>
  <div class="official-banner">
    <div class="hero-section">
      <div
        id="shzuCarousel"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="hover"
      >
        <!-- 轮播指示器 -->
        <div class="carousel-indicators">
          <button
            v-for="(slide, index) in carouselImages"
            :key="index"
            type="button"
            :data-bs-target="'#shzuCarousel'"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-current="index === 0 ? 'true' : 'false'"
          ></button>
        </div>

        <!-- 轮播内容 -->
        <div class="carousel-inner">
          <div
            v-for="(slide, index) in carouselImages"
            :key="index"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <div class="hero-slide" :style="{ backgroundImage: `url(${slide.url})` }">
              <!-- 图片渐变遮罩 -->
              <div class="hero-overlay"></div>

              <!-- 内容区域 -->
              <div class="container hero-content">
                <div class="row align-items-center min-vh-100">
                  <div class="col-lg-8 mx-auto text-center">
                    <div class="hero-text animate__animated animate__fadeInUp">
                      <span class="hero-pretitle">🎓 2026级新生</span>
                      <h1 class="hero-title">{{ slide.title }}</h1>
                      <p class="hero-description">{{ slide.description }}</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 控制按钮 -->
        <button
          class="carousel-control-prev"
          type="button"
          :data-bs-target="'#shzuCarousel'"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
          <span class="visually-hidden">上一张</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          :data-bs-target="'#shzuCarousel'"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
          <span class="visually-hidden">下一张</span>
        </button>
      </div>
    </div>

    <!-- 快速统计信息 -->
    <div class="hero-stats">
      <div class="container">
        <div class="row g-4">
          <div class="col-6 col-md-3">
            <div class="stat-item">
              <div class="stat-number" data-counter="70">70+</div>
              <div class="stat-label">本科专业</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-item">
              <div class="stat-number" data-counter="30000">3万+</div>
              <div class="stat-label">在校学生</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-item">
              <div class="stat-number" data-counter="2000">2000+</div>
              <div class="stat-label">教职工</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-item">
              <div class="stat-number" data-counter="70">70+</div>
              <div class="stat-label">办学历史</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Carousel } from 'bootstrap'
import { getOfficialImages } from '@/utils/officialImages.js'

// 获取石河子大学官方轮播图
const carouselImages = ref(getOfficialImages('carousel'))

let carouselInstance = null

// 数字动画
const animateNumbers = () => {
  const counters = document.querySelectorAll('[data-counter]')

  counters.forEach(counter => {
    const target = counter.getAttribute('data-counter')
    const duration = 2000 // 动画持续时间
    const step = 50 // 动画步长

    let current = 0
    const increment = parseInt(target) / (duration / step)

    const updateCounter = () => {
      current += increment
      if (current < parseInt(target)) {
        counter.textContent = Math.floor(current) + (target.includes('+') ? '+' : '')
        requestAnimationFrame(updateCounter)
      } else {
        counter.textContent = target
      }
    }

    // 使用 Intersection Observer 触发动画
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter()
          observer.unobserve(entry.target)
        }
      })
    })

    observer.observe(counter)
  })
}

// 初始化轮播
onMounted(() => {
  const carouselElement = document.getElementById('shzuCarousel')
  if (carouselElement) {
    carouselInstance = new Carousel(carouselElement, {
      interval: 4000,
      pause: 'hover',
      wrap: true,
      keyboard: true,
      touch: true
    })

    // 数字动画
    setTimeout(animateNumbers, 500)

    // 添加键盘导航
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        carouselInstance.prev()
      } else if (e.key === 'ArrowRight') {
        carouselInstance.next()
      }
    })
  }
})

onUnmounted(() => {
  if (carouselInstance) {
    carouselInstance.dispose()
  }
})
</script>

<style scoped>
/* 主轮播区域 */
.official-banner {
  position: relative;
  margin-top: 60px; /* 为固定导航栏留空间 */
}

.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}

.hero-slide {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(193, 39, 45, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 120px 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.hero-pretitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.hero-title {
  color: white;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  color: rgba(255, 255, 255, 0.95);
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  opacity: 0.9;
}

.photo-credit,
.location {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

/* 统计信息区域 */
.hero-stats {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  padding: 3rem 0 2rem;
  z-index: 2;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #C1272D;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.stat-label {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 轮播控制样式 */
.carousel-control-prev,
.carousel-control-next {
  width: 60px;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 1;
  transform: scale(1.1);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: brightness(0) invert(1);
}

.carousel-indicators {
  bottom: 120px;
  z-index: 3;
}

.carousel-indicators button {
  width: 12px;
  height: 12px;
  margin: 0 8px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid white;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.carousel-indicators button.active {
  background-color: #C1272D;
  transform: scale(1.3);
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-text {
  animation: fadeInUp 1s ease-out;
}

.carousel-item.active .hero-text {
  animation: fadeInUp 1s ease-out 0.3s both;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-content {
    padding: 80px 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .hero-meta {
    gap: 1rem;
  }

  .photo-credit,
  .location {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }

  .carousel-indicators {
    bottom: 200px;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
  }
}

@media (max-width: 576px) {
  .hero-stats {
    padding: 2rem 0 1rem;
  }

  .stat-item {
    padding: 0.8rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}

/* 加载状态 */
.hero-slide {
  background-color: #f5f5f5;
}

.hero-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  z-index: 0;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>