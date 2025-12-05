<!-- 现代化首页设计 - 参考清华大学、北京大学等高校官网 -->
<template>
  <div class="home-modern">
    <!-- 使用真实石河子大学轮播图 -->
    <BannerCarousel-Official />

    <!-- 快速导航区域 -->
    <section class="quick-nav-section py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-3 col-md-6" v-for="(nav, index) in quickNavItems" :key="index">
            <router-link :to="nav.link" class="nav-item-modern">
              <div class="nav-icon">
                <i :class="nav.icon"></i>
              </div>
              <div class="nav-content">
                <h4>{{ nav.title }}</h4>
                <p>{{ nav.description }}</p>
                <span class="nav-link-text">
                  了解更多 <i class="fas fa-arrow-right ms-2"></i>
                </span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 新闻动态区域 -->
    <section class="news-section py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="news-main">
              <div class="section-header">
                <h2 class="section-title">
                  <i class="fas fa-newspaper me-3"></i>
                  新闻动态
                </h2>
                <router-link to="/news" class="view-all">
                  查看全部 <i class="fas fa-arrow-right ms-2"></i>
                </router-link>
              </div>
              <div class="news-grid">
                <article
                  v-for="(news, index) in newsItems"
                  :key="index"
                  class="news-card"
                  :class="{ 'featured': index === 0 }"
                >
                  <div class="news-image">
                    <img :src="news.image" :alt="news.title">
                    <span class="news-category">{{ news.category }}</span>
                  </div>
                  <div class="news-content">
                    <h3>{{ news.title }}</h3>
                    <p>{{ news.excerpt }}</p>
                    <div class="news-meta">
                      <span class="date">
                        <i class="far fa-calendar me-2"></i>{{ news.date }}
                      </span>
                      <span class="author">
                        <i class="far fa-user me-2"></i>{{ news.author }}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="news-sidebar">
              <!-- 通知公告 -->
              <div class="notice-box">
                <h3 class="sidebar-title">
                  <i class="fas fa-bullhorn me-2"></i>
                  通知公告
                </h3>
                <ul class="notice-list">
                  <li v-for="(notice, index) in noticeItems" :key="index">
                    <router-link :to="notice.link" class="notice-item">
                      <span class="notice-tag" :class="notice.type">{{ notice.type }}</span>
                      <span class="notice-title">{{ notice.title }}</span>
                      <span class="notice-date">{{ notice.date }}</span>
                    </router-link>
                  </li>
                </ul>
              </div>

              <!-- 活动日历 -->
              <div class="calendar-box mt-4">
                <h3 class="sidebar-title">
                  <i class="fas fa-calendar-alt me-2"></i>
                  重要活动
                </h3>
                <div class="event-list">
                  <div v-for="(event, index) in eventItems" :key="index" class="event-item">
                    <div class="event-date">
                      <span class="event-day">{{ event.day }}</span>
                      <span class="event-month">{{ event.month }}</span>
                    </div>
                    <div class="event-info">
                      <h5>{{ event.title }}</h5>
                      <p>{{ event.location }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 学院和专业展示 -->
    <section class="academics-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">
            <i class="fas fa-graduation-cap me-3"></i>
            学院设置
          </h2>
          <p class="section-subtitle">
            石河子大学设有20个学院，涵盖文、理、工、农、医、经、管、法、教、艺等十大学科门类
          </p>
        </div>
        <div class="colleges-grid">
          <div
            v-for="(college, index) in colleges"
            :key="index"
            class="college-card"
            @mouseenter="showCollegeDetail(index)"
            @mouseleave="hideCollegeDetail(index)"
          >
            <div class="college-icon">
              <i :class="college.icon"></i>
            </div>
            <h4>{{ college.name }}</h4>
            <p>{{ college.description }}</p>
            <div class="college-programs">
              <span v-for="program in college.programs.slice(0, 3)" :key="program" class="program-tag">
                {{ program }}
              </span>
              <span v-if="college.programs.length > 3" class="more-programs">
                +{{ college.programs.length - 3 }}个专业
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 校园生活 -->
    <section class="campus-life-section py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="life-content">
              <h2 class="section-title">
                <i class="fas fa-heart me-3"></i>
                丰富多彩的校园生活
              </h2>
              <p class="section-subtitle">
                从学术讲座到文艺演出，从体育竞技到志愿服务，石河子大学为你提供全面发展的平台
              </p>
              <div class="life-features">
                <div class="feature-item" v-for="feature in lifeFeatures" :key="feature.title">
                  <div class="feature-icon">
                    <i :class="feature.icon"></i>
                  </div>
                  <div class="feature-content">
                    <h4>{{ feature.title }}</h4>
                    <p>{{ feature.description }}</p>
                  </div>
                </div>
              </div>
              <router-link to="/campus-life" class="btn btn-primary btn-lg mt-4">
                探索校园生活 <i class="fas fa-arrow-right ms-2"></i>
              </router-link>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="life-gallery">
              <div class="gallery-grid">
                <div
                  v-for="(photo, index) in lifePhotos"
                  :key="index"
                  class="gallery-item"
                  :class="`item-${index + 1}`"
                >
                  <img :src="photo.url" :alt="photo.alt" class="img-fluid">
                  <div class="gallery-overlay">
                    <h5>{{ photo.title }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 招生信息 -->
    <section class="admissions-section py-5">
      <div class="container">
        <div class="admissions-content text-center">
          <h2 class="section-title mb-4">
            <i class="fas fa-user-plus me-3"></i>
            招生信息
          </h2>
          <div class="admissions-info">
            <div class="info-grid">
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-users"></i>
                </div>
                <h3>2024年招生计划</h3>
                <p class="highlight">预计招收本科生6000人</p>
                <p>涵盖12个学科门类</p>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-chart-line"></i>
                </div>
                <h3>就业情况</h3>
                <p class="highlight">就业率95%+</p>
                <p>专业对口率85%+</p>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-trophy"></i>
                </div>
                <h3>专业优势</h3>
                <p class="highlight">国家级特色专业8个</p>
                <p>省级重点专业12个</p>
              </div>
            </div>
            <div class="admissions-actions">
              <router-link to="/admissions" class="btn btn-primary btn-lg me-3">
                招生简章
              </router-link>
              <router-link to="/programs" class="btn btn-outline-primary btn-lg">
                专业介绍
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BannerCarouselOfficial from '@/components/BannerCarousel-Official.vue'
import { getOfficialImages } from '@/utils/officialImages.js'

// 快速导航数据
const quickNavItems = ref([
  {
    title: '校园风光',
    description: '探索美丽校园，了解石大环境',
    icon: 'fas fa-university',
    link: '/campus'
  },
  {
    title: '迎新指南',
    description: '新生报到流程，生活指南',
    icon: 'fas fa-book-open',
    link: '/guide'
  },
  {
    title: '专业介绍',
    description: '了解学科设置，专业特色',
    icon: 'fas fa-graduation-cap',
    link: '/programs'
  },
  {
    title: '校园生活',
    description: '学生活动，社团文化',
    icon: 'fas fa-users',
    link: '/campus-life'
  }
])

// 新闻动态数据
const newsItems = ref([
  {
    title: '石河子大学在2024年全国大学生数学建模竞赛中获佳绩',
    excerpt: '近日，2024年全国大学生数学建模竞赛获奖名单公布，石河子大学学子再创佳绩...',
    category: '学术新闻',
    date: '2024-11-20',
    author: '教务处',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: '石河子大学与新疆生产建设兵团签署战略合作协议',
    excerpt: '11月18日，石河子大学与新疆生产建设兵团战略合作签约仪式在学校举行...',
    category: '合作交流',
    date: '2024-11-18',
    author: '宣传部',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82a33ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: '2024年石河子大学秋季运动会圆满落幕',
    excerpt: '历时三天的2024年石河子大学秋季运动会于11月15日圆满落幕...',
    category: '校园动态',
    date: '2024-11-16',
    author: '体育部',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
])

// 通知公告数据
const noticeItems = ref([
  {
    title: '关于2024年冬季学期选课的通知',
    type: 'important',
    date: '2024-11-21',
    link: '#'
  },
  {
    title: '2024年学生评教工作安排',
    type: 'academic',
    date: '2024-11-20',
    link: '#'
  },
  {
    title: '图书馆寒假开放时间通知',
    type: 'info',
    date: '2024-11-19',
    link: '#'
  },
  {
    title: '校园网络安全意识培训通知',
    type: 'training',
    date: '2024-11-18',
    link: '#'
  }
])

// 活动日历数据
const eventItems = ref([
  {
    title: '学术讲座：人工智能发展趋势',
    location: '学术报告厅',
    day: '28',
    month: '11月'
  },
  {
    title: '创新创业大赛启动仪式',
    location: '大学生活动中心',
    day: '02',
    month: '12月'
  },
  {
    title: '冬季招聘会',
    location: '体育馆',
    day: '05',
    month: '12月'
  }
])

// 学院数据
const colleges = ref([
  {
    name: '机械电气工程学院',
    description: '培养机械、电气、自动化等领域高级专门人才',
    icon: 'fas fa-cogs',
    programs: ['机械工程', '电气工程', '自动化', '测控技术']
  },
  {
    name: '化学化工学院',
    description: '化学、化工、材料科学领域的教学科研基地',
    icon: 'fas fa-flask',
    programs: ['化学', '应用化学', '化学工程', '材料科学']
  },
  {
    name: '经济与管理学院',
    description: '经济管理类专业齐全，培养复合型管理人才',
    icon: 'fas fa-chart-line',
    programs: ['经济学', '管理学', '市场营销', '财务管理']
  },
  {
    name: '医学院',
    description: '培养医学、护理、药学等领域专业人才',
    icon: 'fas fa-heartbeat',
    programs: ['临床医学', '护理学', '药学', '医学影像']
  },
  {
    name: '信息科学与技术学院',
    description: '计算机、信息技术、网络安全等专业',
    icon: 'fas fa-laptop-code',
    programs: ['计算机科学', '软件工程', '网络工程', '数据科学']
  },
  {
    name: '文学艺术学院',
    description: '文学、艺术、传媒等人文社科类专业',
    icon: 'fas fa-palette',
    programs: ['汉语言文学', '新闻学', '美术学', '音乐学']
  }
])

// 校园生活特色
const lifeFeatures = ref([
  {
    title: '学生社团',
    description: '200多个学生社团，涵盖科技、文化、体育、志愿服务等领域',
    icon: 'fas fa-users'
  },
  {
    title: '学术讲座',
    description: '定期举办高水平学术讲座，邀请国内外知名专家学者',
    icon: 'fas fa-microphone'
  },
  {
    title: '体育竞技',
    description: '完善的体育设施，丰富的体育赛事，培养学生的团队精神',
    icon: 'fas fa-running'
  },
  {
    title: '志愿服务',
    description: '多样化的志愿服务项目，培养学生的社会责任感',
    icon: 'fas fa-hands-helping'
  }
])

// 校园生活照片
const lifePhotos = ref([
  {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: '学术讲座',
    title: '学术讲座'
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82a33ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: '社团活动',
    title: '社团活动'
  },
  {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: '体育竞赛',
    title: '体育竞赛'
  },
  {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    alt: '校园生活',
    title: '校园生活'
  }
])

// 学院详情展示
const showCollegeDetail = (index) => {
  // 可以添加悬停时的详细显示逻辑
}

const hideCollegeDetail = (index) => {
  // 隐藏详细显示
}
</script>

<style scoped>
.home-modern {
  padding-top: 60px;
}

/* 通用样式 */
.section-title {
  color: #C1272D;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.section-subtitle {
  color: #595959;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* 快速导航 */
.quick-nav-section {
  padding: 60px 0;
}

.nav-item-modern {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.nav-item-modern:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border-color: #C1272D;
}

.nav-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #C1272D, #D94045);
  color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.nav-content h4 {
  color: #262626;
  font-size: 1.3rem;
  margin-bottom: 8px;
  font-weight: 600;
}

.nav-content p {
  color: #595959;
  line-height: 1.5;
  margin-bottom: 12px;
  flex: 1;
}

.nav-link-text {
  color: #C1272D;
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

/* 新闻区域 */
.news-section {
  padding: 60px 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.view-all {
  color: #C1272D;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.news-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
}

.news-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.news-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.news-card.featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.news-card.featured .news-image {
  height: auto;
}

.news-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-category {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #C1272D;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.news-content {
  padding: 25px;
}

.news-content h3 {
  color: #262626;
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 600;
  line-height: 1.4;
}

.news-content p {
  color: #595959;
  line-height: 1.6;
  margin-bottom: 15px;
}

.news-meta {
  display: flex;
  gap: 15px;
  font-size: 0.9rem;
  color: #8C8C8C;
}

/* 侧边栏 */
.notice-box,
.calendar-box {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.sidebar-title {
  color: #262626;
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.notice-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.notice-item {
  display: block;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.notice-item:hover {
  background: #f8f9fa;
  padding-left: 10px;
}

.notice-item:last-child {
  border-bottom: none;
}

.notice-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 10px;
  width: 60px;
  text-align: center;
}

.notice-tag.important {
  background: #ffebee;
  color: #c62828;
}

.notice-tag.academic {
  background: #e3f2fd;
  color: #1565c0;
}

.notice-tag.info {
  background: #f3e5f5;
  color: #7b1fa2;
}

.notice-tag.training {
  background: #e8f5e8;
  color: #2e7d32;
}

.notice-title {
  color: #262626;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
}

.notice-date {
  color: #8C8C8C;
  font-size: 0.85rem;
}

.event-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.event-item {
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
}

.event-item:last-child {
  border-bottom: none;
}

.event-date {
  background: linear-gradient(135deg, #C1272D, #D94045);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
}

.event-day {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

.event-month {
  font-size: 0.8rem;
  opacity: 0.9;
}

.event-info h5 {
  color: #262626;
  margin-bottom: 5px;
  font-weight: 600;
}

.event-info p {
  color: #8C8C8C;
  margin: 0;
  font-size: 0.9rem;
}

/* 学院展示 */
.academics-section {
  padding: 80px 0;
}

.colleges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.college-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.college-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.college-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #C1272D, #D94045);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0 auto 20px;
}

.college-card h4 {
  color: #262626;
  margin-bottom: 10px;
  font-weight: 600;
}

.college-card p {
  color: #595959;
  line-height: 1.5;
  margin-bottom: 20px;
}

.college-programs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.program-tag {
  background: #f0f8ff;
  color: #1890FF;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.more-programs {
  background: #f8f9fa;
  color: #8C8C8C;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
}

/* 校园生活 */
.campus-life-section {
  padding: 80px 0;
}

.life-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin-bottom: 30px;
}

.feature-item {
  display: flex;
  gap: 15px;
}

.feature-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #C1272D, #D94045);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.feature-content h4 {
  color: #262626;
  margin-bottom: 5px;
  font-weight: 600;
}

.feature-content p {
  color: #595959;
  margin: 0;
  font-size: 0.9rem;
}

.life-gallery {
  position: relative;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  height: 400px;
}

.gallery-item {
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-item.item-1,
.gallery-item.item-4 {
  grid-column: span 2;
}

.gallery-item:hover {
  transform: scale(1.02);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 20px;
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-overlay h5 {
  margin: 0;
  font-weight: 600;
}

/* 招生信息 */
.admissions-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.info-item {
  text-align: center;
  padding: 40px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
}

.info-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #C1272D, #D94045);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 20px;
}

.info-item h3 {
  color: #262626;
  margin-bottom: 10px;
  font-weight: 600;
}

.info-item p {
  color: #595959;
  margin-bottom: 5px;
}

.info-item .highlight {
  color: #C1272D;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.admissions-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .news-card.featured {
    grid-template-columns: 1fr;
  }

  .life-features {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    height: 300px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
}
</style>