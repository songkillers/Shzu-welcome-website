<!-- 校园风采页面 - 石河子大学迎新主题网页 -->

<template>
  <div class="campus-page">
    <div class="container">
      <!-- 页面标题 -->
      <section class="page-header text-center py-5">
        <h1 class="page-title">
          <i class="fas fa-university me-3"></i>
          校园风采
        </h1>
        <p class="page-subtitle">
          探索石河子大学的魅力校园，感受浓厚的学习氛围
        </p>
      </section>

      <!-- 校园地标 -->
      <section class="campus-landmarks py-5">
        <h2 class="section-title">
          <i class="fas fa-map-marker-alt me-3"></i>
          校园地标
        </h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3" v-for="landmark in landmarks" :key="landmark.id">
            <div class="landmark-card card-hover">
              <div class="landmark-image">
                <img :src="landmark.image" :alt="landmark.name">
                <div class="landmark-overlay">
                  <i :class="landmark.icon"></i>
                </div>
              </div>
              <div class="landmark-content">
                <h5>{{ landmark.name }}</h5>
                <p>{{ landmark.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 特色社团 -->
      <section class="student-clubs py-5">
        <h2 class="section-title">
          <i class="fas fa-users me-3"></i>
          特色社团
        </h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="club in clubs" :key="club.id">
            <div class="club-card card-hover">
              <div class="club-header">
                <div class="club-icon">
                  <i :class="club.icon"></i>
                </div>
                <div class="club-info">
                  <h5>{{ club.name }}</h5>
                  <span class="club-members">{{ club.members }} 成员</span>
                </div>
              </div>
              <div class="club-description">
                <p>{{ club.description }}</p>
              </div>
              <div class="club-activities">
                <h6>主要活动：</h6>
                <ul>
                  <li v-for="activity in club.activities" :key="activity">
                    {{ activity }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 办学成果 -->
      <section class="achievements py-5">
        <h2 class="section-title">
          <i class="fas fa-trophy me-3"></i>
          办学成果
        </h2>
        <div class="row">
          <div class="col-lg-8">
            <div class="achievement-content">
              <div class="achievement-item" v-for="achievement in achievements" :key="achievement.id">
                <div class="achievement-icon">
                  <i :class="achievement.icon"></i>
                </div>
                <div class="achievement-details">
                  <h5>{{ achievement.title }}</h5>
                  <p>{{ achievement.description }}</p>
                  <div class="achievement-stats">
                    <span v-for="stat in achievement.stats" :key="stat.label" class="stat-badge">
                      {{ stat.value }} {{ stat.label }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="achievement-stats-card">
              <h5>学校荣誉</h5>
              <div class="honor-list">
                <div v-for="honor in honors" :key="honor" class="honor-item">
                  <i class="fas fa-medal"></i>
                  <span>{{ honor }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// 校园地标数据
const landmarks = reactive([
  {
    id: 1,
    name: '主教学楼',
    icon: 'fas fa-graduation-cap',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: '学校标志性建筑，现代化的教学设施'
  },
  {
    id: 2,
    name: '图书馆',
    icon: 'fas fa-book',
    image: 'https://images.unsplash.com/photo-1561089489-f13d5e730197?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: '藏书丰富的现代化图书馆，24小时开放'
  },
  {
    id: 3,
    name: '体育馆',
    icon: 'fas fa-running',
    image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: '多功能体育场馆，满足各类运动需求'
  },
  {
    id: 4,
    name: '校史馆',
    icon: 'fas fa-history',
    image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: '展示学校发展历程，传承优良传统'
  }
])

// 特色社团数据
const clubs = reactive([
  {
    id: 1,
    name: '科技创新协会',
    icon: 'fas fa-robot',
    members: '200+',
    description: '致力于培养创新思维，开展科技实践活动',
    activities: ['机器人竞赛', '创新创业大赛', '科技讲座', '实验室开放日']
  },
  {
    id: 2,
    name: '文学艺术社',
    icon: 'fas fa-palette',
    members: '150+',
    description: '提供文学创作和艺术展示平台',
    activities: ['诗歌朗诵会', '书法绘画展', '文学沙龙', '戏剧表演']
  },
  {
    id: 3,
    name: '志愿者协会',
    icon: 'fas fa-hands-helping',
    members: '300+',
    description: '组织各类志愿服务活动，服务社会',
    activities: ['社区服务', '环保行动', '支教活动', '公益募捐']
  },
  {
    id: 4,
    name: '体育健身社',
    icon: 'fas fa-dumbbell',
    members: '250+',
    description: '推广体育文化，增强身体素质',
    activities: ['各类球赛', '健身培训', '户外拓展', '运动会']
  },
  {
    id: 5,
    name: '国际交流协会',
    icon: 'fas fa-globe',
    members: '100+',
    description: '促进中外文化交流，拓展国际视野',
    activities: ['文化交流节', '语言角', '国际讲座', '海外游学']
  },
  {
    id: 6,
    name: '创业就业协会',
    icon: 'fas fa-briefcase',
    members: '180+',
    description: '助力学生职业发展和创业实践',
    activities: ['职业规划', '创业指导', '企业参观', '招聘会']
  }
])

// 办学成果数据
const achievements = reactive([
  {
    id: 1,
    title: '学科建设',
    icon: 'fas fa-flask',
    description: '拥有多个国家级重点学科和特色专业，学科门类齐全',
    stats: [
      { value: '12', label: '国家级重点学科' },
      { value: '30+', label: '省级重点学科' },
      { value: '70+', label: '本科专业' }
    ]
  },
  {
    id: 2,
    title: '科研创新',
    icon: 'fas fa-microscope',
    description: '科研实力雄厚，承担多项国家级科研项目',
    stats: [
      { value: '1000+', label: '科研项目' },
      { value: '50+', label: '专利成果' },
      { value: '200+', label: '科研奖项' }
    ]
  },
  {
    id: 3,
    title: '人才培养',
    icon: 'fas fa-user-graduate',
    description: '培养了大量优秀人才，毕业生就业率高',
    stats: [
      { value: '95%', label: '就业率' },
      { value: '30万+', label: '毕业生' },
      { value: '1000+', label: '优秀校友' }
    ]
  }
])

// 学校荣誉
const honors = [
  '国家"211工程"重点建设高校',
  '国家"双一流"建设高校',
  '全国文明校园',
  '全国高校毕业生就业典型经验高校',
  '全国创新创业典型经验高校',
  '全国绿化模范单位'
]
</script>

<style scoped>
.campus-page {
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

/* 校园地标 */
.landmark-card {
  background: var(--surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  height: 100%;
}

.landmark-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.landmark-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.landmark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.landmark-overlay i {
  color: white;
  font-size: 48px;
}

.landmark-card:hover .landmark-image img {
  transform: scale(1.1);
}

.landmark-card:hover .landmark-overlay {
  opacity: 1;
}

.landmark-content {
  padding: var(--spacing-md);
}

.landmark-content h5 {
  color: var(--text-primary);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--spacing-sm);
}

.landmark-content p {
  color: var(--text-secondary);
  margin: 0;
  font-size: var(--text-sm);
}

/* 特色社团 */
.club-card {
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  height: 100%;
  border-left: 4px solid var(--info-color);
}

.club-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.club-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--info-color), var(--primary-light));
  color: white;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.club-info h5 {
  color: var(--text-primary);
  font-weight: var(--fw-semibold);
  margin: 0;
}

.club-members {
  color: var(--text-secondary);
  font-size: var(--text-sm);
}

.club-description p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: var(--lh-relaxed);
}

.club-activities h6 {
  color: var(--text-primary);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--spacing-sm);
  font-size: var(--text-sm);
}

.club-activities ul {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.club-activities li {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
  font-size: var(--text-sm);
}

/* 办学成果 */
.achievement-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.achievement-item {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.achievement-item:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-md);
}

.achievement-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--warning-color), var(--primary-color));
  color: white;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.achievement-details h5 {
  color: var(--text-primary);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--spacing-sm);
}

.achievement-details p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
}

.achievement-stats {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.stat-badge {
  background: rgba(193, 39, 45, 0.1);
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: var(--text-xs);
  font-weight: var(--fw-medium);
}

.achievement-stats-card {
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  color: white;
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  height: fit-content;
}

.achievement-stats-card h5 {
  font-size: var(--text-lg);
  font-weight: var(--fw-bold);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.honor-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.honor-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.honor-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(4px);
}

.honor-item i {
  color: var(--warning-color);
  font-size: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: var(--text-h1);
  }

  .club-header {
    flex-direction: column;
    text-align: center;
  }

  .achievement-item {
    flex-direction: column;
    text-align: center;
  }

  .achievement-stats {
    justify-content: center;
  }
}
</style>