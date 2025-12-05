<!-- 现代化FAQ组件 - 石河子大学迎新主题网页 -->
<!-- 手风琴式展开，覆盖高频疑问 -->
<!-- Font Awesome图标: CC BY 4.0协议 - https://fontawesome.com/license -->

<template>
  <div class="faq-container">
    <!-- 页面头部 -->
    <div class="faq-hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">常见问题解答</h1>
          <p class="hero-subtitle">为2026级新生解答最关心的问题，快速了解石河子大学</p>
        </div>
      </div>
      <div class="hero-decoration">
        <div class="floating-card" style="--delay: 0s;">
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div class="floating-card" style="--delay: 0.5s;">
          <i class="fas fa-home"></i>
        </div>
        <div class="floating-card" style="--delay: 1s;">
          <i class="fas fa-utensils"></i>
        </div>
      </div>
    </div>

    <!-- 快速筛选 -->
    <div class="faq-filters">
      <div class="filter-buttons">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="['filter-btn', { active: activeCategory === category.id }]"
          @click="filterByCategory(category.id)"
        >
          <i :class="category.icon"></i>
          <span>{{ category.name }}</span>
        </button>
      </div>
    </div>

    <!-- FAQ内容区域 -->
    <div class="faq-content">
      <div class="faq-main">
        <!-- FAQ列表 -->
        <div class="faq-list">
          <!-- 如果没有选中任何问题，显示所有问题 -->
          <template v-if="!activeItem">
            <div
              v-for="(faq, index) in filteredFAQs"
              :key="faq.id"
              class="faq-card"
              @click="toggleFAQ(faq.id)"
            >
              <div class="faq-header">
                <div class="faq-icon">
                  <i :class="faq.icon"></i>
                </div>
                <div class="faq-info">
                  <h3 class="faq-question">{{ faq.question }}</h3>
                  <div class="faq-meta">
                    <span class="faq-category-tag" :style="{ backgroundColor: categoryColors[faq.category] }">
                      {{ faq.category }}
                    </span>
                    <span class="faq-views">
                      <i class="fas fa-eye"></i>
                      {{ faq.views || Math.floor(Math.random() * 1000) + 100 }}
                    </span>
                  </div>
                </div>
                <div class="faq-toggle">
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </template>

          <!-- 如果选中了问题，只显示该问题的详细内容 -->
          <template v-else>
            <!-- 首先检查选中的问题是否存在于当前筛选结果中 -->
            <template v-if="filteredFAQs.some(f => f.id === activeItem)">
              <div
                v-for="(faq, index) in filteredFAQs.filter(f => f.id === activeItem)"
                :key="'active-' + faq.id"
                class="faq-card active"
              >
                <div class="faq-header" @click="toggleFAQ('')">
                  <div class="faq-icon">
                    <i :class="faq.icon"></i>
                  </div>
                  <div class="faq-info">
                    <h3 class="faq-question">{{ faq.question }}</h3>
                    <div class="faq-meta">
                      <span class="faq-category-tag" :style="{ backgroundColor: categoryColors[faq.category] }">
                        {{ faq.category }}
                      </span>
                      <span class="faq-views">
                        <i class="fas fa-eye"></i>
                        {{ faq.views || Math.floor(Math.random() * 1000) + 100 }}
                      </span>
                    </div>
                  </div>
                  <div class="faq-toggle open">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>

                <div class="faq-body show">
                  <div class="faq-answer-content" v-html="faq.answer"></div>

  
                  <!-- 帮助评价 -->
                  <div class="faq-feedback">
                    <div class="feedback-question">
                      <i class="fas fa-heart"></i>
                      这个回答对您有帮助吗？
                    </div>
                    <div class="feedback-buttons">
                      <button
                        class="feedback-btn helpful"
                        :class="{ active: helpfulRatings[faq.id] === true }"
                        @click.stop="markHelpful(faq.id, true)"
                      >
                        <i class="fas fa-thumbs-up"></i>
                        有帮助
                        <span v-if="faq.helpfulCount">({{ faq.helpfulCount }})</span>
                      </button>
                      <button
                        class="feedback-btn not-helpful"
                        :class="{ active: helpfulRatings[faq.id] === false }"
                        @click.stop="markHelpful(faq.id, false)"
                      >
                        <i class="fas fa-thumbs-down"></i>
                        需要改进
                        <span v-if="faq.notHelpfulCount">({{ faq.notHelpfulCount }})</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <!-- 如果选中的问题不在当前筛选结果中，显示提示 -->
            <div v-else class="no-results">
              <div class="no-results-icon">
                <i class="fas fa-exclamation-triangle"></i>
              </div>
              <h3>选中的问题不在当前筛选范围内</h3>
              <p>请尝试切换到其他分类或清除筛选条件</p>
              <button @click="filterByCategory('all')" class="back-to-all-btn">
                <i class="fas fa-arrow-left me-2"></i>
                返回全部问题
              </button>
            </div>
          </template>
        </div>

        <!-- 没有找到相关问题的提示 - 只在没有选中问题且没有结果时显示 -->
        <div v-if="!activeItem && filteredFAQs.length === 0" class="no-results">
          <div class="no-results-icon">
            <i class="fas fa-search"></i>
          </div>
          <h3>暂无相关问题</h3>
          <p>试试选择其他分类，或联系我们获取帮助</p>
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="faq-sidebar">
        <!-- 搜索框 -->
        <div class="search-card">
          <h4>
            <i class="fas fa-search"></i>
            搜索问题
          </h4>
          <div class="search-box">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="输入关键词搜索..."
              class="search-input"
            >
            <button class="search-btn">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

        <!-- 热门问题 -->
        <div class="popular-card">
          <h4>
            <i class="fas fa-fire"></i>
            热门问题
          </h4>
          <div class="popular-list">
            <div
              v-for="popular in popularFAQs"
              :key="popular.id"
              class="popular-item"
              @click="toggleFAQ(popular.id)"
            >
              <span class="popular-number">{{ popular.rank }}</span>
              <div class="popular-content">
                <h5>{{ popular.question }}</h5>
                <span class="popular-category">{{ popular.category }}</span>
              </div>
            </div>
          </div>
        </div>

        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// FAQ数据
const faqList = ref([
  {
    id: 'faq1',
    icon: 'fas fa-calendar-alt',
    category: '报到时间',
    question: '开学报到时间是什么时候？',
    answer: `
      <div class="answer-section">
        <p>2026级新生报到时间安排如下：</p>
        <div class="time-schedule">
          <div class="schedule-item">
            <i class="fas fa-graduation-cap"></i>
            <div class="schedule-content">
              <h4>本科新生</h4>
              <p>2026年9月1日-9月3日</p>
            </div>
          </div>
          <div class="schedule-item">
            <i class="fas fa-user-graduate"></i>
            <div class="schedule-content">
              <h4>研究生新生</h4>
              <p>2026年8月28日-8月30日</p>
            </div>
          </div>
          <div class="schedule-item">
            <i class="fas fa-globe"></i>
            <div class="schedule-content">
              <h4>国际学生</h4>
              <p>2026年8月25日-8月27日</p>
            </div>
          </div>
        </div>
        <div class="important-note">
          <i class="fas fa-exclamation-triangle"></i>
          <span>请务必按时报到，如有特殊情况需延迟报到，请提前联系学校招生办公室。</span>
        </div>
      </div>
    `,
    helpfulCount: 156,
    notHelpfulCount: 8,
    views: 2456
  },
  {
    id: 'faq2',
    icon: 'fas fa-home',
    category: '宿舍生活',
    question: '宿舍是几人间？有空调吗？',
    answer: `
      <div class="answer-section">
        <p>石河子大学提供多种宿舍类型供学生选择：</p>
        <div class="room-types">
          <div class="room-type luxury">
            <div class="room-header">
              <i class="fas fa-crown"></i>
              <h4>豪华双人间</h4>
              <span class="room-price">¥1000/年</span>
            </div>
            <ul>
              <li>配备独立卫浴</li>
              <li>空调、热水器齐全</li>
              <li>配备书桌、衣柜</li>
            </ul>
          </div>
          <div class="room-type standard">
            <div class="room-header">
              <i class="fas fa-users"></i>
              <h4>三人间标准宿舍</h4>
              <span class="room-price">¥1000/年</span>
            </div>
            <ul>
              <li>公共卫浴</li>
              <li>空调配备齐全</li>
              <li>个人储物空间</li>
            </ul>
          </div>
          <div class="room-type economy">
            <div class="room-header">
              <i class="fas fa-users"></i>
              <h4>六人间经济宿舍</h4>
              <span class="room-price">¥800/年</span>
            </div>
            <ul>
              <li>公共卫浴</li>
              <li>楼层公共空调</li>
              <li>经济实惠选择</li>
            </ul>
          </div>
        </div>
        <p class="note-info">宿舍采用自愿申请、随机分配的原则，新生可通过迎新系统查询分配结果。</p>
      </div>
    `,
    helpfulCount: 203,
    notHelpfulCount: 12,
    views: 3567
  },
  {
    id: 'faq3',
    icon: 'fas fa-running',
    category: '军训安排',
    question: '军训需要准备什么物品？',
    answer: `
      <div class="answer-section">
        <p>军训是大学生活的重要部分，建议准备以下物品：</p>
        <div class="prep-categories">
          <div class="prep-category">
            <div class="category-header">
              <i class="fas fa-tshirt"></i>
              <h4>服装类</h4>
            </div>
            <ul>
              <li>运动鞋2双（换着穿）</li>
              <li>吸汗的棉质袜子多双</li>
              <li>宽松的深色运动服</li>
              <li>防晒帽或头巾</li>
            </ul>
          </div>
          <div class="prep-category">
            <div class="category-header">
              <i class="fas fa-medkit"></i>
              <h4>防护类</h4>
            </div>
            <ul>
              <li>防晒霜（SPF50+）</li>
              <li>防中暑药品（藿香正气水等）</li>
              <li>创可贴、消毒液</li>
              <li>润喉糖、薄荷糖</li>
            </ul>
          </div>
          <div class="prep-category">
            <div class="category-header">
              <i class="fas fa-flask"></i>
              <h4>生活用品</h4>
            </div>
            <ul>
              <li>大号水壶（2L以上）</li>
              <li>毛巾、湿巾</li>
              <li>小风扇（便携式）</li>
              <li>针线包（防止衣服破损）</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    helpfulCount: 189,
    notHelpfulCount: 15,
    views: 2890
  },
  {
    id: 'faq4',
    icon: 'fas fa-utensils',
    category: '食堂餐饮',
    question: '食堂的饭菜价格如何？有哪些特色？',
    answer: `
      <div class="answer-section">
        <p>石河子大学拥有多个食堂，价格实惠、品种丰富：</p>
        <div class="canteen-grid">
          <div class="price-info">
            <h4><i class="fas fa-yuan-sign"></i>价格区间</h4>
            <div class="price-items">
              <div class="price-item">
                <span class="meal-type">早餐</span>
                <span class="price-range">3-8元</span>
              </div>
              <div class="price-item">
                <span class="meal-type">午餐</span>
                <span class="price-range">8-15元</span>
              </div>
              <div class="price-item">
                <span class="meal-type">晚餐</span>
                <span class="price-range">8-15元</span>
              </div>
            </div>
          </div>
          <div class="canteen-list">
            <h4><i class="fas fa-star"></i>食堂特色</h4>
            <div class="canteen-items">
              <div class="canteen-item">
                <span class="canteen-name">第一食堂</span>
                <span class="canteen-specialty">新疆特色菜、手抓饭、羊肉串</span>
              </div>
              <div class="canteen-item">
                <span class="canteen-name">第二食堂</span>
                <span class="canteen-specialty">川湘菜系、麻辣香锅</span>
              </div>
              <div class="canteen-item">
                <span class="canteen-name">第三食堂</span>
                <span class="canteen-specialty">粤菜、清淡口味、养生餐</span>
              </div>
              <div class="canteen-item">
                <span class="canteen-name">民族食堂</span>
                <span class="canteen-specialty">清真餐饮、新疆传统美食</span>
              </div>
            </div>
          </div>
        </div>
        <div class="payment-note">
          <i class="fas fa-info-circle"></i>
          <span>所有食堂支持校园卡支付，部分窗口支持微信、支付宝。</span>
        </div>
      </div>
    `,
    helpfulCount: 145,
    notHelpfulCount: 6,
    views: 1987
  },
  {
    id: 'faq5',
    icon: 'fas fa-clock',
    category: '提前到校',
    question: '可以提前到校熟悉环境吗？',
    answer: `
      <div class="answer-section">
        <p>关于提前到校的相关安排：</p>
        <div class="arrival-info">
          <div class="arrival-section allowed">
            <div class="section-header">
              <i class="fas fa-check-circle"></i>
              <h4>允许提前到校的情况</h4>
            </div>
            <ul>
              <li><strong>路途较远：</strong>新疆、西藏、青海等偏远地区</li>
              <li><strong>特殊情况：</strong>家庭有特殊困难需提前安排</li>
              <li><strong>迎新志愿者：</strong>被选为迎新志愿者的学生</li>
              <li><strong>特长生：</strong>体育、艺术特长生需提前训练</li>
            </ul>
          </div>
          <div class="arrival-section note">
            <div class="section-header">
              <i class="fas fa-lightbulb"></i>
              <h4>注意事项</h4>
            </div>
            <ul>
              <li>提前到校需向招生办公室提出申请</li>
              <li>最早可提前7天到校</li>
              <li>提前到校期间住宿需自行解决</li>
              <li>校园完全开放，可自由参观</li>
              <li>有志愿者提供校园导览服务</li>
            </ul>
          </div>
        </div>
        <p class="contact-note">如有提前到校需求，请至少提前3天联系学校招生办公室。</p>
      </div>
    `,
    helpfulCount: 98,
    notHelpfulCount: 4,
    views: 1456
  }
])

// 分类数据
const categories = ref([
  { id: 'all', name: '全部问题', icon: 'fas fa-th' },
  { id: '报到时间', name: '报到时间', icon: 'fas fa-calendar-alt' },
  { id: '宿舍生活', name: '宿舍生活', icon: 'fas fa-home' },
  { id: '军训安排', name: '军训安排', icon: 'fas fa-running' },
  { id: '食堂餐饮', name: '食堂餐饮', icon: 'fas fa-utensils' },
  { id: '提前到校', name: '提前到校', icon: 'fas fa-clock' }
])

// 分类颜色
const categoryColors = {
  '报到时间': '#1976d2',
  '宿舍生活': '#388e3c',
  '军训安排': '#d32f2f',
  '食堂餐饮': '#f57c00',
  '提前到校': '#7b1fa2'
}

// 响应式数据
const activeCategory = ref('all')
const activeItem = ref('')
const searchQuery = ref('')
const helpfulRatings = ref({})

// 计算属性
const filteredFAQs = computed(() => {
  let filtered = faqList.value

  // 按分类筛选
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(faq => faq.category === activeCategory.value)
  }

  // 按搜索词筛选
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(faq =>
      faq.question.toLowerCase().includes(query) ||
      faq.category.toLowerCase().includes(query)
    )
  }

  return filtered
})

const popularFAQs = computed(() => {
  return faqList.value
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5)
    .map((faq, index) => ({
      ...faq,
      rank: index + 1
    }))
})

// 方法
const filterByCategory = (categoryId) => {
  activeCategory.value = categoryId
  activeItem.value = ''
}

const toggleFAQ = (faqId) => {
  if (faqId === '') {
    // 如果传入空字符串，清空activeItem，回到列表视图
    activeItem.value = ''
  } else {
    // 切换问题显示状态
    if (activeItem.value === faqId) {
      // 如果点击的是当前已选中的问题，则清空选择，回到列表视图
      activeItem.value = ''
    } else {
      // 选择新问题
      activeItem.value = faqId

      // 增加浏览量
      const faq = faqList.value.find(item => item.id === faqId)
      if (faq) {
        faq.views = (faq.views || 0) + 1
      }
    }
  }
}

const markHelpful = (faqId, isHelpful) => {
  helpfulRatings.value[faqId] = isHelpful

  const faq = faqList.value.find(item => item.id === faqId)
  if (faq) {
    if (isHelpful) {
      faq.helpfulCount = (faq.helpfulCount || 0) + 1
    } else {
      faq.notHelpfulCount = (faq.notHelpfulCount || 0) + 1
    }
  }

  // 显示反馈提示
  const message = isHelpful ? '感谢您的反馈！' : '我们会持续改进回答质量'
  showToast(message, isHelpful ? 'success' : 'info')
}

const showToast = (message, type = 'success') => {
  const toast = document.createElement('div')
  toast.className = `modern-toast ${type}`
  toast.innerHTML = `
    <div class="toast-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
      <span>${message}</span>
    </div>
  `

  document.body.appendChild(toast)

  setTimeout(() => {
    toast.classList.add('show')
  }, 100)

  setTimeout(() => {
    toast.classList.remove('show')
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, 3000)
}

// 组件挂载
onMounted(() => {
  // 默认不展开任何FAQ，显示所有问题列表
  activeItem.value = ''
})
</script>

<style scoped>
/* FAQ容器 */
.faq-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e3f2fd 50%, #bbdefb 100%);
  padding: 40px 20px 20px 20px;
}

/* 英雄区域 */
.faq-hero {
  text-align: center;
  margin-bottom: 8px;
  position: relative;
  padding: 8px 0;
  background: linear-gradient(135deg, #1565c0 0%, #42a5f5 50%, #90caf9 100%);
  border-radius: 24px;
  color: white;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;
}

.hero-icon {
  font-size: 32px;
  animation: bounce 2s infinite;
  flex-shrink: 0;
}

.hero-text {
  flex: 1;
}

.hero-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 6px;
  background: linear-gradient(45deg, #ffffff, #e3f2fd);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-card {
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  animation: float 3s ease-in-out infinite;
  backdrop-filter: blur(10px);
}

.floating-card:nth-child(1) {
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.floating-card:nth-child(2) {
  bottom: 20%;
  right: 25%;
  animation-delay: 0.5s;
}

.floating-card:nth-child(3) {
  top: 30%;
  left: 10%;
  animation-delay: 1s;
}

/* 筛选按钮 */
.faq-filters {
  margin-bottom: 40px;
  text-align: center;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: nowrap;
  max-width: 900px;
  margin: 0 auto;
  overflow-x: auto;
  padding-bottom: 10px;
}

.filter-btn {
  background: white;
  border: 2px solid #e3f2fd;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #1976d2;
  white-space: nowrap;
  flex-shrink: 0;
}

.filter-btn:hover {
  border-color: #1976d2;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(25, 118, 210, 0.2);
}

.filter-btn.active {
  background: #1976d2;
  border-color: #1976d2;
  color: white;
  box-shadow: 0 8px 25px rgba(25, 118, 210, 0.3);
}

.filter-btn i {
  font-size: 18px;
}

/* 主内容区 */
.faq-content {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
}

/* FAQ列表 */
.faq-main {
  min-width: 0;
  margin-bottom: 0;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.faq-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e3f2fd;
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
}

.faq-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(25, 118, 210, 0.15);
  border-color: #1976d2;
}

.faq-card.active {
  border-color: #1976d2;
  box-shadow: 0 8px 30px rgba(25, 118, 210, 0.2);
}

.faq-header {
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.faq-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #1976d2, #42a5f5);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  flex-shrink: 0;
}

.faq-info {
  flex: 1;
  min-width: 0;
}

.faq-question {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1976d2;
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.faq-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.faq-category-tag {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: white;
}

.faq-views {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #64748b;
}

.faq-toggle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #64748b;
  transition: all 0.3s ease;
}

.faq-toggle.open {
  background: #1976d2;
  color: white;
  transform: rotate(180deg);
}

.faq-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-body.show {
  max-height: 1000px;
}

.faq-answer-content {
  padding: 0 24px 24px;
  color: #475569;
  line-height: 1.7;
  max-height: 480px;
  overflow-y: auto;
  padding-right: 12px;
}

/* 答案内容样式 */
.answer-section {
  max-width: 100%;
}

/* 答案内容滚动条样式 */
.faq-answer-content::-webkit-scrollbar {
  width: 6px;
}

.faq-answer-content::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.faq-answer-content::-webkit-scrollbar-thumb {
  background: #1976d2;
  border-radius: 3px;
}

.faq-answer-content::-webkit-scrollbar-thumb:hover {
  background: #1565c0;
}

.time-schedule {
  display: grid;
  gap: 12px;
  margin: 16px 0;
}

.schedule-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 3px solid #1976d2;
}

.schedule-item i {
  font-size: 20px;
  color: #1976d2;
  width: 28px;
}

.schedule-content h4 {
  margin: 0 0 4px 0;
  color: #1976d2;
  font-size: 1.1rem;
}

.schedule-content p {
  margin: 0;
  color: #64748b;
  font-weight: 500;
}

.important-note {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: #fff3cd;
  border-radius: 8px;
  border-left: 3px solid #ffc107;
  color: #856404;
  margin-top: 16px;
}

.room-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 16px 0;
}

.room-type {
  border-radius: 8px;
  padding: 16px;
  border: 2px solid #e3f2fd;
}

.room-type.luxury {
  background: linear-gradient(135deg, #fff9c4, #ffeb3b);
  border-color: #fbc02d;
}

.room-type.standard {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
  border-color: #66bb6a;
}

.room-type.economy {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-color: #42a5f5;
}

.room-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.room-header i {
  font-size: 20px;
  margin-right: 6px;
}

.room-header h4 {
  margin: 0;
  font-size: 1.1rem;
  flex: 1;
}

.room-price {
  background: rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
}

.room-type ul {
  margin: 0;
  padding-left: 20px;
}

.room-type li {
  margin-bottom: 4px;
}

.prep-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 16px 0;
}

.prep-category {
  background: #f8fafc;
  border-radius: 8px;
  padding: 16px;
  border-top: 3px solid #1976d2;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.category-header i {
  font-size: 20px;
  color: #1976d2;
}

.category-header h4 {
  margin: 0;
  color: #1976d2;
}

.canteen-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 16px 0;
}

.price-info, .canteen-list {
  background: #f8fafc;
  border-radius: 8px;
  padding: 16px;
}

.price-info h4, .canteen-list h4 {
  margin: 0 0 12px 0;
  color: #1976d2;
  display: flex;
  align-items: center;
  gap: 6px;
}

.price-item, .canteen-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid #e2e8f0;
}

.price-item:last-child, .canteen-item:last-child {
  border-bottom: none;
}

.meal-type {
  font-weight: 500;
  color: #475569;
}

.price-range {
  background: #1976d2;
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-weight: 500;
}

.canteen-name {
  font-weight: 500;
  color: #475569;
  min-width: 100px;
}

.canteen-specialty {
  color: #64748b;
  font-size: 14px;
  text-align: right;
  flex: 1;
}

.payment-note {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: #e3f2fd;
  border-radius: 8px;
  color: #1976d2;
  margin-top: 16px;
}

.arrival-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 16px 0;
}

.arrival-section {
  border-radius: 8px;
  padding: 16px;
}

.arrival-section.allowed {
  background: linear-gradient(135deg, #e8f5e8, #c8e6c9);
  border-left: 3px solid #66bb6a;
}

.arrival-section.note {
  background: linear-gradient(135deg, #fff3cd, #ffeaa7);
  border-left: 3px solid #ffc107;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.section-header i {
  font-size: 20px;
}

.arrival-section.allowed .section-header i {
  color: #66bb6a;
}

.arrival-section.note .section-header i {
  color: #ffc107;
}

.section-header h4 {
  margin: 0;
}

.arrival-section.allowed h4 {
  color: #2e7d32;
}

.arrival-section.note h4 {
  color: #f57c00;
}


/* 反馈区域 */
.faq-feedback {
  padding: 16px 24px;
  background: linear-gradient(135deg, #f8fafc, #e3f2fd);
  border-top: 1px solid #e2e8f0;
}

.feedback-question {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  color: #1976d2;
  margin-bottom: 12px;
}

.feedback-buttons {
  display: flex;
  gap: 8px;
}

.feedback-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 20px;
  background: white;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 13px;
  font-weight: 500;
}

.feedback-btn:hover {
  transform: translateY(-2px);
}

.feedback-btn.helpful:hover {
  border-color: #66bb6a;
  color: #66bb6a;
  box-shadow: 0 4px 12px rgba(102, 187, 106, 0.2);
}

.feedback-btn.helpful.active {
  background: #66bb6a;
  border-color: #66bb6a;
  color: white;
}

.feedback-btn.not-helpful:hover {
  border-color: #f57c00;
  color: #f57c00;
  box-shadow: 0 4px 12px rgba(245, 124, 0, 0.2);
}

.feedback-btn.not-helpful.active {
  background: #f57c00;
  border-color: #f57c00;
  color: white;
}

/* 侧边栏 */
.faq-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 0;
}

.search-card, .popular-card, .help-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e3f2fd;
}

.popular-card {
  margin-bottom: 0;
}

.search-card h4, .popular-card h4 {
  margin: 0 0 20px 0;
  color: #1976d2;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
}

.search-box {
  display: flex;
  gap: 8px;
}

.search-input {
  flex: 1;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #1976d2;
}

.search-btn {
  padding: 12px;
  background: #1976d2;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-btn:hover {
  background: #1565c0;
}

.popular-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 480px;
}

.popular-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.popular-item:hover {
  background: #e3f2fd;
  transform: translateX(4px);
}

.popular-number {
  width: 32px;
  height: 32px;
  background: #1976d2;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}

.popular-content {
  flex: 1;
  min-width: 0;
}

.popular-content h5 {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: #475569;
  line-height: 1.3;
}

.popular-category {
  font-size: 12px;
  color: #64748b;
}

/* 帮助卡片 */
.help-card {
  background: linear-gradient(135deg, #1976d2, #42a5f5);
  color: white;
  border: none;
}

.help-header {
  text-align: center;
  margin-bottom: 24px;
}

.help-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.help-card h4 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
}

.help-card p {
  margin: 0;
  opacity: 0.9;
  font-size: 14px;
}

.help-contacts {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.help-contacts .contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.contact-info h6 {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
}

.contact-info p {
  margin: 0;
  font-size: 12px;
  opacity: 0.9;
}

/* 无结果状态 */
.no-results {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.no-results-icon {
  font-size: 64px;
  color: #cbd5e1;
  margin-bottom: 16px;
}

.no-results h3 {
  margin: 0 0 8px 0;
  color: #64748b;
}

.no-results p {
  margin: 0 0 20px 0;
  color: #94a3b8;
}

.back-to-all-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: linear-gradient(135deg, #1e3c72 0%, #42a5f5 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.back-to-all-btn:hover {
  background: linear-gradient(135deg, #1565c0 0%, #2196f3 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(30, 60, 114, 0.3);
}

/* Toast通知 */
.modern-toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: white;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  z-index: 10000;
  transform: translateX(400px);
  transition: all 0.3s ease;
  border-left: 4px solid #66bb6a;
}

.modern-toast.show {
  transform: translateX(0);
}

.modern-toast.info {
  border-left-color: #1976d2;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-content i {
  font-size: 20px;
  color: #66bb6a;
}

.modern-toast.info .toast-content i {
  color: #1976d2;
}

/* 动画 */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .faq-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .faq-sidebar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .faq-container {
    padding: 20px 16px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .filter-buttons {
    gap: 6px;
    padding-bottom: 8px;
  }

  .filter-btn {
    padding: 8px 12px;
    font-size: 13px;
    gap: 4px;
  }

  .faq-header {
    padding: 20px;
    gap: 16px;
  }

  .faq-icon {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }

  .faq-question {
    font-size: 1.1rem;
  }

  .room-types {
    grid-template-columns: 1fr;
  }

  .prep-categories {
    grid-template-columns: 1fr;
  }

  .canteen-grid {
    grid-template-columns: 1fr;
  }

  .arrival-info {
    grid-template-columns: 1fr;
  }

  .feedback-buttons {
    flex-direction: column;
  }

  .floating-card {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }

  .faq-sidebar {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .faq-header {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .faq-meta {
    justify-content: center;
  }

  .search-box {
    flex-direction: column;
  }
}
</style>