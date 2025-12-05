<!-- 更新后的轮播图组件 - 石河子大学迎新主题网页 -->
<!-- 使用更贴近石河子大学特色的图片 -->
<!-- Font Awesome图标: CC BY 4.0协议 - https://fontawesome.com/license -->

<template>
  <div class="banner-carousel">
    <div
      id="mainCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      @mouseenter="pauseCarousel"
      @mouseleave="resumeCarousel"
    >
      <!-- 轮播指示器 -->
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          :data-bs-target="'#mainCarousel'"
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
          <img
            :src="slide.image"
            :alt="slide.title"
            class="d-block w-100 carousel-image"
            @error="handleImageError($event, slide)"
          />

          <!-- 轮播文字说明 -->
          <div class="carousel-caption d-none d-md-block">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>

          <!-- 移动端简化显示 -->
          <div class="carousel-caption d-md-none mobile-caption">
            <h3>{{ slide.mobileTitle }}</h3>
          </div>
        </div>
      </div>

      <!-- 控制按钮 -->
      <button
        class="carousel-control-prev"
        type="button"
        :data-bs-target="'#mainCarousel'"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">上一张</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        :data-bs-target="'#mainCarousel'"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">下一张</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Carousel } from 'bootstrap'

// 轮播图数据配置 - 使用更贴近石河子大学的图片
const slides = ref([
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: '2026级新生，欢迎来到石河子大学',
    description: '知识的殿堂，梦想的起点。在这里，开启你的人生新篇章。',
    mobileTitle: '欢迎来到石大',
    alt: '石河子大学校门'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: '探索知识的海洋',
    description: '现代化的图书馆设施，为你的学术追求提供无限可能。',
    mobileTitle: '知识的海洋',
    alt: '现代化图书馆'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1577720643272-265f09367456?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: '四季分明的美丽校园',
    description: '春有百花，夏有绿荫，秋有金叶，冬有雪景。',
    mobileTitle: '美丽校园',
    alt: '美丽校园风景'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: '多彩校园生活',
    description: '丰富的社团活动，完善的生活设施，让你的大学生活精彩纷呈。',
    mobileTitle: '校园生活',
    alt: '学生活动'
  }
])

// 轮播实例
let carouselInstance = null

// 图片加载错误处理
const handleImageError = (event, slide) => {
  console.warn(`图片加载失败: ${slide.image}`)
  // 使用石河子大学相关的占位图
  const fallbackImages = [
    'https://via.placeholder.com/1920x1080/C1272D/FFFFFF?text=石河子大学校门',
    'https://via.placeholder.com/1920x1080/1F4E79/FFFFFF?text=现代化图书馆',
    'https://via.placeholder.com/1920x1080/52C41A/FFFFFF?text=美丽校园风景',
    'https://via.placeholder.com/1920x1080/FAAD14/FFFFFF?text=多彩校园生活'
  ]

  const index = slides.value.findIndex(s => s.id === slide.id)
  if (index !== -1 && fallbackImages[index]) {
    event.target.src = fallbackImages[index]
    event.target.alt = `石河子大学${slide.alt}`
  }
}

// 暂停轮播
const pauseCarousel = () => {
  if (carouselInstance) {
    carouselInstance.pause()
  }
}

// 恢复轮播
const resumeCarousel = () => {
  if (carouselInstance) {
    carouselInstance.cycle()
  }
}

// 组件挂载时初始化轮播
onMounted(() => {
  const carouselElement = document.getElementById('mainCarousel')
  if (carouselElement) {
    carouselInstance = new Carousel(carouselElement, {
      interval: 3000,        // 3秒自动切换
      pause: 'hover',        // 鼠标悬停时暂停
      wrap: true,            // 循环播放
      keyboard: true,        // 支持键盘控制
      touch: true            // 支持触摸滑动
    })

    // 添加键盘事件监听
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        carouselInstance.prev()
      } else if (e.key === 'ArrowRight') {
        carouselInstance.next()
      }
    })
  }
})

// 组件卸载时清理
onBeforeUnmount(() => {
  if (carouselInstance) {
    carouselInstance.dispose()
  }
})
</script>

<style scoped>
.banner-carousel {
  margin: 24px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.carousel-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.carousel-item:hover .carousel-image {
  transform: scale(1.02);
}

.carousel-caption {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 48px;
  bottom: 0;
  left: 0;
  right: 0;
}

.carousel-caption h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.carousel-caption p {
  font-size: 18px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.mobile-caption {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 24px;
}

.mobile-caption h3 {
  font-size: 28px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.carousel-control-prev,
.carousel-control-next {
  width: 60px;
  opacity: 0.8;
  transition: all 0.15s ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 1;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 30px;
  height: 30px;
}

.carousel-indicators {
  bottom: 20px;
}

.carousel-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.8);
  transition: all 0.15s ease;
}

.carousel-indicators button.active {
  background-color: #C1272D;
  border-color: #C1272D;
  transform: scale(1.2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .carousel-image {
    height: 300px;
  }

  .carousel-caption {
    padding: 24px;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 20px;
    height: 20px;
  }
}

/* 加载动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.carousel-item.active .carousel-image {
  animation: fadeIn 0.6s ease-out;
}

/* 图片加载状态 */
.carousel-image {
  background-color: #f5f5f5;
}

.carousel-image[loading] {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* 无障碍支持 */
.carousel-control-prev:focus,
.carousel-control-next:focus,
.carousel-indicators button:focus {
  outline: 3px solid #C1272D;
  outline-offset: 2px;
}
</style>