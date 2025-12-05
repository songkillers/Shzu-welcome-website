<!-- 新生互动页面 - 现代化设计 -->
<template>
  <div class="interaction-page">
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-background">
          <div class="hero-pattern"></div>
        </div>
        <div class="hero-overlay"></div>
        <div class="hero-text">
          <h1 class="hero-title">
            <i class="fas fa-comments me-3"></i>
            新生互动社区
          </h1>
          <p class="hero-subtitle">
            连接新生，分享期待，解答疑惑，开启精彩大学生活
          </p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">2.5k+</div>
              <div class="stat-label">活跃新生</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">1.2k+</div>
              <div class="stat-label">互动话题</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">满意度</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <!-- 快速入口 -->
      <section class="quick-actions">
        <div class="action-grid">
          <div class="action-card primary" @click="scrollToSection('message-board')">
            <div class="action-icon">
              <i class="fas fa-comment-dots"></i>
            </div>
            <div class="action-content">
              <h3>留言板</h3>
              <p>分享你的期待和疑问</p>
            </div>
            <div class="action-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>

          <div class="action-card secondary" @click="scrollToSection('faq-section')">
            <div class="action-icon">
              <i class="fas fa-question-circle"></i>
            </div>
            <div class="action-content">
              <h3>常见问题</h3>
              <p>快速找到答案</p>
            </div>
            <div class="action-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>

          <div class="action-card tertiary" @click="scrollToSection('social-section')">
            <div class="action-icon">
              <i class="fas fa-users"></i>
            </div>
            <div class="action-content">
              <h3>社区活动</h3>
              <p>参与线上活动</p>
            </div>
            <div class="action-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- 留言板部分 -->
      <section id="message-board" class="message-board-section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-comments me-3"></i>
            新生留言板
          </h2>
          <p class="section-subtitle">
            在这里分享你的期待、疑问，与同学们互动交流
          </p>
        </div>
        <MessageBoard />
      </section>

      <!-- 热门话题 -->
      <section class="trending-topics">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-fire me-3"></i>
            热门话题
          </h2>
          <p class="section-subtitle">
            大家最关心的话题讨论
          </p>
        </div>
        <div class="topics-grid">
          <div class="topic-card">
            <div class="topic-badge">
              <i class="fas fa-hashtag"></i>
              <span>热门</span>
            </div>
            <h4>宿舍生活</h4>
            <p>宿舍条件、室友关系、生活用品准备</p>
            <div class="topic-stats">
              <span><i class="fas fa-comment"></i> 342</span>
              <span><i class="fas fa-eye"></i> 2.1k</span>
            </div>
          </div>

          <div class="topic-card">
            <div class="topic-badge">
              <i class="fas fa-hashtag"></i>
              <span>讨论</span>
            </div>
            <h4>专业选择</h4>
            <p>专业前景、课程难度、转专业要求</p>
            <div class="topic-stats">
              <span><i class="fas fa-comment"></i> 286</span>
              <span><i class="fas fa-eye"></i> 1.8k</span>
            </div>
          </div>

          <div class="topic-card">
            <div class="topic-badge">
              <i class="fas fa-hashtag"></i>
              <span>关注</span>
            </div>
            <h4>社团活动</h4>
            <p>社团介绍、纳新时间、活动安排</p>
            <div class="topic-stats">
              <span><i class="fas fa-comment"></i> 198</span>
              <span><i class="fas fa-eye"></i> 1.5k</span>
            </div>
          </div>

          <div class="topic-card">
            <div class="topic-badge">
              <i class="fas fa-hashtag"></i>
              <span>新鲜</span>
            </div>
            <h4>校园美食</h4>
            <p>食堂推荐、周边美食、外卖攻略</p>
            <div class="topic-stats">
              <span><i class="fas fa-comment"></i> 156</span>
              <span><i class="fas fa-eye"></i> 987</span>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ部分 -->
      <section id="faq-section" class="faq-section">
        <FAQSection />
      </section>

      <!-- 社交媒体 -->
      <section id="social-section" class="social-section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-share-alt me-3"></i>
            官方社交媒体
          </h2>
          <p class="section-subtitle">
            关注官方账号，获取最新资讯和在线服务
          </p>
        </div>

        <div class="social-container">
          <div class="social-grid-modern">
            <a href="https://www.kuaishou.com/profile/3xnug6aghiksd7m" target="_blank" class="social-card modern wechat">
              <div class="social-header">
                <div class="social-logo">
                  <i class="fas fa-video"></i>
                </div>
                <div class="social-qr">
                  <div class="qr-placeholder">
                    <i class="fas fa-qrcode"></i>
                  </div>
                </div>
              </div>
              <div class="social-content">
                <h4>快手号</h4>
                <p>石河子大学招生办</p>
                <span class="social-tag">官方认证</span>
              </div>
              <div class="social-footer">
                <span>短视频招生咨询</span>
                <i class="fas fa-arrow-right"></i>
              </div>
            </a>

            <a href="https://weibo.com/shzu" target="_blank" class="social-card modern weibo">
              <div class="social-header">
                <div class="social-logo">
                  <i class="fab fa-weibo"></i>
                </div>
                <div class="social-qr">
                  <div class="qr-placeholder">
                    <i class="fas fa-qrcode"></i>
                  </div>
                </div>
              </div>
              <div class="social-content">
                <h4>官方微博</h4>
                <p>@石河子大学</p>
                <span class="social-tag">10万+粉丝</span>
              </div>
              <div class="social-footer">
                <span>实时更新校园动态</span>
                <i class="fas fa-arrow-right"></i>
              </div>
            </a>

            <a href="https://www.douyin.com/user/MS4wLjABAAAAxMQPUtofIGTBocv02RFFe6tmK8xXstVi3KVmZOVdN1I?from_tab_name=main" target="_blank" class="social-card modern tiktok">
              <div class="social-header">
                <div class="social-logo">
                  <i class="fab fa-tiktok"></i>
                </div>
                <div class="social-qr">
                  <div class="qr-placeholder">
                    <i class="fas fa-qrcode"></i>
                  </div>
                </div>
              </div>
              <div class="social-content">
                <h4>抖音号</h4>
                <p>SHZU_2024</p>
                <span class="social-tag">短视频</span>
              </div>
              <div class="social-footer">
                <span>展示校园生活</span>
                <i class="fas fa-arrow-right"></i>
              </div>
            </a>

            <a href="https://space.bilibili.com/610100135?spm_id_from=333.337.0.0" target="_blank" class="social-card modern bilibili">
              <div class="social-header">
                <div class="social-logo">
                  <i class="fab fa-bilibili"></i>
                </div>
                <div class="social-qr">
                  <div class="qr-placeholder">
                    <i class="fas fa-qrcode"></i>
                  </div>
                </div>
              </div>
              <div class="social-content">
                <h4>B站账号</h4>
                <p>石河子大学官方</p>
                <span class="social-tag">视频教学</span>
              </div>
              <div class="social-footer">
                <span>学术分享与生活</span>
                <i class="fas fa-arrow-right"></i>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- 联系帮助 -->
      <section class="contact-help">
        <div class="help-content">
          <div class="help-text">
            <h3>需要更多帮助？</h3>
            <div class="help-contacts">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="contact-info">
                  <h6>咨询热线</h6>
                  <p>0993-2092827</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-info">
                  <h6>邮箱咨询</h6>
                  <p>zhaosheng@shzu.edu.cn</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-video"></i>
                </div>
                <div class="contact-info">
                  <h6>快手号</h6>
                  <p>石河子大学招生办</p>
                </div>
              </div>
            </div>
            <div class="help-actions">
              <a href="https://www.shzu.edu.cn/119/list.htm" target="_blank" class="btn-help primary">
                <i class="fas fa-phone me-2"></i>
                联系招生办
              </a>
              <a href="mailto:zsb@shzu.edu.cn" class="btn-help secondary">
                <i class="fas fa-envelope me-2"></i>
                邮件咨询
              </a>
            </div>
          </div>
          <div class="help-visual">
            <div class="help-icon">
              <i class="fas fa-headset"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MessageBoard from '@/components/MessageBoard.vue'
import FAQSection from '@/components/FAQSection.vue'

// 页面滚动到指定部分
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
/* 英雄区域 */
.hero-section {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 80px;
}

.hero-content {
  position: relative;
  width: 100%;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(30, 60, 114, 0.3);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}

.hero-pattern {
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.06) 0%, transparent 50%);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(30, 60, 114, 0.2) 0%, rgba(42, 82, 152, 0.1) 100%);
}

.hero-text {
  position: relative;
  z-index: 2;
  padding: 80px 60px;
  text-align: center;
}

.hero-title {
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 50px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  color: #64b5f6;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 快速入口 */
.quick-actions {
  margin-bottom: 80px;
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.action-card {
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e8f0fe;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.action-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.05), transparent);
  transition: left 0.6s ease;
}

.action-card:hover::before {
  left: 100%;
}

.action-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(30, 60, 114, 0.15);
  border-color: #1976d2;
}

.action-card.primary {
  border-left: 4px solid #1976d2;
}

.action-card.secondary {
  border-left: 4px solid #2e7d32;
}

.action-card.tertiary {
  border-left: 4px solid #ed6c02;
}

.action-icon {
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  transition: all 0.3s ease;
}

.action-card.primary .action-icon {
  background: linear-gradient(135deg, #1976d2, #42a5f5);
  color: white;
}

.action-card.secondary .action-icon {
  background: linear-gradient(135deg, #2e7d32, #66bb6a);
  color: white;
}

.action-card.tertiary .action-icon {
  background: linear-gradient(135deg, #ed6c02, #ffa726);
  color: white;
}

.action-card:hover .action-icon {
  transform: scale(1.1) rotate(5deg);
}

.action-content h3 {
  color: #1e3c72;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.action-content p {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.action-arrow {
  margin-top: auto;
  color: #1976d2;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.action-card:hover .action-arrow {
  transform: translateX(5px);
}

/* 通用部分样式 */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  color: #1e3c72;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.section-subtitle {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* 留言板部分 */
.message-board-section {
  margin-bottom: 80px;
}

/* 热门话题 */
.trending-topics {
  margin-bottom: 80px;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.topic-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8f0fe;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
}

.topic-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(30, 60, 114, 0.15);
  border-color: #e3f2fd;
}

.topic-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  color: #1976d2;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.topic-card h4 {
  color: #1e3c72;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.topic-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.topic-stats {
  display: flex;
  gap: 20px;
  font-size: 0.85rem;
  color: #999;
}

.topic-stats span {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* FAQ部分 */
.faq-section {
  margin-bottom: 80px;
  padding: 0;
}

/* 社交媒体部分 */
.social-section {
  margin-bottom: 80px;
}

.social-grid-modern {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.social-card.modern {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
}

.social-card.modern:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(30, 60, 114, 0.2);
}

.social-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  background: linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%);
  border-bottom: 1px solid #e8f0fe;
}

.social-logo {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  flex-shrink: 0;
}

.social-card.wechat .social-logo {
  background: linear-gradient(135deg, #07c160, #4caf50);
  color: white;
}

.social-card.weibo .social-logo {
  background: linear-gradient(135deg, #ff6f61, #ff9800);
  color: white;
}

.social-card.tiktok .social-logo {
  background: linear-gradient(135deg, #000000, #424242);
  color: white;
}

.social-card.bilibili .social-logo {
  background: linear-gradient(135deg, #00a1d6, #00b5e5);
  color: white;
}

.social-qr {
  width: 60px;
  height: 60px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.qr-placeholder {
  color: #999;
  font-size: 24px;
}

.social-content {
  padding: 25px;
  flex: 1;
}

.social-content h4 {
  color: #1e3c72;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.social-content p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 12px;
}

.social-tag {
  display: inline-block;
  background: #e3f2fd;
  color: #1976d2;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.social-footer {
  padding: 20px 25px;
  background: #f8f9ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e8f0fe;
}

.social-footer span {
  color: #666;
  font-size: 0.85rem;
}

.social-footer i {
  color: #1976d2;
  transition: transform 0.2s ease;
}

.social-card.modern:hover .social-footer i {
  transform: translateX(3px);
}

/* 联系帮助 */
.contact-help {
  margin-bottom: 30px;
}

.help-content {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(30, 60, 114, 0.3);
  display: flex;
  align-items: center;
  gap: 40px;
  color: white;
  position: relative;
  overflow: hidden;
}

.help-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  opacity: 0.5;
}

.help-text {
  flex: 1;
  position: relative;
  z-index: 2;
}

.help-text h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.help-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 25px;
  color: #e3f2fd;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* 新增的联系方式样式 */
.help-contacts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.help-contacts .contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.help-contacts .contact-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.help-contacts .contact-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.help-contacts .contact-item:hover .contact-icon {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.3);
}

.help-contacts .contact-info h6 {
  margin: 0 0 8px 0;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.help-contacts .contact-info p {
  margin: 0;
  font-size: 0.95rem;
  color: #f0f8ff;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.help-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-help {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.btn-help.primary {
  background: white;
  color: #1e3c72;
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
}

.btn-help.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255, 255, 255, 0.3);
}

.btn-help.secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-help.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

.help-visual {
  position: relative;
  z-index: 2;
}

.help-icon {
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  backdrop-filter: blur(10px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .action-grid {
    grid-template-columns: 1fr;
  }

  .social-grid-modern {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .hero-stats {
    gap: 40px;
  }

  .help-content {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  .help-actions {
    justify-content: center;
  }

  .help-contacts {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .help-contacts .contact-item {
    padding: 15px;
  }

  .help-contacts .contact-icon {
    width: 45px;
    height: 45px;
    font-size: 18px;
    margin-bottom: 12px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }

  .hero-text {
    padding: 60px 30px;
  }

  .section-title {
    font-size: 2rem;
  }

  .topics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .help-content {
    padding: 40px 30px;
  }

  .help-icon {
    width: 100px;
    height: 100px;
    font-size: 40px;
  }
}

@media (max-width: 480px) {
  .topics-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .social-grid-modern {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .hero-section {
    margin-bottom: 60px;
    min-height: 400px;
  }

  .action-card {
    padding: 30px 20px;
  }

  .action-icon {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }

  .social-header {
    padding: 20px;
  }

  .social-content {
    padding: 20px;
  }

  .social-footer {
    padding: 15px 20px;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>