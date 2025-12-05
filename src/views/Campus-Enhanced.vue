<!-- 增强版校园风光页面 - 使用真实石河子大学图片 -->
<template>
  <div class="campus-enhanced">
    <div class="container">
      <!-- 页面标题 -->
      <section class="page-hero">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 class="page-title">
                <i class="fas fa-university me-3"></i>
                校园风光
              </h1>
              <p class="page-subtitle">
                探索石河子大学的美丽校园，感受浓厚的学习氛围和丰富的校园文化
              </p>
              <div class="campus-stats">
                <div class="stat-card">
                  <i class="fas fa-tree"></i>
                  <div>
                    <h4>花园式校园</h4>
                    <p>绿化覆盖率40%+</p>
                  </div>
                </div>
                <div class="stat-card">
                  <i class="fas fa-building"></i>
                  <div>
                    <h4>现代化设施</h4>
                    <p>各类教学设施完善</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image">
              <img :src="panoramaImage.url" :alt="panoramaImage.alt" class="img-fluid rounded">
            </div>
          </div>
        </div>
      </section>

      <!-- 标签导航 -->
      <section class="campus-nav mb-5">
        <ul class="nav nav-pills justify-content-center" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              data-bs-toggle="pill"
              data-bs-target="#landmarks"
              type="button"
              role="tab"
            >
              <i class="fas fa-landmark me-2"></i><span>校园地标</span>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              data-bs-toggle="pill"
              data-bs-target="#landscapes"
              type="button"
              role="tab"
            >
              <i class="fas fa-mountain me-2"></i><span>自然景观</span>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              data-bs-toggle="pill"
              data-bs-target="#facilities"
              type="button"
              role="tab"
            >
              <i class="fas fa-dumbbell me-2"></i><span>生活设施</span>
            </button>
          </li>
        </ul>
      </section>

      <!-- 内容区域 -->
      <div class="tab-content">
        <!-- 校园地标 -->
        <div class="tab-pane fade show active" id="landmarks" role="tabpanel">
          <div class="landmarks-grid">
            <div
              v-for="landmark in landmarks"
              :key="landmark.id"
              class="landmark-card"
              @click="showImageModal(landmark)"
            >
              <div class="landmark-image">
                <img :src="landmark.url" :alt="landmark.alt" class="img-fluid">
                <div class="image-overlay">
                  <i class="fas fa-search-plus"></i>
                </div>
              </div>
              <div class="landmark-info">
                <h4>{{ landmark.title }}</h4>
                <p>{{ landmark.description }}</p>
                <div class="landmark-meta">
                  <span class="category">{{ landmark.category || '建筑设施' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 自然景观 -->
        <div class="tab-pane fade" id="landscapes" role="tabpanel">
          <div class="landscapes-showcase">
            <div class="row g-4">
              <div
                v-for="landscape in landscapes"
                :key="landscape.id"
                class="col-lg-4 col-md-6"
              >
                <div class="landscape-card" @click="showImageModal(landscape)">
                  <div class="landscape-image">
                    <img :src="landscape.url" :alt="landscape.alt" class="img-fluid">
                    <div class="image-overlay">
                      <div class="overlay-content">
                        <h5>{{ landscape.title }}</h5>
                        <p>{{ landscape.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 生活设施 -->
        <div class="tab-pane fade" id="facilities" role="tabpanel">
          <div class="facilities-section">
            <div class="row g-4">
              <div
                v-for="facility in facilities"
                :key="facility.id"
                class="col-md-6"
              >
                <div class="facility-card">
                  <div class="facility-image">
                    <img :src="facility.url" :alt="facility.alt" class="img-fluid">
                  </div>
                  <div class="facility-content">
                    <h4>{{ facility.title }}</h4>
                    <p>{{ facility.description }}</p>
                    <div class="facility-features">
                      <span class="feature-tag">
                        <i class="fas fa-check-circle me-1"></i>现代化设施
                      </span>
                      <span class="feature-tag">
                        <i class="fas fa-check-circle me-1"></i>24小时开放
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片模态框 -->
    <div
      class="modal fade"
      id="imageModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="imageModalTitle">{{ selectedImage?.title }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="关闭"
            ></button>
          </div>
          <div class="modal-body">
            <div class="image-display">
              <img
                v-if="selectedImage"
                :src="selectedImage.url"
                :alt="selectedImage.alt"
                class="img-fluid rounded"
              >
              <div class="image-details">
                <h6>{{ selectedImage?.title }}</h6>
                <p>{{ selectedImage?.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Modal } from 'bootstrap'
import { getOfficialImages } from '@/utils/officialImages.js'

// 获取各类图片
const landmarks = ref(getOfficialImages('landmarks'))
const landscapes = ref(getOfficialImages('landscapes'))
const facilities = ref(getOfficialImages('facilities'))
const panoramas = ref(getOfficialImages('panoramas'))

// 当前选中的图片
const selectedImage = ref(null)
let imageModal = null

// 获取全景图
const panoramaImage = ref(panoramas.value[0] || {
  url: '/images/official/landscapes/shzu-microwave-lake.jpg',
  alt: '石河子大学微波湖',
  source: '石河子大学官方摄影'
})

// 显示图片模态框
const showImageModal = (image) => {
  selectedImage.value = image
  if (imageModal) {
    imageModal.show()
  }
}

// 组件挂载
onMounted(() => {
  imageModal = new Modal(document.getElementById('imageModal'))

  // 添加页面加载动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.landmark-card, .landscape-card, .facility-card').forEach(card => {
    observer.observe(card)
  })
})
</script>

<style scoped>
.campus-enhanced {
  padding-top: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

/* 页面标题区域 */
.page-hero {
  padding: 60px 0;
  margin-bottom: 40px;
}

.hero-content .page-title {
  color: #1565c0;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.page-subtitle {
  color: #595959;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
}

.campus-stats {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.stat-card i {
  font-size: 2rem;
  color: #1565c0;
}

.stat-card h4 {
  margin: 0;
  color: #262626;
  font-size: 1.1rem;
}

.stat-card p {
  margin: 0;
  color: #8C8C8C;
  font-size: 0.9rem;
}

.hero-image {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.hero-image img {
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
}

.hero-image:hover img {
  transform: scale(1.05);
}

/* 标签导航 */
.campus-nav .nav-pills {
  background: white;
  padding: 10px;
  border-radius: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.campus-nav .nav-link {
  border-radius: 20px;
  padding: 14px 28px;
  margin: 0 4px;
  color: #666;
  background: #ffffff;
  border: 2px solid #e3f2fd;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
}

.campus-nav .nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  transition: left 0.4s ease;
  z-index: 0;
}

.campus-nav .nav-link:hover::before {
  left: 0;
}

.campus-nav .nav-link:hover {
  color: #1565c0 !important;
  border-color: #90caf9;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(21, 101, 192, 0.15);
}

.campus-nav .nav-link:hover i,
.campus-nav .nav-link:hover span {
  color: #1565c0 !important;
}

.campus-nav .nav-link.active {
  background: linear-gradient(135deg, #1565c0 0%, #42a5f5 100%);
  color: white !important;
  border-color: #1565c0;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(21, 101, 192, 0.25);
  position: relative;
  overflow: hidden;
}

.campus-nav .nav-link.active i,
.campus-nav .nav-link.active span {
  color: white !important;
}

.campus-nav .nav-link.active::before {
  display: none;
}

.campus-nav .nav-link.active::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
  z-index: 1;
}

.campus-nav .nav-link.active::after {
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.campus-nav .nav-link span {
  position: relative;
  z-index: 1;
}

/* 地标卡片 */
.landmarks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.landmark-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0;
  transform: translateY(30px);
}

.landmark-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.landmark-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.landmark-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.landmark-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.landmark-card:hover .landmark-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.landmark-card:hover .image-overlay {
  opacity: 1;
}

.image-overlay i {
  color: white;
  font-size: 2rem;
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.landmark-card:hover .image-overlay i {
  transform: scale(1);
}

.landmark-info {
  padding: 25px;
}

.landmark-info h4 {
  color: #262626;
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.landmark-info p {
  color: #595959;
  line-height: 1.6;
  margin-bottom: 15px;
}

.landmark-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
}

.category {
  background: linear-gradient(135deg, #1565c0, #42a5f5);
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-weight: 500;
}

/* 景观卡片 */
.landscape-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.landscape-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.landscape-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.landscape-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.landscape-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.landscape-card:hover .landscape-image img {
  transform: scale(1.1);
}

.landscape-image .image-overlay {
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.landscape-card:hover .image-overlay {
  opacity: 1;
}

.overlay-content h5 {
  color: white;
  margin: 0;
  font-size: 1.2rem;
}

.overlay-content p {
  color: rgba(255, 255, 255, 0.9);
  margin: 5px 0 0;
  font-size: 0.9rem;
}

/* 设施卡片 */
.facility-card {
  display: flex;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
}

.facility-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.facility-image {
  width: 40%;
  min-width: 150px;
}

.facility-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.facility-content {
  flex: 1;
  padding: 25px;
  display: flex;
  flex-direction: column;
}

.facility-content h4 {
  color: #262626;
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.facility-content p {
  color: #595959;
  line-height: 1.6;
  flex: 1;
}

.facility-features {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
}

.feature-tag {
  background: #f0f8ff;
  color: #1890FF;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* 图片模态框 */
.image-display {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.image-display img {
  flex: 1;
  min-width: 300px;
  max-width: 100%;
}

.image-details {
  flex: 1;
  min-width: 250px;
}

.image-details h6 {
  color: #262626;
  margin-bottom: 10px;
}

.image-details p {
  color: #595959;
  line-height: 1.6;
  margin-bottom: 20px;
}


/* 响应式设计 */
@media (max-width: 768px) {
  .page-hero {
    padding: 40px 0;
  }

  .campus-stats {
    justify-content: center;
  }

  .stat-card {
    flex: 1;
    min-width: 200px;
    justify-content: center;
  }

  .landmarks-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .facility-card {
    flex-direction: column;
  }

  .facility-image {
    width: 100%;
    height: 200px;
  }

  .image-display {
    flex-direction: column;
  }

  .image-display img {
    min-width: auto;
  }
}
</style>