<!-- 简化版轮播图组件 - 使用本地石大图片 -->
<template>
  <div class="simple-banner">
    <div class="hero-carousel">
      <div
        id="shzuBanner"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="hover"
      >
        <!-- 轮播指示器 -->
        <div class="carousel-indicators">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            type="button"
            :data-bs-target="'#shzuBanner'"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-current="index === 0 ? 'true' : 'false'"
          ></button>
        </div>

        <!-- 轮播内容 -->
        <div class="carousel-inner">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            :class="['carousel-item', { active: index === 0 }]"
          >
            <div class="banner-slide" :style="{ backgroundImage: `url(${slide.url})` }">
              <!-- 渐变遮罩 -->
              <div class="slide-overlay"></div>
              <!-- 内容区域 -->
              <div class="slide-content">
                <h1 class="slide-title">{{ slide.title }}</h1>
                <p class="slide-description">{{ slide.description }}</p>
                <div class="slide-meta">
                  <span class="location">
                    <i class="fas fa-map-marker-alt me-2"></i>{{ slide.alt }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 控制按钮 -->
        <button
          class="carousel-control-prev"
          type="button"
          :data-bs-target="'#shzuBanner'"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
          <span class="visually-hidden">上一张</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          :data-bs-target="'#shzuBanner'"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
          <span class="visually-hidden">下一张</span>
        </button>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="banner-stats">
      <div class="container">
        <div class="row g-4">
          <div class="col-6 col-md-3">
            <div class="stat-box">
              <div class="stat-number">70+</div>
              <div class="stat-label">本科专业</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-box">
              <div class="stat-number">3万+</div>
              <div class="stat-label">在校学生</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-box">
              <div class="stat-number">2000+</div>
              <div class="stat-label">教职工</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="stat-box">
              <div class="stat-number">70+</div>
              <div class="stat-label">办学历史</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Carousel } from 'bootstrap'
import { getSHZUImages, FALLBACK_IMAGES } from '@/utils/imageData.js'

// 获取石河子大学图片
const slides = ref(getSHZUImages('carousel'))

let carouselInstance = null

// 组件挂载
onMounted(() => {
  const carouselElement = document.getElementById('shzuBanner')
  if (carouselElement) {
    carouselInstance = new Carousel(carouselElement, {
      interval: 4000,
      pause: 'hover',
      wrap: true,
      keyboard: true,
      touch: true
    })
  }
})

// 组件卸载
onUnmounted(() => {
  if (carouselInstance) {
    carouselInstance.dispose()
  }
})

// 图片错误处理
const handleImageError = (event) => {
  console.warn('图片加载失败，使用备用图片')
  const slide = event.target.closest('.banner-slide')
  if (slide) {
    const index = Array.from(slide.parentElement.children).indexOf(slide)
    if (FALLBACK_IMAGES.carousel[index]) {
      slide.style.backgroundImage = `url(${FALLBACK_IMAGES.carousel[index].url})`
    }
  }
}
</script>

<style scoped>
.simple-banner {
  margin-top: 60px;
}

.hero-carousel {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}

.banner-slide {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(193, 39, 45, 0.7) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 1;
}

.slide-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 80px 20px;
}

.slide-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.slide-description {
  font-size: clamp(1rem, 2vw, 1.4rem);
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 800px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.slide-meta {
  font-size: 1rem;
  opacity: 0.9;
}

.location {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

/* 统计信息 */
.banner-stats {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  padding: 40px 0 30px;
  z-index: 2;
}

.stat-box {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #C1272D;
  margin-bottom: 5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.stat-label {
  color: white;
  font-size: 1rem;
  font-weight: 500;
}

/* 轮播控制样式 */
.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 1;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: brightness(0) invert(1);
}

.carousel-indicators {
  bottom: 150px;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .slide-content {
    padding: 60px 20px;
  }

  .slide-title {
    font-size: 2rem;
  }

  .slide-description {
    font-size: 1.1rem;
  }

  .carousel-indicators {
    bottom: 200px;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .banner-stats {
    padding: 20px 0 15px;
  }

  .stat-box {
    padding: 15px;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>