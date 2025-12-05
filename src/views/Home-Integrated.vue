<!-- 全新主页设计 - 整合所有内容，石河子大学官网风格 -->
<template>
  <div class="home-integrated">
    <!-- 英雄轮播区域 -->
    <section class="hero-section">
      <div class="hero-carousel">
        <div
          id="mainCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-pause="hover"
        >
          <!-- 轮播指示器 -->
          <div class="carousel-indicators">
            <button
              v-for="(slide, index) in heroSlides"
              :key="index"
              type="button"
              :data-bs-target="'#mainCarousel'"
              :data-bs-slide-to="index"
              :class="{ active: index === 0 }"
            ></button>
          </div>

          <!-- 轮播内容 -->
          <div class="carousel-inner">
            <div
              v-for="(slide, index) in heroSlides"
              :key="index"
              :class="['carousel-item', { active: index === 0 }]"
            >
              <div class="hero-slide" :style="{ backgroundImage: `url(${slide.url})` }">
                <div class="hero-overlay"></div>
                <div class="hero-content">
                  <div class="container">
                    <div class="row align-items-start justify-content-start" style="height: calc(90vh - 20px); padding-top: 5vh;">
                      <div class="col-lg-7">
                        <h1 class="hero-title">{{ slide.title }}</h1>
                        <p class="hero-subtitle">{{ slide.description }}</p>
                        <!-- 只在第一张图片显示"开启求学之旅"按钮 -->
                        <div v-if="index === 0" class="hero-actions">
                          <button class="btn-shzu btn-lg me-3">
                            <i class="fas fa-graduation-cap me-2"></i>
                            开启求学之旅
                          </button>
                        </div>
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
            :data-bs-target="'#mainCarousel'"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            :data-bs-target="'#mainCarousel'"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      <!-- 快速统计 -->
      <div class="hero-stats">
        <div class="container">
          <div class="row g-4">
            <div class="col-6 col-md-3" v-for="stat in stats" :key="stat.label">
              <div class="stat-card">
                <div class="stat-number">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 快速导航区域 -->
    <section class="quick-nav-section py-5" style="margin-top: -5vh;">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          <i class="fas fa-compass me-3"></i>
          快速导航
        </h2>
        <div class="nav-grid">
          <div
            v-for="(nav, index) in navItems"
            :key="nav.id"
            class="nav-item"
            @click="navigateTo(nav)"
          >
            <div class="nav-icon">
              <i :class="nav.icon"></i>
            </div>
            <h4>{{ nav.title }}</h4>
            <p>{{ nav.description }}</p>
            <div class="nav-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 学校概况部分 -->
    <section class="school-overview-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 class="section-title">
            <i class="fas fa-university me-3"></i>
            学校概况
          </h2>
          <p class="section-subtitle">石河子大学 · 211工程 · 双一流</p>
        </div>

        <div class="school-overview-content">
          <!-- 学校基本信息 -->
          <div class="school-basic-info">
            <div class="info-header">
              <h3 class="school-name">石河子大学</h3>
              <p class="school-english">Shihezi University</p>
              <div class="school-badge">
                <span class="badge-item">国家"211工程"重点建设高校</span>
                <span class="badge-item">国家"双一流"建设高校</span>
                <span class="badge-item">教育部与新疆生产建设兵团共建</span>
              </div>
            </div>

            <div class="info-description">
              <p class="school-intro">
                石河子大学创建于1949年，前身是中国人民解放军第一野战军军政干部学校，
                坐落在被誉为"戈壁明珠"的石河子市。历经70余年的建设与发展，
                学校已成为一所具有鲜明军垦特色、涵盖11大学科门类的多科性综合性大学，
                为国家培养了大量优秀人才，为区域经济社会发展作出了重要贡献。
              </p>
            </div>
          </div>

          <!-- 统计数据 -->
          <div class="school-statistics">
            <div class="stats-container">
              <div class="stat-item">
                <i class="fas fa-map-marked-alt"></i>
                <span>5个校区</span>
              </div>
              <div class="stat-item">
                <i class="fas fa-expand-arrows-alt"></i>
                <span>2800+亩占地面积</span>
              </div>
              <div class="stat-item">
                <i class="fas fa-user-graduate"></i>
                <span>30000+在校生</span>
              </div>
              <div class="stat-item">
                <i class="fas fa-chalkboard-teacher"></i>
                <span>2100+教职工</span>
              </div>
            </div>
          </div>

          <!-- 学术实力 -->
          <div class="academic-section">
            <div class="academic-header">
              <h3 class="academic-title">
                <i class="fas fa-graduation-cap"></i>
                学术实力
              </h3>
              <p class="academic-subtitle">深厚的学术底蕴与卓越的科研能力</p>
            </div>
            <div class="academic-cards">
              <div class="academic-card">
                <div class="academic-card-header">
                  <div class="academic-icon">
                    <i class="fas fa-book-open"></i>
                  </div>
                  <div class="academic-card-number">11</div>
                </div>
                <div class="academic-card-content">
                  <h4>学科门类</h4>
                  <p>涵盖经济学、法学、教育学、文学、历史学、理学、工学、农学、医学、管理学、艺术学等11大学科门类，形成了以工、农、医为优势，多学科协调发展的学科体系。其中化学工程与技术、农业工程为国家重点学科，临床医学、作物学等学科在国内具有重要影响力。</p>
                  <div class="academic-highlights">
                    <div class="highlight-item">
                      <i class="fas fa-star"></i>
                      <span>国家重点学科4个</span>
                    </div>
                    <div class="highlight-item">
                      <i class="fas fa-award"></i>
                      <span>省部级重点学科15个</span>
                    </div>
                  </div>
                  <div class="academic-tags">
                    <span class="tag">门类齐全</span>
                    <span class="tag">综合发展</span>
                    <span class="tag">优势突出</span>
                  </div>
                </div>
              </div>
              <div class="academic-card">
                <div class="academic-card-header">
                  <div class="academic-icon">
                    <i class="fas fa-trophy"></i>
                  </div>
                  <div class="academic-card-number">5+</div>
                </div>
                <div class="academic-card-content">
                  <h4>优势学科</h4>
                  <p>化学工程与技术、农业工程、作物学、临床医学等学科在国内具有重要影响力和竞争优势。其中化学工程与技术在第四轮全国学科评估中获评B+，农业工程、作物学、临床医学等学科在西部地区具有显著优势，为区域经济社会发展提供了强有力的人才支撑。</p>
                  <div class="academic-highlights">
                    <div class="highlight-item">
                      <i class="fas fa-chart-line"></i>
                      <span>学科评估B+以上5个</span>
                    </div>
                    <div class="highlight-item">
                      <i class="fas fa-medal"></i>
                      <span>西部领先学科3个</span>
                    </div>
                  </div>
                  <div class="academic-tags">
                    <span class="tag">国内领先</span>
                    <span class="tag">重点学科</span>
                    <span class="tag">区域优势</span>
                  </div>
                </div>
              </div>
              <div class="academic-card">
                <div class="academic-card-header">
                  <div class="academic-icon">
                    <i class="fas fa-flask"></i>
                  </div>
                  <div class="academic-card-number">20+</div>
                </div>
                <div class="academic-card-content">
                  <h4>科研平台</h4>
                  <p>拥有省部共建协同创新中心、国家重点实验室培育基地、国家地方联合工程研究中心等多个国家级和省部级科研创新平台。建有国家大学科技园、省部共建国家重点实验室培育基地等重要科研机构，为科技创新和成果转化提供了强有力的支撑。</p>
                  <div class="academic-highlights">
                    <div class="highlight-item">
                      <i class="fas fa-microscope"></i>
                      <span>国家级平台5个</span>
                    </div>
                    <div class="highlight-item">
                      <i class="fas fa-building"></i>
                      <span>省部级平台15个</span>
                    </div>
                  </div>
                  <div class="academic-tags">
                    <span class="tag">国家级</span>
                    <span class="tag">创新平台</span>
                    <span class="tag">产学研结合</span>
                  </div>
                </div>
              </div>
              <div class="academic-card">
                <div class="academic-card-header">
                  <div class="academic-icon">
                    <i class="fas fa-users"></i>
                  </div>
                  <div class="academic-card-number">100+</div>
                </div>
                <div class="academic-card-content">
                  <h4>师资力量</h4>
                  <p>现有中国工程院院士、长江学者特聘教授、国家杰出青年科学基金获得者等高端人才100余人，享受政府特殊津贴专家50余人。拥有博士学位教师1500余人，具有海外留学经历教师800余人，形成了一支结构合理、素质优良的师资队伍。</p>
                  <div class="academic-highlights">
                    <div class="highlight-item">
                      <i class="fas fa-user-tie"></i>
                      <span>中国工程院院士2人</span>
                    </div>
                    <div class="highlight-item">
                      <i class="fas fa-user-graduate"></i>
                      <span>长江学者20+人</span>
                    </div>
                  </div>
                  <div class="academic-tags">
                    <span class="tag">院士领衔</span>
                    <span class="tag">名师荟萃</span>
                    <span class="tag">国际化</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 办学特色 -->
          <div class="features-section">
            <div class="features-header">
              <h3 class="features-title">
                <i class="fas fa-star"></i>
                办学特色
              </h3>
              <p class="features-subtitle">独具特色的办学理念与发展模式</p>
            </div>
            <div class="feature-cards">
              <div class="feature-card">
                <div class="feature-icon-wrapper">
                  <div class="feature-icon">
                    <i class="fas fa-flag"></i>
                  </div>
                  <div class="feature-bg-icon">
                    <i class="fas fa-flag"></i>
                  </div>
                </div>
                <div class="feature-content">
                  <h4>军垦传承</h4>
                  <p>传承红色基因，弘扬兵团精神，培养具有家国情怀的优秀人才，形成独特的校园文化氛围</p>
                  <div class="feature-tags">
                    <span class="feature-tag">红色基因</span>
                    <span class="feature-tag">兵团精神</span>
                    <span class="feature-tag">家国情怀</span>
                  </div>
                </div>
              </div>
              <div class="feature-card">
                <div class="feature-icon-wrapper">
                  <div class="feature-icon">
                    <i class="fas fa-globe"></i>
                  </div>
                  <div class="feature-bg-icon">
                    <i class="fas fa-globe"></i>
                  </div>
                </div>
                <div class="feature-content">
                  <h4>国际化办学</h4>
                  <p>与美国、俄罗斯、哈萨克斯坦等多个国家的高校建立广泛深入的合作关系</p>
                  <div class="feature-tags">
                    <span class="feature-tag">国际合作</span>
                    <span class="feature-tag">交流互鉴</span>
                    <span class="feature-tag">全球视野</span>
                  </div>
                </div>
              </div>
              <div class="feature-card">
                <div class="feature-icon-wrapper">
                  <div class="feature-icon">
                    <i class="fas fa-industry"></i>
                  </div>
                  <div class="feature-bg-icon">
                    <i class="fas fa-industry"></i>
                  </div>
                </div>
                <div class="feature-content">
                  <h4>产学研结合</h4>
                  <p>深度融入区域发展，为新疆生产建设兵团和地方经济社会发展提供有力支撑</p>
                  <div class="feature-tags">
                    <span class="feature-tag">产教融合</span>
                    <span class="feature-tag">服务地方</span>
                    <span class="feature-tag">实践创新</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 校训展示 -->
          <div class="motto-section">
            <div class="motto-decoration motif-left">
              <div class="decoration-line"></div>
              <div class="decoration-dot"></div>
            </div>

            <div class="motto-content">
              <div class="motto-wrapper">
                <div class="motto-icon-left">
                  <i class="fas fa-quote-left"></i>
                </div>
                <div class="motto-text">明德正行 · 博学多能</div>
                <div class="motto-icon-right">
                  <i class="fas fa-quote-right"></i>
                </div>
              </div>
              <p class="motto-explanation">
                <span class="motto-prefix">校训体现了</span>
                <span class="motto-philosophy">"以德为先、以行为本、博学笃行、多能并进"</span>
                <span class="motto-suffix">的育人理念</span>
              </p>
            </div>

            <div class="motto-decoration motif-right">
              <div class="decoration-dot"></div>
              <div class="decoration-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 新闻动态和通知公告部分 -->
    <section class="news-announcements-section py-5">
      <div class="container">
        <!-- 独立的标题区域 -->
        <div class="news-titles-header">
          <div class="row">
            <div class="col-lg-6">
              <div class="title-block">
                <h3 class="main-title">
                  <i class="fas fa-newspaper me-2"></i>
                  新闻动态
                </h3>
                <router-link to="/news" class="title-more">
                  查看全部 <i class="fas fa-angle-double-right"></i>
                </router-link>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="title-block">
                <h3 class="main-title">
                  <i class="fas fa-bullhorn me-2"></i>
                  通知公告
                </h3>
                <router-link to="/announcements" class="title-more">
                  查看全部 <i class="fas fa-angle-double-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- 新闻内容区域 -->
        <div class="row">
          <!-- 新闻动态内容 -->
          <div class="col-lg-6">
            <div class="news-content-panel">
              <div class="announcement-list">
                <div
                  v-for="(news, index) in newsItems"
                  :key="index"
                  class="announcement-item"
                  @click="openNews(news)"
                >
                  <div class="announcement-date">
                    <span class="announcement-day">{{ news.day }}</span>
                    <span class="announcement-month">{{ news.month }}</span>
                  </div>
                  <div class="announcement-info">
                    <h4 class="announcement-title">{{ news.title }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 通知公告内容 -->
          <div class="col-lg-6">
            <div class="announcement-content-panel">
              <div class="announcement-list">
                <div
                  v-for="(announcement, index) in announcementItems"
                  :key="index"
                  class="announcement-item"
                  @click="openAnnouncement(announcement)"
                >
                  <div class="announcement-date">
                    <span class="announcement-day">{{ announcement.day }}</span>
                    <span class="announcement-month">{{ announcement.month }}</span>
                  </div>
                  <div class="announcement-info">
                    <h4 class="announcement-title">{{ announcement.title }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  
    
    <!-- 学院专业展示 -->
    <section class="academics-section py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          <i class="fas fa-graduation-cap me-3"></i>
          学院专业
        </h2>
        <div class="academics-grid">
          <div v-for="(college, index) in colleges" :key="index" class="college-card">
            <div class="college-header">
              <div class="college-icon">
                <i :class="college.icon"></i>
              </div>
              <h4>{{ college.name }}</h4>
              <span class="college-type">{{ college.type }}</span>
            </div>
            <div class="college-content">
              <p>{{ college.description }}</p>
              <div class="majors-preview">
                <span v-for="major in college.majors.slice(0, 3)" :key="major" class="major-tag">
                  {{ major }}
                </span>
                <span v-if="college.majors.length > 3" class="major-more">
                  +{{ college.majors.length - 3 }}
                </span>
              </div>
            </div>
            <div class="college-footer">
              <span class="programs-count">{{ college.majors.length }} 个专业</span>
              <button class="btn-shzu-outline btn-sm">查看详情</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 学生生活 -->
    <section class="student-life-section py-5 bg-shzu-gray">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          <i class="fas fa-users me-3"></i>
          学生生活
        </h2>
        <div class="life-features">
          <div class="life-feature-row">
            <div v-for="(feature, index) in studentLife.slice(0, 3)" :key="index" class="life-feature">
              <div class="feature-icon">
                <i :class="feature.icon"></i>
              </div>
              <h5>{{ feature.title }}</h5>
              <p>{{ feature.description }}</p>
              <div class="feature-stats">
                <span v-for="stat in feature.stats" :key="stat.label" class="stat-item">
                  <strong>{{ stat.value }}</strong> {{ stat.label }}
                </span>
              </div>
            </div>
          </div>
          <div class="life-feature-row">
            <div v-for="(feature, index) in studentLife.slice(3, 6)" :key="index" class="life-feature">
              <div class="feature-icon">
                <i :class="feature.icon"></i>
              </div>
              <h5>{{ feature.title }}</h5>
              <p>{{ feature.description }}</p>
              <div class="feature-stats">
                <span v-for="stat in feature.stats" :key="stat.label" class="stat-item">
                  <strong>{{ stat.value }}</strong> {{ stat.label }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 科研成果 -->
    <section class="research-section py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          <i class="fas fa-microscope me-3"></i>
          科研成果
        </h2>
        <div class="research-highlights">
          <div class="research-stats-row">
            <div v-for="(stat, index) in researchStats" :key="index" class="research-stat">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
          <!-- 重点项目 -->
          <div class="research-projects">
            <h3 class="subsection-title text-center mb-4">重点项目</h3>
            <div class="projects-grid">
              <div v-for="(project, index) in researchProjects" :key="index" class="project-card">
                <div class="project-category">{{ project.category }}</div>
                <h5>{{ project.title }}</h5>
                <p>{{ project.description }}</p>
                <div class="project-meta">
                  <span class="project-funding">经费: {{ project.funding }}</span>
                  <span class="project-duration">{{ project.duration }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 学术成就 -->
          <div class="research-achievements mt-5">
            <h3 class="subsection-title text-center mb-4">学术成就</h3>
            <div class="projects-grid">
              <div v-for="(achievement, index) in achievements" :key="index" class="project-card">
                <div class="project-category">学术成就</div>
                <h5>{{ achievement.title }}</h5>
                <p>{{ achievement.description }}</p>
                <div class="project-meta">
                  <span class="project-funding">年份: {{ achievement.year }}</span>
                  <span class="project-duration">获得时间: {{ achievement.year }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 校友风采 -->
    <section class="alumni-section py-5 bg-shzu-gray">
      <div class="container">
        <h2 class="section-title text-center mb-5">
          <i class="fas fa-star me-3"></i>
          校友风采
        </h2>
        <div class="alumni-showcase">
          <div class="featured-alumni">
            <div v-for="(alumni, index) in featuredAlumni" :key="index" class="alumni-card">
              <div class="alumni-photo">
                <img :src="alumni.photo" :alt="alumni.name" />
                <div class="alumni-overlay">
                  <i class="fas fa-quote-left"></i>
                </div>
              </div>
              <div class="alumni-info">
                <h5>{{ alumni.name }}</h5>
                <span class="alumni-role">{{ alumni.role }}</span>
                <span class="alumni-year">{{ alumni.graduation }}届</span>
                <p class="alumni-quote">{{ alumni.quote }}</p>
                <div class="alumni-achievements">
                  <span v-for="achievement in alumni.achievements" :key="achievement" class="achievement-badge">
                    {{ achievement }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="alumni-stats">
            <div class="stat-circle">
              <div class="circle-progress">
                <span class="progress-number">95%</span>
              </div>
              <p>就业率</p>
            </div>
            <div class="stat-circle">
              <div class="circle-progress">
                <span class="progress-number">30万+</span>
              </div>
              <p>校友总数</p>
            </div>
            <div class="stat-circle">
              <div class="circle-progress">
                <span class="progress-number">500+</span>
              </div>
              <p>知名企业校友</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部行动召唤 -->
    <section class="cta-section py-5">
      <div class="container text-center">
        <h2 class="section-title mb-4">
          开启你的大学之旅
        </h2>
        <p class="section-subtitle mb-5">
          石河子大学欢迎2026级新生，期待你的加入
        </p>
        <div class="cta-actions">
          <button class="btn-shzu btn-lg me-3" @click="navigateTo({ path: '/guide' })">
            <i class="fas fa-compass me-2"></i>
            迎新指南
          </button>
          <button class="btn-shzu-outline btn-lg" @click="navigateTo({ path: '/interaction' })">
            <i class="fas fa-comments me-2"></i>
            新生互动
          </button>
        </div>
      </div>
    </section>

    <!-- 图片模态框 -->
    <div class="modal fade" id="imageModal" tabindex="-1">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedImage?.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-0">
            <img v-if="selectedImage" :src="selectedImage.url" :alt="selectedImage.title" class="img-fluid">
          </div>
          <div class="modal-footer">
            <p class="text-muted">{{ selectedImage?.description }}</p>
            <button type="button" class="btn-shzu-outline" data-bs-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Modal } from 'bootstrap'
import { getSHZUImages } from '@/utils/imageData.js'
import '@/assets/css/shzu-theme.css'

const router = useRouter()

// 轮播图数据
const heroSlides = ref([
  {
    url: '/images/official/carousel/shzu-gate.jpg',
    title: '欢迎来到石河子大学',
    description: '开启求学之旅，探索知识的殿堂'
  },
  {
    url: '/images/official/carousel/shzu-library.jpg',
    title: '现代化图书馆',
    description: '丰富的藏书资源，为你的学术追求提供支持'
  },
  {
    url: '/images/official/carousel/shzu-campus-sunset.jpg',
    title: '美丽的校园环境',
    description: '四季分明的景色，营造良好的学习氛围'
  },
  {
    url: '/images/official/carousel/shzu-stadium.jpg',
    title: '完善的体育设施',
    description: '促进德智体美劳全面发展'
  }
])

// 统计数据
const stats = ref([
  { value: '70+', label: '本科专业' },
  { value: '3万+', label: '在校学生' },
  { value: '2000+', label: '教职工' },
  { value: '70+', label: '办学历史' }
])

// 导航数据
const navItems = ref([
  {
    id: 'campus',
    title: '校园风光',
    description: '探索美丽校园',
    icon: 'fas fa-university',
    detailTitle: '校园地标与景观',
    detailDesc: '查看石河子大学的标志性建筑、自然景观和校园环境',
    path: '/campus'
  },
  {
    id: 'guide',
    title: '迎新指南',
    description: '新生报到指引',
    icon: 'fas fa-book-open',
    detailTitle: '新生入学指南',
    detailDesc: '详细的报到流程、住宿安排、缴费指南等信息',
    path: '/guide'
  },
  {
    id: 'interaction',
    title: '新生互动',
    description: '留言交流答疑',
    icon: 'fas fa-comments',
    detailTitle: '互动交流平台',
    detailDesc: '与学长学姐交流，分享经验，解答疑问',
    path: '/interaction'
  },
  {
    id: 'contact',
    title: '联系方式',
    description: '咨询答疑通道',
    icon: 'fas fa-phone-alt',
    detailTitle: '联系信息',
    detailDesc: '招生办电话、邮箱、地址等联系方式',
    path: '/contact'
  }
])

// 新闻数据
const newsItems = ref([
  {
    title: '出征！208支团队将奔赴全国各地开展"返家乡"招生宣传社会实践...',
    date: '2025-01-04',
    day: '04',
    month: '2025-01'
  },
  {
    title: '关于石河子大学2025年寒假大学生"返家乡" "优秀学子回访母校"社会实践活动报名的通知',
    date: '2024-12-20',
    day: '20',
    month: '2024-12'
  },
  {
    title: '关于开展2025年寒假大学生"返家乡"社会实践"优秀学子回访母校"活动的通知',
    date: '2024-11-27',
    day: '27',
    month: '2024-11'
  },
  {
    title: '2024年高考录取结果查询方式',
    date: '2024-07-11',
    day: '11',
    month: '2024-07'
  },
  {
    title: '新疆考生填报石河子大学2024年计算机科学与技术专业定向班...',
    date: '2024-06-27',
    day: '27',
    month: '2024-06'
  },
  ])

// 通知公告
const notices = ref([
  {
    type: 'important',
    typeText: '重要',
    title: '关于2024年冬季学期选课的通知',
    content: '2024年冬季学期选课工作即将开始，请同学们提前做好准备。',
    date: '2024-11-21'
  },
  {
    type: 'academic',
    typeText: '教务',
    title: '2024年学生评教工作安排',
    content: '本学期学生评教工作定于第12周进行，请同学们认真对待。',
    date: '2024-11-20'
  },
  {
    type: 'info',
    typeText: '通知',
    title: '图书馆寒假开放时间通知',
    content: '寒假期间图书馆将调整开放时间，请同学们注意查看具体安排。',
    date: '2024-11-19'
  }
])

// 校园图片
const campusImages = ref({
  landmarks: getSHZUImages('landmarks').slice(0, 6),
  scenery: getSHZUImages('landscapes').slice(0, 6),
  facilities: getSHZUImages('facilities').slice(0, 6)
})

// 学院数据
const colleges = ref([
  {
    name: '化学化工学院',
    type: '工科学院',
    icon: 'fas fa-flask',
    description: '设有化学工程与工艺、应用化学、环境工程、材料科学与工程和化学（师范类）5个本科专业，化学工程与工艺专业入选教育部卓越工程师培养计划。',
    majors: ['化学工程与工艺', '应用化学', '环境工程', '材料科学与工程', '化学（师范类）']
  },
  {
    name: '机械电气工程学院',
    type: '工科学院',
    icon: 'fas fa-cogs',
    description: '培养机械工程和电气工程领域的专业技术人才，拥有先进的实验设备和实践教学基地。',
    majors: ['机械设计制造及其自动化', '电气工程及其自动化', '农业机械化及其自动化', '车辆工程']
  },
  {
    name: '信息科学与技术学院',
    type: '工科学院',
    icon: 'fas fa-laptop-code',
    description: '（网络空间安全学院）培养信息技术和网络安全领域的专业人才，拥有完善的计算机实验教学体系。',
    majors: ['计算机科学与技术', '软件工程', '网络工程', '网络空间安全', '数据科学与大数据技术']
  },
  {
    name: '农学院',
    type: '农科学院',
    icon: 'fas fa-seedling',
    description: '服务现代农业发展，培养农业科技人才，设有农学、园艺、植物保护等专业。',
    majors: ['农学', '园艺', '植物保护', '农业资源与环境', '智慧农业']
  },
  {
    name: '动物科技学院',
    type: '农科学院',
    icon: 'fas fa-horse',
    description: '开设动物医学、动物科学2个本科专业，均入选国家一流专业建设点，动物医学为国家级特色专业。',
    majors: ['动物医学', '动物科学']
  },
  {
    name: '医学院',
    type: '医学院',
    icon: 'fas fa-stethoscope',
    description: '致力于培养优秀医学人才，拥有多家附属医院和先进的医学教学实验中心。',
    majors: ['临床医学', '护理学', '口腔医学', '预防医学', '医学影像学']
  },
  {
    name: '药学院',
    type: '医学院',
    icon: 'fas fa-pills',
    description: '培养药学专业人才，拥有完善的药学实验教学体系和科研平台。',
    majors: ['药学', '药物制剂']
  },
  {
    name: '师范学院',
    type: '师范学院',
    icon: 'fas fa-graduation-cap',
    description: '培养教育领域的专业人才，设有教育学、学前教育、教育技术学、小学教育、应用心理学等专业。',
    majors: ['教育学', '学前教育', '教育技术学', '小学教育', '应用心理学']
  },
  {
    name: '理学院',
    type: '理科学院',
    icon: 'fas fa-atom',
    description: '注重基础科学研究，涵盖数学、物理、化学等基础学科，培养具有扎实理论基础的科研人才。',
    majors: ['数学与应用数学', '物理学', '应用物理学', '应用化学']
  },
  {
    name: '经济与管理学院',
    type: '文科学院',
    icon: 'fas fa-chart-line',
    description: '培养具有国际视野的经济管理人才，涵盖经济学、管理学等多个学科领域。',
    majors: ['经济学', '工商管理', '会计学', '金融学', '市场营销', '人力资源管理']
  },
  {
    name: '生命科学学院',
    type: '理科学院',
    icon: 'fas fa-dna',
    description: '致力于生命科学领域的研究和人才培养，拥有先进的生物学实验设备和科研平台。',
    majors: ['生物科学', '生物技术']
  },
  {
    name: '水利建筑工程学院',
    type: '工科学院',
    icon: 'fas fa-water',
    description: '培养水利工程和建筑工程领域的专业技术人才，服务新疆及西部地区的水利建设。',
    majors: ['水利水电工程', '土木工程', '建筑学', '工程管理']
  }
])

// 学生生活数据
const studentLife = ref([
  {
    title: '学生社团',
    description: '100+个学生社团，涵盖学术、文体、公益等各类活动',
    icon: 'fas fa-users',
    stats: [
      { value: '100+', label: '社团数量' },
      { value: '5000+', label: '参与学生' }
    ]
  },
  {
    title: '体育运动',
    description: '完善的体育设施，丰富的体育赛事，促进身心健康',
    icon: 'fas fa-running',
    stats: [
      { value: '20+', label: '运动队伍' },
      { value: '50+', label: '体育设施' }
    ]
  },
  {
    title: '国际交流',
    description: '与世界多所知名大学建立合作关系，提供海外学习机会',
    icon: 'fas fa-globe',
    stats: [
      { value: '30+', label: '合作院校' },
      { value: '200+', label: '交流项目' }
    ]
  },
  {
    title: '创新创业',
    description: '鼓励学生创新创业，提供创业孵化平台和资金支持',
    icon: 'fas fa-lightbulb',
    stats: [
      { value: '50+', label: '创业团队' },
      { value: '1000万+', label: '创业基金' }
    ]
  },
  {
    title: '志愿服务',
    description: '开展各类志愿服务活动，培养学生的社会责任感',
    icon: 'fas fa-hands-helping',
    stats: [
      { value: '10000+', label: '服务时长' },
      { value: '200+', label: '志愿项目' }
    ]
  },
  {
    title: '文化艺术',
    description: '丰富的文化艺术活动，提升学生的艺术修养和文化素养',
    icon: 'fas fa-palette',
    stats: [
      { value: '20+', label: '艺术团体' },
      { value: '100+', label: '文化活动' }
    ]
  }
])

// 科研统计数据
const researchStats = ref([
  { number: '2', label: '省部共建国家重点实验室培育基地' },
  { number: '2', label: '教育部重点实验室' },
  { number: '2', label: '农业农村部重点实验室' },
  { number: '1', label: '国家卫生健康委重点实验室' },
  { number: '4637+', label: '国家级科研项目' }
])

// 重点项目数据
const researchProjects = ref([
  {
    title: '化工绿色过程兵团重点实验室',
    category: '省部共建国家重点实验室培育基地',
    description: '专注于氯碱化工清洁生产与产品高值化技术研究，通过科技部组织的省部共建国家重点实验室培育基地验收。',
    funding: '5000万元',
    duration: '2020-2025'
  },
  {
    title: '绿洲生态农业兵团重点实验室',
    category: '省部共建国家重点实验室培育基地',
    description: '2004年通过科技部验收，依托石河子大学建设，实行开放、流动、联合、竞争的运行机制，吸引疆内外优秀科研人才。',
    funding: '3000万元',
    duration: '2004-至今'
  },
  {
    title: '新疆地方与民族高发病教育部重点实验室',
    category: '教育部重点实验室',
    description: '成功获批国际科技合作基地，与北京大学心血研究所联合挂牌成立心血管研究基地，开展地方病防控研究。',
    funding: '2000万元',
    duration: '2019-2024'
  },
  {
    title: '现代农业机械兵团重点实验室',
    category: '兵团重点实验室',
    description: '2020年兵团科技局评估成绩优秀，主持科研项目207项，服务新疆农业现代化发展。',
    funding: '1500万元',
    duration: '2021-2026'
  }
])

// 学术成就数据
const achievements = ref([
  {
    title: '国家级教学成果奖',
    description: '作为第一完成单位获得国家级教学成果二等奖，体现了学校在教学改革和人才培养方面的突出贡献',
    icon: 'fas fa-trophy',
    year: '2024'
  },
  {
    title: '高水平学术论文发表',
    description: '学校教师在国内外重要学术期刊发表大量研究论文，多个学科领域的研究成果获得学术界认可',
    icon: 'fas fa-flask',
    year: '2023'
  },
    {
    title: '省部级科技奖励',
    description: '获得多项省部级科学技术奖励，在农业科技、工程技术等领域的研究成果得到认可',
    icon: 'fas fa-award',
    year: '2022'
  },
  {
    title: '重点实验室建设',
    description: '获批建设多个省部共建和省部级重点实验室，为科研发展提供重要平台支撑',
    icon: 'fas fa-building',
    year: '2024'
  }
])

// 校友风采数据
const featuredAlumni = ref([
  {
    name: '侯国俊',
    role: '企业领导',
    graduation: '1990',
    photo: '/images/alumni/侯国俊.webp',
    quote: '石河子大学培养了我实业报国的理想，现致力于企业发展和社会贡献。',
    achievements: ['石河子天业股份公司董事长', '企业家', '社会贡献者']
  },
  {
    name: '陈小江',
    role: '医学专家',
    graduation: '1995',
    photo: '/images/alumni/陈小江.webp',
    quote: '石河子大学为我奠定了医学基础，现致力于病毒医学研究。',
    achievements: ['美国南加州大学终身教授', '病毒医学专家', '国际知名学者']
  },
  {
    name: '刘江',
    role: '农业专家',
    graduation: '1985',
    photo: '/images/alumni/刘江.webp',
    quote: '母校培养了我服务农业的初心，为国家农业发展贡献力量。',
    achievements: ['原农业部部长', '农业发展专家', '政策制定者']
  },
  {
    name: '谢庆生',
    role: '政府官员',
    graduation: '1988',
    photo: '/images/alumni/谢庆生.webp',
    quote: '在石河子大学的学习经历为我服务社会奠定了坚实基础。',
    achievements: ['贵州省副省长', '公共管理专家', '社会发展推动者']
  }
])

// 选中的图片
const selectedImage = ref(null)
let imageModal = null
let carouselInstance = null

// 导航方法
const navigateTo = (item) => {
  if (item.id === 'contact') {
    // 联系方式跳转到外部链接
    window.open('https://www.shzu.edu.cn/119/list.htm', '_blank')
  } else if (item.path) {
    router.push(item.path)
  }
}

// 显示导航详情

// 显示图片模态框
const showImageModal = (image) => {
  selectedImage.value = image
  if (imageModal) {
    imageModal.show()
  }
}

// 查看新闻
const openNews = (news) => {
  console.log('查看新闻:', news)
}

// 通知公告数据
const announcementItems = ref([
  {
    title: '《石河子大学普通本科学生转专业管理办法》',
    date: '2024-01-08',
    day: '08',
    month: '2024-01'
  },
  {
    title: '2024年湖北招生专业选考科目（3+1+2模式）',
    date: '2024-05-31',
    day: '31',
    month: '2024-05'
  },
  {
    title: '2024年黑龙江招生专业选考科目（3+1+2模式）',
    date: '2024-05-31',
    day: '31',
    month: '2024-05'
  },
  {
    title: '2024年吉林招生专业选考科目（3+1+2模式）',
    date: '2024-05-31',
    day: '31',
    month: '2024-05'
  },
  {
    title: '2024年河北招生专业选考科目（3+1+2模式）',
    date: '2024-05-31',
    day: '31',
    month: '2024-05'
  },
  ])

// 查看通知
const viewNotice = (notice) => {
  console.log('查看通知:', notice)
}

// 打开通知公告详情
const openAnnouncement = (announcement) => {
  console.log('查看通知公告:', announcement)
}

// 手动控制轮播图的方法
const prevSlide = () => {
  if (carouselInstance) {
    carouselInstance.prev()
  }
}

const nextSlide = () => {
  if (carouselInstance) {
    carouselInstance.next()
  }
}

const goToSlide = (index) => {
  if (carouselInstance) {
    carouselInstance.to(index)
  }
}


// 组件挂载
onMounted(() => {
  // 等待DOM完全加载后初始化轮播图
  setTimeout(() => {
    try {
      const carouselElement = document.getElementById('mainCarousel')
      if (carouselElement) {
        // 使用全局的 bootstrap 对象
        carouselInstance = new window.bootstrap.Carousel(carouselElement, {
          interval: 5000,
          pause: 'hover',
          wrap: true,
          keyboard: true,
          touch: true
        })
        console.log('轮播图初始化成功')
      }

      // 初始化图片模态框
      const modalElement = document.getElementById('imageModal')
      if (modalElement) {
        imageModal = new window.bootstrap.Modal(modalElement)
        console.log('模态框初始化成功')
      }
    } catch (error) {
      console.error('初始化错误:', error)
    }
  }, 200)
})

// 组件卸载时清理事件监听器
onUnmounted(() => {
  if (carouselInstance) {
    carouselInstance.dispose()
    carouselInstance = null
  }
  if (imageModal) {
    imageModal.dispose()
    imageModal = null
  }
})
</script>

<style scoped>
/* 全局样式 */
.home-integrated {
  font-family: var(--shzu-font-family);
  color: var(--shzu-text-primary);
}

/* 英雄轮播区域 */
.hero-section {
  position: relative;
  margin-top: 0; /* 移除margin，因为导航栏已经是fixed */
}

.hero-carousel {
  position: relative;
  height: 90vh;
  min-height: 600px;
  overflow: hidden;
}

.hero-slide {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center bottom;
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
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
}

/* 覆盖Bootstrap轮播组件的默认样式 */
.carousel-inner {
  height: 100% !important;
}

.carousel-item {
  height: 100% !important;
}

.hero-title {
  color: white;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--shzu-space-6);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: var(--shzu-space-8);
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: var(--shzu-space-4);
}


/* 响应式设计 */
@media (max-width: 768px) {
  
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  /* 快速导航移动端优化 */
  .nav-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .nav-item {
    padding: 20px;
  }

  .nav-item:hover {
    transform: translateY(-8px) scale(1.01);
  }

  .nav-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .nav-item:hover .nav-icon {
    transform: scale(1.05) rotate(3deg);
  }

  .nav-item h4 {
    font-size: 1rem;
  }

  .nav-item p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  
  .hero-title {
    font-size: 1.5rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  
  /* 快速导航小屏幕优化 */
  .nav-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .nav-item {
    padding: 16px;
  }

  .nav-item:hover {
    transform: translateY(-6px) scale(1.005);
    box-shadow: 0 12px 24px rgba(33, 150, 243, 0.1);
  }

  .nav-icon {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }

  .nav-item:hover .nav-icon {
    transform: scale(1.03) rotate(2deg);
  }

  .nav-item h4 {
    font-size: 0.95rem;
  }

  .nav-item p {
    font-size: 0.8rem;
  }

  /* 禁用小屏幕上的复杂动画 */
  .nav-item::before {
    display: none;
  }

  .nav-item:hover .nav-arrow {
    animation: none;
  }
}

.hero-stats {
  position: absolute;
  bottom: 0vh;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  padding: var(--shzu-space-8) 0 var(--shzu-space-6);
  z-index: 2;
}

.stat-card {
  text-align: center;
  padding: var(--shzu-space-6);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--shzu-radius);
  backdrop-filter: blur(10px);
  transition: transform var(--shzu-duration-300) var(--shzu-ease-out);
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-number {
  font-size: var(--shzu-text-3xl);
  font-weight: 700;
  color: var(--shzu-accent-gold);
  margin-bottom: var(--shzu-space-2);
}

.stat-label {
  color: white;
  font-size: var(--shzu-text-sm);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 导航区域 */
.quick-nav-section {
  padding: var(--shzu-space-16) 0;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--shzu-space-6);
}

.nav-item {
  background: var(--shzu-bg-primary);
  border-radius: var(--shzu-radius-xl);
  padding: var(--shzu-space-8);
  text-align: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid var(--shzu-border);
  position: relative;
  overflow: hidden;
}

.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.1), transparent);
  transition: left 0.6s ease;
}

.nav-item:hover::before {
  left: 100%;
}

.nav-item:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(33, 150, 243, 0.15);
  border-color: var(--shzu-primary);
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
}

.nav-item:active {
  transform: translateY(-6px) scale(1.01);
  transition: all 0.1s ease;
}

.nav-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--shzu-space-4);
  background: var(--shzu-bg-gradient);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--shzu-text-2xl);
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.3);
}

.nav-item:hover .nav-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 35px rgba(33, 150, 243, 0.5);
  background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 50%, #2196f3 100%);
}

.nav-item h4 {
  color: var(--shzu-text-primary);
  font-size: var(--shzu-text-lg);
  margin-bottom: var(--shzu-space-3);
  font-weight: 600;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.nav-item p {
  color: var(--shzu-text-secondary);
  margin-bottom: var(--shzu-space-4);
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.nav-item:hover h4 {
  color: var(--shzu-primary);
  transform: translateY(-2px);
}

.nav-item:hover p {
  color: rgba(33, 150, 243, 0.8);
  transform: translateY(-1px);
}

.nav-arrow {
  color: var(--shzu-primary);
  opacity: 0;
  transform: translateX(10px) translateY(2px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  font-size: 1.1rem;
}

.nav-item:hover .nav-arrow {
  opacity: 1;
  transform: translateX(0) translateY(0);
  animation: bounce-right 2s infinite;
}

@keyframes bounce-right {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(0) translateY(0);
  }
  40% {
    transform: translateX(-3px) translateY(0);
  }
  60% {
    transform: translateX(2px) translateY(0);
  }
}

/* 内容区域 */
.section-title {
  color: var(--shzu-primary);
  font-size: var(--shzu-text-3xl);
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--shzu-space-8);
}

.section-subtitle {
  font-size: var(--shzu-text-xl);
  color: var(--shzu-text-secondary);
  text-align: center;
  margin-bottom: var(--shzu-space-6);
}

.view-all-link {
  color: var(--shzu-primary);
  text-decoration: none;
  font-size: var(--shzu-text-sm);
  display: flex;
  align-items: center;
  gap: var(--shzu-space-2);
  margin-left: auto;
}

.view-all-link:hover {
  color: var(--shzu-primary-light);
}

.bg-shzu-gray {
  background-color: var(--shzu-gray-7);
}

.content-section {
  padding: var(--shzu-space-16) 0;
}

.content-card {
  background: var(--shzu-bg-primary);
  border-radius: var(--shzu-radius-xl);
  padding: var(--shzu-space-8);
  box-shadow: var(--shzu-shadow);
  height: 100%;
}

/* 学校概况样式 */
.school-intro {
  max-width: 100%;
}

.intro-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--shzu-primary-light);
}

.intro-title {
  color: var(--shzu-primary);
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.intro-subtitle {
  color: var(--shzu-text-secondary);
  font-size: 1.1rem;
  font-style: italic;
  margin: 0;
}

.intro-description {
  margin-bottom: 2rem;
}

.intro-text {
  color: var(--shzu-text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1rem;
}

/* 学校统计数据 */
.school-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f1ff 100%);
  border-radius: 16px;
  border: 1px solid var(--shzu-primary-light);
}

.stat-item {
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--shzu-primary);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  color: var(--shzu-text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

/* 学术实力 */
.academic-highlights {
  margin-bottom: 2rem;
}

.highlights-title {
  color: var(--shzu-primary);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.highlights-title::before {
  content: '';
  width: 4px;
  height: 24px;
  background: var(--shzu-primary);
  border-radius: 2px;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.highlight-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--shzu-border-light);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(33, 150, 243, 0.15);
  border-color: var(--shzu-primary-light);
}

.highlight-icon {
  width: 50px;
  height: 50px;
  background: var(--shzu-primary-light);
  color: var(--shzu-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.highlight-card:hover .highlight-icon {
  background: var(--shzu-primary);
  color: white;
  transform: scale(1.1);
}

.highlight-content h6 {
  color: var(--shzu-text-primary);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.highlight-content p {
  color: var(--shzu-text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

/* 办学特色 */
.school-features {
  margin-bottom: 2rem;
}

.features-title {
  color: var(--shzu-primary);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.features-title::before {
  content: '';
  width: 4px;
  height: 24px;
  background: var(--shzu-primary);
  border-radius: 2px;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--shzu-border-light);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateX(10px);
  box-shadow: 0 4px 15px rgba(33, 150, 243, 0.1);
  border-color: var(--shzu-primary-light);
}

.feature-icon {
  width: 40px;
  height: 40px;
  background: var(--shzu-primary-light);
  color: var(--shzu-primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.feature-item:hover .feature-icon {
  background: var(--shzu-primary);
  color: white;
  transform: scale(1.1) rotate(5deg);
}

.feature-text strong {
  color: var(--shzu-text-primary);
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.feature-text p {
  color: var(--shzu-text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

/* 校训 */
.school-motto {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, var(--shzu-primary-light) 0%, #e8f1ff 100%);
  border-radius: 16px;
  border: 1px solid var(--shzu-primary-light);
}

.motto-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.motto-icon {
  color: var(--shzu-primary);
  font-size: 1rem;
  opacity: 0.7;
}

.motto-text {
  color: var(--shzu-primary);
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.1em;
}

.motto-explanation {
  color: var(--shzu-text-secondary);
  font-size: 0.9rem;
  margin: 0;
  font-style: italic;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .intro-title {
    font-size: 1.8rem;
  }

  .school-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .highlight-card {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
  }

  .feature-item:hover {
    transform: none;
  }

  .motto-text {
    font-size: 1.4rem;
  }
}

/* 新闻列表 */
.news-list {
  display: flex;
  flex-direction: column;
  gap: var(--shzu-space-4);
}

.news-item {
  display: flex;
  gap: var(--shzu-space-4);
  padding: var(--shzu-space-4) 0;
  border-bottom: 1px solid var(--shzu-border-light);
  cursor: pointer;
  transition: all var(--shzu-duration-200) var(--shzu-ease-out);
}

.news-item:hover {
  padding-left: var(--shzu-space-2);
}

.news-item:last-child {
  border-bottom: none;
}

.news-date {
  width: 80px;
  flex-shrink: 0;
  color: var(--shzu-text-tertiary);
  font-size: var(--shzu-text-xs);
  text-align: center;
  padding-top: var(--shzu-space-1);
}

.news-content {
  flex: 1;
}

.news-content h5 {
  color: var(--shzu-text-primary);
  margin-bottom: var(--shzu-space-2);
  font-weight: 600;
  cursor: pointer;
}

.news-content p {
  color: var(--shzu-text-secondary);
  margin-bottom: var(--shzu-space-2);
  line-height: 1.6;
  cursor: pointer;
}

.news-meta {
  display: flex;
  gap: var(--shzu-space-4);
}

.category {
  background: var(--shzu-bg-accent);
  color: var(--shzu-primary);
  padding: var(--shzu-space-1) var(--shzu-space-3);
  border-radius: var(--shzu-radius);
  font-size: var(--shzu-text-xs);
  font-weight: 500;
}

/* 校园风光 */
.campus-section {
  padding: var(--shzu-space-16) 0;
}

.campus-tabs .nav-pills {
  background: var(--shzu-bg-primary);
  padding: var(--shzu-space-2);
  border-radius: var(--shzu-radius-xl);
  box-shadow: var(--shzu-shadow);
}

.campus-tabs .nav-link {
  color: var(--shzu-text-secondary);
  border-radius: var(--shzu-radius-lg);
  padding: var(--shzu-space-3) var(--shzu-space-8);
  font-weight: 500;
  transition: all var(--shzu-duration-200) var(--shzu-ease-out);
}

.campus-tabs .nav-link:hover,
.campus-tabs .nav-link.active {
  background: var(--shzu-bg-gradient);
  color: white;
}

.campus-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--shzu-space-6);
}

.campus-card {
  background: var(--shzu-bg-primary);
  border-radius: var(--shzu-radius-xl);
  overflow: hidden;
  box-shadow: var(--shzu-shadow);
  cursor: pointer;
  transition: all var(--shzu-duration-300) var(--shzu-ease-out);
}

.campus-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shzu-shadow-xl);
}

.campus-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.campus-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--shzu-duration-500) var(--shzu-ease-out);
}

.campus-card:hover .campus-image img {
  transform: scale(1.05);
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
  transition: opacity var(--shzu-duration-300) var(--shzu-ease-out);
}

.campus-card:hover .image-overlay {
  opacity: 1;
}

.image-overlay i {
  color: white;
  font-size: var(--shzu-text-2xl);
}

.campus-info {
  padding: var(--shzu-space-6);
}

.campus-info h5 {
  color: var(--shzu-text-primary);
  margin-bottom: var(--space-xs);
  font-weight: 600;
}

.campus-info p {
  color: var(--shzu-text-secondary);
  line-height: 1.5;
  margin: 0;
}

/* 通知公告 */
.notices-section {
  padding: var(--shzu-space-16) 0;
}

.notice-card {
  background: var(--shzu-bg-primary);
  border-radius: var(--shzu-radius-xl);
  padding: var(--shzu-space-6);
  box-shadow: var(--shzu-shadow);
  border-left: 4px solid;
  height: 100%;
}

.notice-card.important {
  border-left-color: var(--shzu-error);
}

.notice-card.academic {
  border-left-color: var(--shzu-accent-blue);
}

.notice-card.info {
  border-left-color: var(--shzu-info);
}

.notice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--shzu-space-4);
}

.notice-type {
  padding: var(--shzu-space-1) var(--shzu-space-3);
  border-radius: var(--shzu-radius);
  font-size: var(--shzu-text-xs);
  font-weight: 500;
  text-transform: uppercase;
}

.notice-type.important {
  background: rgba(21, 101, 192, 0.1);
  color: #1565c0;
}

.notice-type.academic {
  background: rgba(24, 144, 255, 0.1);
  color: var(--shzu-accent-blue);
}

.notice-type.info {
  background: rgba(82, 196, 26, 0.1);
  color: var(--shzu-success);
}

.notice-date {
  color: var(--shzu-text-tertiary);
  font-size: var(--shzu-text-xs);
}

.notice-content h5 {
  color: var(--shzu-text-primary);
  margin-bottom: var(--shzu-space-3);
  font-weight: 600;
}

.notice-content p {
  color: var(--shzu-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--shzu-space-4);
}

.notice-actions {
  display: flex;
  justify-content: flex-end;
}

/* CTA区域 */
.cta-section {
  background: var(--shzu-bg-gradient);
  color: white;
  padding: var(--shzu-space-16) 0;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: var(--shzu-space-4);
  flex-wrap: wrap;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: var(--shzu-text-3xl);
  }

  .hero-subtitle {
    font-size: var(--shzu-text-lg);
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .nav-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .content-section .row {
    flex-direction: column;
    gap: var(--shzu-space-8);
  }

  .highlights {
    grid-template-columns: 1fr;
  }

  .campus-grid {
    grid-template-columns: 1fr;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}

/* 添加动画类 */
.fade-in-shzu {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

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

/* 学院专业展示 */
.academics-section {
  padding: var(--shzu-space-20) 0;
}

.academics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--shzu-space-6);
}

.college-card {
  background: var(--shzu-bg-primary);
  border-radius: var(--shzu-radius-xl);
  padding: var(--shzu-space-6);
  box-shadow: var(--shzu-shadow-md);
  transition: all var(--shzu-duration-300) var(--shzu-ease-out);
  border: 2px solid transparent;
}

.college-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shzu-shadow-xl);
  border-color: var(--shzu-primary-light);
}

.college-header {
  display: flex;
  align-items: center;
  gap: var(--shzu-space-4);
  margin-bottom: var(--shzu-space-4);
}

.college-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--shzu-primary), var(--shzu-primary-light));
  color: white;
  border-radius: var(--shzu-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.college-header h4 {
  color: var(--shzu-text-primary);
  font-size: var(--shzu-text-xl);
  font-weight: var(--shzu-font-bold);
  margin: 0;
}

.college-type {
  background: var(--shzu-bg-accent);
  color: var(--shzu-primary);
  padding: var(--shzu-space-1) var(--shzu-space-3);
  border-radius: var(--shzu-radius-full);
  font-size: var(--shzu-text-sm);
  font-weight: var(--shzu-font-medium);
  margin-left: auto;
}

.college-content p {
  color: var(--shzu-text-secondary);
  line-height: var(--shzu-leading-relaxed);
  margin-bottom: var(--shzu-space-4);
}

.majors-preview {
  display: flex;
  flex-wrap: wrap;
  gap: var(--shzu-space-2);
  margin-bottom: var(--shzu-space-4);
}

.major-tag {
  background: var(--shzu-bg-secondary);
  color: var(--shzu-text-secondary);
  padding: var(--shzu-space-1) var(--shzu-space-3);
  border-radius: var(--shzu-radius);
  font-size: var(--shzu-text-sm);
  font-weight: var(--shzu-font-medium);
}

.major-more {
  background: var(--shzu-bg-accent);
  color: var(--shzu-primary);
  padding: var(--shzu-space-1) var(--shzu-space-3);
  border-radius: var(--shzu-radius);
  font-size: var(--shzu-text-sm);
  font-weight: var(--shzu-font-medium);
}

.college-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--shzu-space-4);
  border-top: 1px solid var(--shzu-border);
}

.programs-count {
  color: var(--shzu-text-tertiary);
  font-size: var(--shzu-text-sm);
  font-weight: var(--shzu-font-medium);
}

/* 学生生活 */
.student-life-section {
  padding: var(--shzu-space-20) 0;
}

.life-features {
  display: flex;
  flex-direction: column;
  gap: var(--shzu-space-8);
}

.life-feature-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--shzu-space-6);
}

.life-feature {
  background: var(--shzu-bg-primary);
  padding: var(--shzu-space-6);
  border-radius: var(--shzu-radius-xl);
  text-align: center;
  box-shadow: var(--shzu-shadow);
  transition: all var(--shzu-duration-300) var(--shzu-ease-out);
  border: 2px solid transparent;
}

.life-feature:hover {
  transform: translateY(-6px);
  box-shadow: var(--shzu-shadow-lg);
  border-color: var(--shzu-primary-light);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--shzu-primary), var(--shzu-primary-light));
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0 auto var(--shzu-space-4);
  transition: transform var(--shzu-duration-300) var(--shzu-ease-out);
}

.life-feature:hover .feature-icon {
  transform: scale(1.1);
}

.life-feature h5 {
  color: var(--shzu-text-primary);
  font-size: var(--shzu-text-lg);
  font-weight: var(--shzu-font-bold);
  margin-bottom: var(--shzu-space-3);
}

.life-feature p {
  color: var(--shzu-text-secondary);
  line-height: var(--shzu-leading-relaxed);
  margin-bottom: var(--shzu-space-4);
}

.feature-stats {
  display: flex;
  justify-content: center;
  gap: var(--shzu-space-6);
  flex-wrap: wrap;
}

.stat-item {
  color: var(--shzu-text-tertiary);
  font-size: var(--shzu-text-sm);
}

.stat-item strong {
  color: var(--shzu-primary);
  font-size: var(--shzu-text-base);
  display: block;
  margin-bottom: var(--shzu-space-1);
}

/* 科研成果 */
.research-section {
  padding: var(--shzu-space-20) 0;
}

.research-highlights {
  display: flex;
  flex-direction: column;
  gap: var(--shzu-space-12);
}

.research-stats-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--shzu-space-4);
}

.research-stat {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  color: #1565c0;
  border: 2px solid #1565c0;
  padding: var(--shzu-space-8) var(--shzu-space-4);
  border-radius: var(--shzu-radius-xl);
  text-align: center;
  box-shadow: 0 8px 25px rgba(21, 101, 192, 0.15);
  transition: all var(--shzu-duration-300) var(--shzu-ease-out);
  position: relative;
  overflow: hidden;
}

.research-stat::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #1565c0, #42a5f5, #1565c0);
  background-size: 200% 100%;
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.research-stat:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(21, 101, 192, 0.25);
  border-color: #0d47a1;
}

.research-stat .stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: var(--shzu-space-3);
  color: #0d47a1;
  text-shadow: 0 2px 4px rgba(21, 101, 192, 0.1);
}

.research-stat .stat-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1565c0;
  line-height: 1.4;
  text-transform: none;
}


.subsection-title {
  color: var(--shzu-text-primary);
  font-size: var(--shzu-text-2xl);
  font-weight: var(--shzu-font-bold);
  margin-bottom: var(--shzu-space-6);
  position: relative;
  padding-left: var(--shzu-space-4);
}

.subsection-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: var(--shzu-primary);
  border-radius: 2px;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--shzu-space-6);
}

.project-card {
  background: var(--shzu-bg-primary);
  padding: var(--shzu-space-6);
  border-radius: var(--shzu-radius-lg);
  box-shadow: var(--shzu-shadow);
  border-left: 4px solid var(--shzu-primary);
  transition: all var(--shzu-duration-300) var(--shzu-ease-out);
}

.project-card:hover {
  transform: translateX(4px);
  box-shadow: var(--shzu-shadow-md);
}

.project-category {
  color: var(--shzu-primary);
  font-size: var(--shzu-text-sm);
  font-weight: var(--shzu-font-medium);
  margin-bottom: var(--shzu-space-2);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.project-card h5 {
  color: var(--shzu-text-primary);
  font-size: var(--shzu-text-lg);
  font-weight: var(--shzu-font-bold);
  margin-bottom: var(--shzu-space-3);
}

.project-card p {
  color: var(--shzu-text-secondary);
  line-height: var(--shzu-leading-relaxed);
  margin-bottom: var(--shzu-space-4);
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-funding {
  color: var(--shzu-success);
  font-weight: var(--shzu-font-medium);
  font-size: var(--shzu-text-sm);
}

.project-duration {
  color: var(--shzu-text-tertiary);
  font-size: var(--shzu-text-sm);
}

.achievements-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--shzu-space-6);
}

.achievement-item {
  display: flex;
  gap: var(--shzu-space-4);
  padding: var(--shzu-space-4);
  background: var(--shzu-bg-primary);
  border-radius: var(--shzu-radius-lg);
  box-shadow: var(--shzu-shadow-sm);
  transition: all var(--shzu-duration-300) var(--shzu-ease-out);
}

.achievement-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shzu-shadow-md);
}

.achievement-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--shzu-accent-gold), var(--shzu-warning));
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.achievement-content {
  flex: 1;
}

.achievement-content h6 {
  color: var(--shzu-text-primary);
  font-size: var(--shzu-text-base);
  font-weight: var(--shzu-font-semibold);
  margin-bottom: var(--shzu-space-1);
}

.achievement-content p {
  color: var(--shzu-text-secondary);
  font-size: var(--shzu-text-sm);
  line-height: var(--shzu-leading-relaxed);
  margin-bottom: var(--shzu-space-2);
}

.achievement-year {
  color: var(--shzu-primary);
  font-size: var(--shzu-text-xs);
  font-weight: var(--shzu-font-medium);
}

/* 校友风采 */
.alumni-section {
  padding: var(--shzu-space-20) 0;
}

.alumni-showcase {
  display: flex;
  flex-direction: column;
  gap: var(--shzu-space-12);
}

.featured-alumni {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--shzu-space-6);
}

.alumni-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  border-radius: var(--shzu-radius-xl);
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(21, 101, 192, 0.1);
  border: 1px solid rgba(21, 101, 192, 0.1);
  transition: all var(--shzu-duration-300) var(--shzu-ease-out);
  position: relative;
}

.alumni-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(135deg, #1565c0 0%, #42a5f5 100%);
}

.alumni-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 15px 35px rgba(21, 101, 192, 0.15);
  border-color: rgba(21, 101, 192, 0.2);
}

.alumni-photo {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.alumni-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--shzu-duration-500) var(--shzu-ease-out);
}

.alumni-card:hover .alumni-photo img {
  transform: scale(1.05);
}

.alumni-overlay {
  position: absolute;
  top: var(--shzu-space-4);
  right: var(--shzu-space-4);
  width: 40px;
  height: 40px;
  background: rgba(30, 60, 114, 0.9);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.8);
  transition: all var(--shzu-duration-300) var(--shzu-ease-out);
}

.alumni-card:hover .alumni-overlay {
  opacity: 1;
  transform: scale(1);
}

.alumni-info {
  padding: var(--shzu-space-6);
}

.alumni-info h5 {
  color: var(--shzu-text-primary);
  font-size: var(--shzu-text-xl);
  font-weight: var(--shzu-font-bold);
  margin-bottom: var(--shzu-space-2);
}

.alumni-role {
  color: var(--shzu-primary);
  font-weight: var(--shzu-font-medium);
  margin-right: var(--shzu-space-3);
}

.alumni-year {
  color: var(--shzu-text-tertiary);
  font-size: var(--shzu-text-sm);
}

.alumni-quote {
  color: var(--shzu-text-secondary);
  font-style: italic;
  line-height: var(--shzu-leading-relaxed);
  margin: var(--shzu-space-4) 0;
  font-size: var(--shzu-text-sm);
}

.alumni-achievements {
  display: flex;
  flex-wrap: wrap;
  gap: var(--shzu-space-2);
}

.achievement-badge {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  color: #1565c0;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid rgba(21, 101, 192, 0.2);
  transition: all 0.3s ease;
}

.achievement-badge:hover {
  background: linear-gradient(135deg, #bbdefb 0%, #90caf9 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(21, 101, 192, 0.15);
}

.alumni-stats {
  display: flex;
  justify-content: center;
  gap: var(--shzu-space-12);
}

.stat-circle {
  text-align: center;
  padding: var(--shzu-space-4);
}

.circle-progress {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  color: #1565c0;
  border: 3px solid #1565c0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--shzu-space-4);
  position: relative;
  box-shadow: 0 8px 25px rgba(21, 101, 192, 0.15);
  transition: all var(--shzu-duration-300) var(--shzu-ease-out);
  overflow: hidden;
}

.circle-progress::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    #1565c0 60deg,
    #42a5f5 120deg,
    transparent 180deg,
    #1565c0 240deg,
    #42a5f5 300deg,
    transparent 360deg
  );
  animation: rotate 6s linear infinite;
  z-index: 0;
}

.circle-progress::after {
  content: '';
  position: absolute;
  inset: 6px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  border-radius: 50%;
  z-index: 1;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.circle-progress:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(21, 101, 192, 0.25);
  border-color: #0d47a1;
}

.progress-number {
  position: relative;
  z-index: 2;
  font-size: 1.8rem;
  font-weight: 800;
  color: #0d47a1;
  text-shadow: 0 2px 4px rgba(21, 101, 192, 0.1);
}

.stat-circle p {
  color: #1565c0;
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0;
  text-transform: none;
}

/* 新增模块的响应式设计 */
@media (max-width: 768px) {
  .academics-grid {
    grid-template-columns: 1fr;
  }

  .life-feature-row {
    grid-template-columns: 1fr;
  }

  .research-stats-row {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--shzu-space-3);
  }

  .research-stat .stat-number {
    font-size: 2rem;
  }

  .research-stat .stat-label {
    font-size: 0.8rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .achievements-list {
    grid-template-columns: 1fr;
  }

  .featured-alumni {
    grid-template-columns: 1fr 1fr;
    gap: var(--shzu-space-4);
  }

  .alumni-stats {
    gap: var(--shzu-space-4);
  }

  .circle-progress {
    width: 100px;
    height: 100px;
  }

  .progress-number {
    font-size: 1.5rem;
  }

  .stat-circle p {
    font-size: 1rem;
  }

  .college-footer {
    flex-direction: column;
    gap: var(--shzu-space-3);
    align-items: stretch;
  }
}

/* === 学校概况部分样式 === */
.school-overview-section {
  background: linear-gradient(135deg, #f8fbff 0%, #e8f4fd 100%);
  position: relative;
  overflow: hidden;
}

.school-overview-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1976d2 0%, #42a5f5 50%, #64b5f6 100%);
}

.section-header {
  position: relative;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1565c0;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title i {
  background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
  color: white;
  padding: 15px;
  border-radius: 50%;
  margin-right: 15px;
  box-shadow: 0 4px 20px rgba(25, 118, 210, 0.3);
}

.section-subtitle {
  font-size: 1.3rem;
  color: #5e92f3;
  font-weight: 500;
  margin-bottom: 0;
}

.section-subtitle .badge {
  background: linear-gradient(135deg, #1565c0 0%, #42a5f5 100%);
  padding: 6px 12px;
  font-size: 0.9rem;
  margin: 0 3px;
}

/* 学校基本信息卡片 */
.school-basic-info {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 8px 40px rgba(25, 118, 210, 0.1);
  border: 1px solid rgba(25, 118, 210, 0.1);
  position: relative;
  overflow: hidden;
}

.school-basic-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(180deg, #1976d2 0%, #42a5f5 100%);
}

.basic-info-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1565c0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.basic-info-title i {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
  color: white;
  border-radius: 10px;
  margin-right: 12px;
  font-size: 1.1rem;
}

.basic-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
}

.info-item i {
  color: #1976d2;
  margin-right: 12px;
  margin-top: 3px;
  font-size: 1.1rem;
}

.info-item strong {
  color: #1565c0;
  font-weight: 600;
  margin-right: 8px;
}

.info-item span {
  color: #424242;
  line-height: 1.6;
}

/* 学校统计数据 */
.school-statistics {
  margin-bottom: 3rem;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 25px rgba(25, 118, 210, 0.08);
  border: 1px solid rgba(25, 118, 210, 0.1);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #f8fbff 0%, #e8f4fd 100%);
  border-radius: 12px;
  border: 1px solid rgba(25, 118, 210, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(25, 118, 210, 0.1);
  border-color: rgba(25, 118, 210, 0.2);
}

.stat-item i {
  font-size: 1.2rem;
  color: #1976d2;
  width: 24px;
  text-align: center;
}

.stat-item span {
  font-size: 1rem;
  color: #1565c0;
  font-weight: 600;
}

/* 学术实力部分 */
.academic-section {
  margin-bottom: 3rem;
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 40px rgba(25, 118, 210, 0.08);
  border: 1px solid rgba(25, 118, 210, 0.1);
}

.academic-header {
  text-align: center;
  margin-bottom: 3rem;
}

.academic-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1565c0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.academic-title i {
  font-size: 1.8rem;
  color: #1976d2;
}

.academic-subtitle {
  font-size: 1.1rem;
  color: #5e92f3;
  font-weight: 500;
  margin: 0;
}

.academic-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.academic-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
  border-radius: 16px;
  padding: 0;
  box-shadow: 0 4px 25px rgba(25, 118, 210, 0.08);
  border: 1px solid rgba(25, 118, 210, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.academic-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(25, 118, 210, 0.15);
  border-color: rgba(25, 118, 210, 0.2);
}

.academic-card-header {
  background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.academic-card-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
}

.academic-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  font-size: 1.3rem;
  position: relative;
  z-index: 2;
}

.academic-card-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
}

.academic-card-content {
  padding: 2rem 1.5rem;
}

.academic-card-content h4 {
  color: #1565c0;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.academic-card-content p {
  color: #616161;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.academic-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  color: #1976d2;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(25, 118, 210, 0.2);
  transition: all 0.3s ease;
}

.academic-card:hover .tag {
  background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
  color: white;
  transform: translateY(-2px);
}

/* 学术高亮部分 */
.academic-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(25, 118, 210, 0.08) 0%, rgba(33, 150, 243, 0.04) 100%);
  border: 1px solid rgba(25, 118, 210, 0.15);
  border-radius: 12px;
  font-size: 0.85rem;
  color: #1565c0;
  font-weight: 500;
  transition: all 0.3s ease;
}

.highlight-item:hover {
  background: linear-gradient(135deg, rgba(25, 118, 210, 0.12) 0%, rgba(33, 150, 243, 0.08) 100%);
  border-color: rgba(25, 118, 210, 0.25);
  transform: translateY(-1px);
}

.highlight-item i {
  font-size: 0.9rem;
  color: #1976d2;
}

.highlight-item span {
  font-weight: 600;
}

/* 办学特色部分 */
.features-section {
  margin-bottom: 3rem;
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 40px rgba(25, 118, 210, 0.08);
  border: 1px solid rgba(25, 118, 210, 0.1);
}

.features-header {
  text-align: center;
  margin-bottom: 3rem;
}

.features-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1565c0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.features-title i {
  font-size: 1.8rem;
  color: #1976d2;
}

.features-subtitle {
  font-size: 1.1rem;
  color: #5e92f3;
  font-weight: 500;
  margin: 0;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

.feature-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
  border-radius: 18px;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 25px rgba(25, 118, 210, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(25, 118, 210, 0.1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1976d2 0%, #42a5f5 50%, #64b5f6 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 45px rgba(25, 118, 210, 0.15);
  border-color: rgba(25, 118, 210, 0.2);
}

.feature-icon-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
  border-radius: 50%;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 8px 25px rgba(25, 118, 210, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
  border: 3px solid rgba(255, 255, 255, 0.2);
}

.feature-bg-icon {
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(66, 165, 245, 0.05) 100%);
  border-radius: 50%;
  font-size: 2.2rem;
  color: rgba(25, 118, 210, 0.2);
  transition: all 0.4s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 35px rgba(25, 118, 210, 0.6);
  background: linear-gradient(135deg, #1565c0 0%, #1976d2 50%, #42a5f5 100%);
}

.feature-card:hover .feature-bg-icon {
  transform: scale(1.2) rotate(-5deg);
  color: rgba(25, 118, 210, 0.3);
}

.feature-card h4 {
  color: #1565c0;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  text-align: center;
  transition: color 0.3s ease;
}

.feature-card:hover h4 {
  color: #0d47a1;
}

.feature-card p {
  color: #616161;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 0.95rem;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}

.feature-tag {
  padding: 5px 12px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  color: #1976d2;
  border-radius: 18px;
  font-size: 0.7rem;
  font-weight: 600;
  border: 1px solid rgba(25, 118, 210, 0.2);
  transition: all 0.3s ease;
}

.feature-card:hover .feature-tag {
  background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}

/* 校训部分 */
.motto-section {
  background: linear-gradient(135deg, #1a237e 0%, #283593 20%, #3949ab 50%, #42a5f5 90%, #64b5f6 100%);
  border-radius: 24px;
  padding: 3.5rem 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(26, 35, 126, 0.3), 0 8px 24px rgba(57, 73, 171, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.motto-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  opacity: 1;
}

.motto-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="diamond" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M10 2 L18 10 L10 18 L2 10 Z" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/></pattern></defs><rect width="200" height="200" fill="url(%23diamond)"/></svg>');
  opacity: 0.6;
}

.motto-decoration {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  z-index: 1;
}

.motif-left {
  left: 2rem;
  flex-direction: row;
}

.motif-right {
  right: 2rem;
  flex-direction: row-reverse;
}

.decoration-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  position: relative;
}

.decoration-dot {
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6));
  border-radius: 50%;
  margin: 0 16px;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
  position: relative;
}

.decoration-dot::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: pulse-dot 3s ease-in-out infinite;
}

.motto-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.motto-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  gap: 1rem;
}

.motto-icon-left,
.motto-icon-right {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  opacity: 0;
  animation: fadeInQuote 1s ease-out forwards;
}

.motto-icon-left {
  animation-delay: 0.2s;
}

.motto-icon-right {
  animation-delay: 1.2s;
}

.motto-text {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: 0.15em;
  background: linear-gradient(135deg, #ffffff 0%, #e8f5e8 40%, #ffffff 60%, #e3f2fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  position: relative;
  opacity: 0;
  animation: fadeInMotto 1.5s ease-out 0.4s forwards;
  font-family: var(--font-zh-cn), 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
}

.motto-text::before {
  content: attr(data-text);
  position: absolute;
  top: 2px;
  left: 0;
  z-index: -1;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  -webkit-text-fill-color: transparent;
  opacity: 0.6;
}

.motto-explanation {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0;
  animation: fadeInExplanation 1s ease-out 1.6s forwards;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  letter-spacing: 0.05em;
}

.motto-prefix,
.motto-suffix {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
}

.motto-philosophy {
  background: linear-gradient(90deg, #fff9c4 0%, #ffeb3b 25%, #fff59d 50%, #fff176 75%, #fff9c4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  font-size: 1.3em;
  letter-spacing: 0.08em;
  text-shadow: 0 2px 4px rgba(255, 235, 59, 0.3);
  position: relative;
  display: inline-block;
}

.motto-philosophy::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 235, 59, 0.6), transparent);
}

@keyframes fadeInQuote {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeInMotto {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeInExplanation {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-dot {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }
}

/* 校训部分响应式设计 */
@media (max-width: 768px) {
  .motto-section {
    padding: 2.5rem 1.5rem;
    border-radius: 20px;
  }

  .motto-decoration {
    display: none;
  }

  .motto-text {
    font-size: 2.2rem;
    letter-spacing: 0.1em;
  }

  .motto-explanation {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .motto-philosophy {
    font-size: 1.2em;
  }
}

@media (max-width: 480px) {
  .motto-section {
    padding: 2rem 1rem;
    border-radius: 16px;
  }

  .motto-wrapper {
    gap: 0.5rem;
  }

  .motto-icon-left,
  .motto-icon-right {
    font-size: 1.2rem;
  }

  .motto-text {
    font-size: 1.8rem;
    letter-spacing: 0.08em;
  }

  .motto-explanation {
    font-size: 1rem;
  }

  .motto-philosophy {
    font-size: 1.1em;
    letter-spacing: 0.05em;
  }
}

/* 新闻动态和通知公告部分样式 */
.news-announcements-section {
  background: #f8f9fa;
  padding: 4rem 0;
}

/* 独立的标题区域样式 */
.news-titles-header {
  background: transparent;
  padding: 0;
  margin-bottom: 30px;
}

.title-block {
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  border: 2px solid #e3f2fd;
  border-radius: 12px;
  padding: 18px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 15px rgba(21, 101, 192, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.title-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(135deg, #1565c0 0%, #42a5f5 100%);
}

.title-block:hover {
  border-color: #bbdefb;
  box-shadow: 0 6px 20px rgba(21, 101, 192, 0.12);
  transform: translateY(-2px);
}

.main-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #1565c0;
  display: flex;
  align-items: center;
  text-shadow: 0 1px 2px rgba(21, 101, 192, 0.1);
}

.main-title i {
  font-size: 1.4rem;
  margin-right: 12px;
  background: linear-gradient(135deg, #1565c0 0%, #42a5f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-more {
  color: #1976d2;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  padding: 6px 12px;
  border-radius: 6px;
  background: rgba(25, 118, 210, 0.05);
}

.title-more:hover {
  color: #1565c0;
  background: rgba(25, 118, 210, 0.1);
  transform: translateX(3px);
}

.title-more i {
  font-size: 0.8rem;
  margin-left: 4px;
}

/* 新闻内容面板样式 */
.news-content-panel,
.announcement-content-panel {
  background: white;
  border: 2px solid #e3f2fd;
  border-top: none;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 15px rgba(21, 101, 192, 0.08);
  margin-top: 0;
  height: 360px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* 新闻列表样式 */
.news-list,
.announcement-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.news-item,
.announcement-item {
  padding: 20px 25px;
  border-bottom: 1px solid #f0f4f8;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  background: white;
  position: relative;
  height: 85px;
  box-sizing: border-box;
}

.news-item:last-child,
.announcement-item:last-child {
  border-bottom: none;
}

.news-item:hover,
.announcement-item:hover {
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  transform: translateX(5px);
}

/* 新闻日期样式 - 美化优化 */
.news-date,
.announcement-date {
  text-align: center;
  width: 70px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.news-day,
.announcement-day {
  font-size: 1.3rem;
  font-weight: 800;
  color: #1565c0;
  line-height: 28px;
  background: linear-gradient(135deg, #e3f2fd 0%, #f8f9ff 100%);
  padding: 0 10px;
  border-radius: 8px;
  margin-bottom: 4px;
  box-shadow: 0 2px 8px rgba(21, 101, 192, 0.15);
  transition: all 0.3s ease;
  border: 1px solid rgba(21, 101, 192, 0.1);
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}

.news-month,
.announcement-month {
  font-size: 0.85rem;
  color: #546e7a;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 16px;
  height: 16px;
  width: 100%;
  text-align: center;
}

.news-item:hover .news-day,
.announcement-item:hover .announcement-day {
  background: linear-gradient(135deg, #bbdefb 0%, #e3f2fd 100%);
  box-shadow: 0 4px 12px rgba(21, 101, 192, 0.25);
  transform: scale(1.05);
}

/* 新闻信息样式 */
.news-info,
.announcement-info {
  flex: 1;
  min-width: 0; /* 确保flex子元素可以收缩 */
  overflow: hidden;
}

.news-title,
.announcement-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  color: #333;
  line-height: 28px;
  transition: color 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
}

.news-item:hover .news-title,
.announcement-item:hover .announcement-title {
  color: #1565c0;
}

/* 响应式设计 */
@media (max-width: 991px) {
  .news-content-panel,
  .announcement-content-panel {
    margin-bottom: 2rem;
  }
}

@media (max-width: 767px) {
  .news-announcements-section {
    padding: 3rem 0;
  }

  .news-titles-header {
    padding: 15px 0;
    margin-bottom: 20px;
  }

  .title-block {
    padding: 0 15px;
  }

  .main-title {
    font-size: 1.1rem;
  }

  .title-more {
    font-size: 0.8rem;
  }

  .news-item,
  .announcement-item {
    padding: 12px 15px;
  }

  .news-date,
  .announcement-date {
    min-width: 48px;
    padding: 8px 10px;
    margin-right: 12px;
  }

  .news-day,
  .announcement-day {
    font-size: 1.1rem;
  }

  .news-month,
  .announcement-month {
    font-size: 0.75rem;
  }

  .news-title,
  .announcement-title {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .news-announcements-section {
    padding: 2rem 0;
  }

  .news-titles-header {
    padding: 12px 0;
  }

  .title-block {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }

  .news-item,
  .announcement-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .news-date,
  .announcement-date {
    min-width: auto;
    margin-right: 0;
    flex-direction: row;
    gap: 8px;
    padding: 6px 12px;
  }
}

@media (max-width: 767px) {
  .news-announcements-section {
    padding: 3rem 0;
  }

  .panel-header {
    padding: 12px 15px;
  }

  .panel-title {
    font-size: 1.1rem;
  }

  .panel-more {
    font-size: 0.8rem;
  }

  .news-item,
  .announcement-item {
    padding: 12px 15px;
  }

  .news-date,
  .announcement-date {
    min-width: 48px;
    padding: 8px 10px;
    margin-right: 12px;
  }

  .news-day,
  .announcement-day {
    font-size: 1.1rem;
  }

  .news-month,
  .announcement-month {
    font-size: 0.75rem;
  }

  .news-title,
  .announcement-title {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .news-announcements-section {
    padding: 2rem 0;
  }

  .panel-header {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }

  .news-item,
  .announcement-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .news-date,
  .announcement-date {
    min-width: auto;
    margin-right: 0;
    flex-direction: row;
    gap: 8px;
    padding: 6px 12px;
  }
}

/* 清理旧的重复样式 - 移除已过时的新闻卡片样式 */
</style>