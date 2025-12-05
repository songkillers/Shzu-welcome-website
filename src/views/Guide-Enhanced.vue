<!-- 迎新指南详情页面 - 现代化蓝色主题设计 -->
<template>
  <div class="guide-enhanced">
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <i class="fas fa-graduation-cap me-3"></i>
            新生入学指南
          </h1>
          <p class="hero-subtitle">为2026级新生量身定制的报到全方位指引</p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">5000+</div>
              <div class="stat-label">新生规模</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">15</div>
              <div class="stat-label">学院选择</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">70+</div>
              <div class="stat-label">专业方向</div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>

    <!-- 快速导航 -->
    <section class="quick-nav-section">
      <div class="container">
        <div class="quick-nav-grid">
          <div v-for="nav in quickNavItems" :key="nav.id" class="quick-nav-card" @click="scrollToSection(nav.id)">
            <div class="nav-icon">
              <i :class="nav.icon"></i>
            </div>
            <h4>{{ nav.title }}</h4>
            <p>{{ nav.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <!-- 报到流程 -->
      <section id="registration-process" class="process-section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-clipboard-list me-3"></i>
            报到流程
          </h2>
          <p class="section-subtitle">按照步骤完成新生报到，开启精彩大学生活</p>
        </div>

        <div class="process-timeline">
          <div v-for="(step, index) in registrationSteps" :key="index" class="process-step">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <div class="step-main">
                <!-- 左侧：图标和标题 -->
                <div class="step-left">
                  <div class="step-icon">
                    <i :class="step.icon"></i>
                  </div>
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
                </div>
                <!-- 右侧：具体事项列表 -->
                <div class="step-right">
                  <h6 class="details-title">
                    <i class="fas fa-list-check me-2"></i>具体事项
                  </h6>
                  <ul class="details-list">
                    <li v-for="detail in step.details" :key="detail">
                      <i class="fas fa-check-circle me-2"></i>
                      <span>{{ detail }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 底部：额外信息 -->
              <div v-if="step.extraInfo" class="step-extra-info">
                <i class="fas fa-info-circle me-2"></i>
                <span>{{ step.extraInfo }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 费用缴纳 -->
      <section id="payment-guide" class="payment-section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-credit-card me-3"></i>
            费用缴纳指南
          </h2>
          <p class="section-subtitle">了解学费、住宿费等各项费用的缴纳方式</p>
        </div>

        <div class="payment-grid">
          <div v-for="payment in paymentItems" :key="payment.id" class="payment-card">
            <div class="payment-header">
              <div class="payment-icon">
                <i :class="payment.icon"></i>
              </div>
              <h4>{{ payment.name }}</h4>
              <div class="payment-amount">{{ payment.amount }}</div>
            </div>
            <div class="payment-methods">
              <h6>缴纳方式：</h6>
              <div class="methods">
                <span v-for="method in payment.methods" :key="method" class="method-tag">
                  {{ method }}
                </span>
              </div>
            </div>
            <div class="payment-deadline">
              <i class="fas fa-clock me-2"></i>
              缴费截止：{{ payment.deadline }}
            </div>
          </div>
        </div>
      </section>

      <!-- 宿舍分配 -->
      <section id="dormitory-info" class="dormitory-section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-bed me-3"></i>
            宿舍分配信息
          </h2>
          <p class="section-subtitle">了解宿舍环境、配套设施和分配规则</p>
        </div>

        <div class="dormitory-content">
          <div class="dormitory-types">
            <div v-for="dorm in dormitoryTypes" :key="dorm.type" class="dorm-card">
              <div class="dorm-image">
                <img :src="dorm.image" :alt="dorm.type">
                <div class="dorm-overlay">
                  <span class="dorm-price">{{ dorm.price }}</span>
                </div>
              </div>
              <div class="dorm-info">
                <h4>{{ dorm.type }}</h4>
                <p>{{ dorm.description }}</p>
                <div class="dorm-facilities">
                  <span v-for="facility in dorm.facilities" :key="facility" class="facility-tag">
                    <i class="fas fa-check me-1"></i>{{ facility }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 生活服务 -->
      <section id="life-services" class="services-section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-concierge-bell me-3"></i>
            校园生活服务
          </h2>
          <p class="section-subtitle">掌握校园卡办理、网络服务等生活必需信息</p>
        </div>

        <div class="services-grid">
          <div v-for="service in lifeServices" :key="service.id" class="service-card">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h4>{{ service.name }}</h4>
            <p>{{ service.description }}</p>
            <div class="service-location">
              <i class="fas fa-map-marker-alt me-2"></i>{{ service.location }}
            </div>
            <div class="service-time">
              <i class="fas fa-clock me-2"></i>{{ service.hours }}
            </div>
          </div>
        </div>
      </section>

      <!-- 重要提醒 -->
      <section class="reminders-section">
        <div class="reminders-container">
          <div class="reminders-header">
            <div class="reminder-icon warning">
              <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h3>重要提醒</h3>
            <p>请仔细阅读以下重要信息，确保顺利完成报到</p>
          </div>

          <div class="reminders-grid">
            <div v-for="reminder in importantReminders" :key="reminder.id" class="reminder-card" :class="reminder.type">
              <div class="reminder-icon">
                <i :class="reminder.icon"></i>
              </div>
              <h5>{{ reminder.title }}</h5>
              <p>{{ reminder.content }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 联系方式 -->
      <section class="contact-section">
        <div class="section-header">
          <h2 class="section-title">
            <i class="fas fa-phone-alt me-3"></i>
            联系我们
          </h2>
          <p class="section-subtitle">遇到问题？随时联系我们获取帮助</p>
        </div>

        <div class="contact-grid">
          <div v-for="contact in contactInfo" :key="contact.id" class="contact-card">
            <div class="contact-header">
              <div class="contact-avatar">
                <i :class="contact.icon"></i>
              </div>
              <div class="contact-info">
                <h4>{{ contact.name }}</h4>
                <p>{{ contact.role }}</p>
              </div>
            </div>
            <div class="contact-details">
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <span>{{ contact.phone }}</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>{{ contact.email }}</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{ contact.address }}</span>
              </div>
            </div>
            <div class="contact-status" :class="contact.status">
              <i class="fas fa-circle me-2"></i>
              {{ contact.statusText }}
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 悬浮操作按钮 -->
    <div class="floating-actions">
      <button class="fab back-to-top" @click="scrollToTop" title="回到顶部">
        <i class="fas fa-arrow-up"></i>
      </button>
      <button class="fab contact-fab" @click="showContactModal = true" title="联系我们">
        <i class="fas fa-comments"></i>
      </button>
    </div>

    <!-- 联系弹窗 -->
    <div v-if="showContactModal" class="modal-overlay" @click="showContactModal = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h4>快速联系</h4>
          <button class="close-btn" @click="showContactModal = false">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="quick-contacts">
            <a href="tel:0993-1234567" class="quick-contact">
              <i class="fas fa-phone"></i>
              <span>招生办公室</span>
            </a>
            <a href="tel:0993-7654321" class="quick-contact">
              <i class="fas fa-headset"></i>
              <span>迎新热线</span>
            </a>
            <a href="mailto:zhaosheng@shzu.edu.cn" class="quick-contact">
              <i class="fas fa-envelope"></i>
              <span>邮箱咨询</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 联系弹窗状态
const showContactModal = ref(false)

// 快速导航
const quickNavItems = [
  {
    id: 'registration-process',
    title: '报到流程',
    description: '6步完成新生报到',
    icon: 'fas fa-clipboard-list'
  },
  {
    id: 'payment-guide',
    title: '费用缴纳',
    description: '学费住宿费指南',
    icon: 'fas fa-credit-card'
  },
  {
    id: 'dormitory-info',
    title: '宿舍分配',
    description: '了解宿舍环境',
    icon: 'fas fa-bed'
  },
  {
    id: 'life-services',
    title: '生活服务',
    description: '校园卡办理等',
    icon: 'fas fa-concierge-bell'
  }
]

// 报到流程步骤
const registrationSteps = [
  {
    title: '资格验证',
    description: '验证录取通知书、身份证等关键证件，确认入学资格',
    icon: 'fas fa-user-check',
    details: ['录取通知书原件', '身份证原件', '高考准考证', '个人档案'],
    extraInfo: '请确保所有证件信息清晰完整，如有遗失请提前联系招生办公室。工作人员会仔细核对信息，为后续流程做好准备。'
  },
  {
    title: '信息登记',
    description: '填写个人信息表，办理校园卡，完善学籍档案',
    icon: 'fas fa-edit',
    details: ['个人信息登记', '联系方式确认', '校园卡领取', '学生手册领取'],
    extraInfo: '请如实填写所有信息，校园卡将作为您在校期间的身份证明和消费卡。同时领取学生手册，了解学校规章制度。'
  },
  {
    title: '费用缴纳',
    description: '缴纳学费、住宿费等相关费用，办理入学手续',
    icon: 'fas fa-money-check',
    details: ['学费缴纳', '住宿费缴纳', '教材费代收', '保险费用'],
    extraInfo: '支持现金、银行卡、微信、支付宝等多种支付方式。缴费后请妥善保管收据，如有困难可申请绿色通道或助学贷款。'
  },
  {
    title: '宿舍分配',
    description: '根据专业和需求分配宿舍，领取生活用品',
    icon: 'fas fa-key',
    details: ['宿舍钥匙领取', '床品领取', '宿舍协议签订', '生活用品领取'],
    extraInfo: '宿舍按学院和专业统一分配，配有空调、网络等基本设施。请与室友建立良好关系，共同维护宿舍卫生和安全。'
  },
  {
    title: '物品领取',
    description: '领取教材、校服等学习生活用品，完善入学准备',
    icon: 'fas fa-box',
    details: ['教材领取', '实验服领取', '校园卡激活', '网络账号开通'],
    extraInfo: '根据专业领取相应教材和实验器材，校服尺码可现场调换。校园卡需要在食堂和宿舍等处激活，网络账号初始密码为学号。'
  },
  {
    title: '入学指导',
    description: '参加新生入学教育和校园参观，融入大学生活',
    icon: 'fas fa-map-marked',
    details: ['新生大会参加', '校园熟悉', '院系报到', '班级见面会'],
    extraInfo: '学校会安排迎新教育活动，帮助新生快速适应大学生活。认真聆听学长学姐经验分享，积极与老师和同学交流。'
  }
]

// 费用项目
const paymentItems = [
  {
    id: 1,
    name: '学费',
    amount: '¥3800-6500/年',
    icon: 'fas fa-graduation-cap',
    methods: ['网上缴费', '银行转账', '现场缴费'],
    deadline: '报到前一周'
  },
  {
    id: 2,
    name: '住宿费',
    amount: '¥800-1200/年',
    icon: 'fas fa-bed',
    methods: ['网上缴费', '现场缴费'],
    deadline: '报到时'
  },
  {
    id: 3,
    name: '教材费',
    amount: '¥600-1000/年',
    icon: 'fas fa-book',
    methods: ['现场缴纳'],
    deadline: '开学后一周内'
  },
  {
    id: 4,
    name: '体检费',
    amount: '¥85',
    icon: 'fas fa-heartbeat',
    methods: ['现场缴费'],
    deadline: '报到时'
  },
  {
    id: 5,
    name: '保险费',
    amount: '¥40/年',
    icon: 'fas fa-shield-alt',
    methods: ['现场缴费'],
    deadline: '报到时'
  },
  {
    id: 6,
    name: '军训服装费',
    amount: '¥120-150',
    icon: 'fas fa-tshirt',
    methods: ['现场缴费'],
    deadline: '军训前'
  }
]

// 宿舍类型
const dormitoryTypes = [
  {
    type: '豪华双人间',
    price: '¥1000/年',
    description: '高档配置，公共卫浴，配备空调、书桌、衣柜等完善设施',
    image: '/images/official/facilities/luxury-double-room.jpg',
    facilities: ['公共卫浴', '空调', '书桌', '衣柜', '网络', '热水器', '独立学习区']
  },
  {
    type: '三人间标准宿舍',
    price: '¥1000/年',
    description: '舒适配置，上床下桌，独立衣柜，配备空调和公共卫浴',
    image: '/images/official/facilities/standard-triple-room.jpg',
    facilities: ['公共卫浴', '空调', '书桌', '衣柜', '网络', '储物柜']
  },
  {
    type: '六人间经济宿舍',
    price: '¥800/年',
    description: '经济实惠配置，上下铺，公共书桌，基础生活设施齐全',
    image: '/images/official/facilities/economy-six-room.webp',
    facilities: ['公共卫浴', '风扇', '书桌', '储物柜', '网络', '公共学习区']
  }
]

// 生活服务
const lifeServices = [
  {
    id: 1,
    name: '校园卡办理',
    description: '就餐、借书、门禁等校园生活必备卡',
    icon: 'fas fa-id-card',
    location: '行政楼一楼大厅',
    hours: '周一至周五 8:00-18:00'
  },
  {
    id: 2,
    name: '网络服务',
    description: '校园网开户、密码重置、网络故障报修',
    icon: 'fas fa-wifi',
    location: '信息中心二楼',
    hours: '周一至周日 8:00-22:00'
  },
  {
    id: 3,
    name: '医疗服务',
    description: '学生医保、常规医疗、紧急救护',
    icon: 'fas fa-hospital',
    location: '校医院',
    hours: '24小时急诊，门诊 8:00-18:00'
  },
  {
    id: 4,
    name: '餐饮服务',
    description: '各食堂餐卡办理、失物招领、投诉建议',
    icon: 'fas fa-utensils',
    location: '后勤服务楼',
    hours: '周一至周五 9:00-17:00'
  },
  {
    id: 5,
    name: '洗衣服务',
    description: '自助洗衣、烘干、熨烫服务',
    icon: 'fas fa-tshirt',
    location: '各宿舍楼负一层',
    hours: '6:00-23:00'
  },
  {
    id: 6,
    name: '快递服务',
    description: '快递收发、包裹管理',
    icon: 'fas fa-box',
    location: '快递服务中心',
    hours: '8:00-21:00'
  }
]

// 重要提醒
const importantReminders = [
  {
    id: 1,
    title: '按时报到',
    content: '请务必在规定时间内报到，如有特殊情况需提前联系招生办公室',
    icon: 'fas fa-calendar-check',
    type: 'warning'
  },
  {
    id: 2,
    title: '防范诈骗',
    content: '警惕各类诈骗信息，学校不会通过电话索要银行卡信息或密码',
    icon: 'fas fa-shield-alt',
    type: 'danger'
  },
  {
    id: 3,
    title: '材料准备',
    content: '提前准备好所有必要证件的原件和复印件，避免报到时手忙脚乱',
    icon: 'fas fa-file-alt',
    type: 'info'
  },
  {
    id: 4,
    title: '安全意识',
    content: '注意人身和财物安全，不要轻易相信陌生人的推销和介绍',
    icon: 'fas fa-user-shield',
    type: 'warning'
  }
]

// 联系信息
const contactInfo = [
  {
    id: 1,
    name: '招生办公室',
    role: '招生咨询、政策解答',
    icon: 'fas fa-building',
    phone: '0993-1234567',
    email: 'zhaosheng@shzu.edu.cn',
    address: '行政楼一楼103室',
    status: 'online',
    statusText: '在线服务'
  },
  {
    id: 2,
    name: '迎新热线',
    role: '新生报到专门咨询',
    icon: 'fas fa-headset',
    phone: '0993-7654321',
    email: 'yingxin@shzu.edu.cn',
    address: '学生活动中心201室',
    status: 'busy',
    statusText: '繁忙时段'
  },
  {
    id: 3,
    name: '学生资助中心',
    role: '助学贷款、奖学金咨询',
    icon: 'fas fa-hand-holding-usd',
    phone: '0993-8888888',
    email: 'zizhu@shzu.edu.cn',
    address: '行政楼二楼205室',
    status: 'online',
    statusText: '在线服务'
  }
]

// 滚动到指定部分
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// 回到顶部
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/* 英雄区域 */
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%);
  color: white;
  padding: 20px 0 60px;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>') repeat;
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.4rem;
  opacity: 0.9;
  margin-bottom: 40px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #64b5f6;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 0;
}

.hero-wave svg {
  width: 100%;
  height: 80px;
}

/* 快速导航 */
.quick-nav-section {
  padding: 40px 0;
  background: #f8f9ff;
}

.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.quick-nav-card {
  background: white;
  padding: 30px 20px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.quick-nav-card:hover {
  transform: translateY(-8px);
  border-color: #1e3c72;
  box-shadow: 0 8px 30px rgba(30, 60, 114, 0.2);
}

.nav-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0 auto 20px;
  transition: transform 0.3s ease;
}

.quick-nav-card:hover .nav-icon {
  transform: scale(1.1);
}

.quick-nav-card h4 {
  color: #1e3c72;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.quick-nav-card p {
  color: #666;
  font-size: 0.95rem;
  margin: 0;
}

/* 通用区域样式 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  color: #1e3c72;
  font-weight: 700;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #1e3c72, #64b5f6);
  border-radius: 2px;
}

.section-subtitle {
  color: #666;
  font-size: 1.1rem;
  margin-top: 20px;
}

/* 报到流程 */
.process-section {
  padding: 50px 0;
}

.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  padding-left: 80px;
  max-width: 1000px;
  margin: 0 auto;
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 25px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #1e3c72, #64b5f6);
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  position: relative;
}

.step-number {
  position: absolute;
  left: -55px;
  width: 50px;
  height: 50px;
  background: #1e3c72;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  flex-shrink: 0;
  z-index: 2;
}

.step-content {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 2px solid #e8f0fe;
  flex: 1;
  max-width: 100%;
  transition: all 0.3s ease;
}

.step-content::before {
  content: '';
  position: absolute;
  left: -11px;
  top: 30px;
  width: 20px;
  height: 20px;
  background: white;
  border: 2px solid #e8f0fe;
  transform: translateY(-50%) rotate(45deg);
}

/* 主要内容区域：左右布局 */
.step-main {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  margin-bottom: 20px;
}

/* 左侧：图标和标题 */
.step-left {
  flex: 1;
  max-width: 300px;
}

.step-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #1e3c72, #64b5f6);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.step-left h4 {
  color: #1e3c72;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.step-left p {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

/* 右侧：具体事项列表 */
.step-right {
  flex: 2;
  background: #f8f9ff;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e8f0fe;
}

.details-title {
  color: #1e3c72;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.details-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.details-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #546e7a;
  font-size: 0.9rem;
  line-height: 1.5;
}

.details-list i {
  color: #1e3c72;
  flex-shrink: 0;
  margin-top: 2px;
}

.details-list span {
  flex: 1;
}

/* 额外信息区域 */
.step-extra-info {
  margin-top: 0;
  padding: 16px;
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f0fe 100%);
  border-left: 4px solid #1e3c72;
  border-radius: 8px;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #546e7a;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.step-extra-info i {
  color: #1e3c72;
  flex-shrink: 0;
  margin-top: 2px;
}

/* 悬停效果 */
.step-content:hover {
  transform: translateX(5px);
  box-shadow: 0 12px 40px rgba(30, 60, 114, 0.15);
  border-color: #1e3c72;
}


/* 费用缴纳 */
.payment-section {
  padding: 50px 0;
  background: #f8f9ff;
}

.payment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.payment-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
}

.payment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(30, 60, 114, 0.15);
  border-color: #1e3c72;
}

.payment-header {
  background: linear-gradient(135deg, #1e3c72, #64b5f6);
  color: white;
  padding: 25px;
  text-align: center;
}

.payment-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.payment-header h4 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.payment-amount {
  font-size: 1.8rem;
  font-weight: 700;
  color: #64b5f6;
}

.payment-methods {
  padding: 20px 25px;
}

.payment-methods h6 {
  color: #1e3c72;
  font-weight: 600;
  margin-bottom: 12px;
}

.methods {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.method-tag {
  background: #e8f0fe;
  color: #1e3c72;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.payment-deadline {
  padding: 15px 25px;
  background: #f8f9ff;
  color: #666;
  font-size: 0.9rem;
  border-top: 1px solid #e8f0fe;
}

.payment-deadline i {
  color: #1e3c72;
}

/* 宿舍信息 */
.dormitory-section {
  padding: 80px 0;
}

.dormitory-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.dorm-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.dorm-card:hover {
  transform: translateY(-8px);
}

.dorm-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.dorm-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.dorm-card:hover .dorm-image img {
  transform: scale(1.05);
}

.dorm-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(30, 60, 114, 0.9);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.dorm-info {
  padding: 25px;
}

.dorm-info h4 {
  color: #1e3c72;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.dorm-info p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.dorm-facilities {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.facility-tag {
  background: #e8f0fe;
  color: #1e3c72;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* 生活服务 */
.services-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: #1e3c72;
  box-shadow: 0 15px 40px rgba(30, 60, 114, 0.15);
}

.service-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #1e3c72, #64b5f6);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0 auto 20px;
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
}

.service-card h4 {
  color: #1e3c72;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.service-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-location,
.service-time {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.service-location i,
.service-time i {
  color: #1e3c72;
  width: 16px;
  text-align: center;
}

/* 重要提醒 */
.reminders-section {
  padding: 80px 0;
}

.reminders-container {
  max-width: 1000px;
  margin: 0 auto;
}

.reminders-header {
  text-align: center;
  margin-bottom: 50px;
}

.reminder-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ff9800, #ffc107);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 20px;
}

.reminders-header h3 {
  color: #1e3c72;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.reminders-header p {
  color: #666;
  font-size: 1.1rem;
}

.reminders-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.reminder-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border-left: 5px solid;
  transition: transform 0.3s ease;
}

.reminder-card:hover {
  transform: translateY(-3px);
}

.reminder-card.warning {
  border-color: #ff9800;
}

.reminder-card.danger {
  border-color: #f44336;
}

.reminder-card.info {
  border-color: #2196f3;
}

.reminder-card .reminder-icon {
  width: 50px;
  height: 50px;
  font-size: 1.3rem;
  margin: 0 auto 20px;
  border-radius: 12px;
}

.reminder-card.warning .reminder-icon {
  background: linear-gradient(135deg, #ff9800, #ffc107);
}

.reminder-card.danger .reminder-icon {
  background: linear-gradient(135deg, #f44336, #ff5722);
}

.reminder-card.info .reminder-icon {
  background: linear-gradient(135deg, #2196f3, #03a9f4);
}

.reminder-card h5 {
  color: #1e3c72;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
}

.reminder-card p {
  color: #666;
  line-height: 1.6;
  margin: 0;
  text-align: center;
}

/* 联系方式 */
.contact-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.contact-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-header {
  background: linear-gradient(135deg, #1e3c72, #64b5f6);
  color: white;
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-avatar {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.contact-info h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.contact-info p {
  opacity: 0.9;
  margin: 0;
}

.contact-details {
  padding: 20px 25px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  color: #666;
}

.contact-item i {
  color: #1e3c72;
  width: 16px;
  text-align: center;
}

.contact-status {
  padding: 12px 25px;
  border-top: 1px solid #e8f0fe;
  font-size: 0.9rem;
  font-weight: 500;
}

.contact-status.online {
  color: #4caf50;
}

.contact-status.online i {
  color: #4caf50;
}

.contact-status.busy {
  color: #ff9800;
}

.contact-status.busy i {
  color: #ff9800;
}

/* 悬浮按钮 */
.floating-actions {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.fab {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.back-to-top {
  background: linear-gradient(135deg, #1e3c72, #64b5f6);
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(30, 60, 114, 0.3);
}

.contact-fab {
  background: linear-gradient(135deg, #4caf50, #66bb6a);
}

.contact-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(76, 175, 80, 0.3);
}

/* 联系弹窗 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 90%;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  background: linear-gradient(135deg, #1e3c72, #64b5f6);
  color: white;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h4 {
  margin: 0;
  font-size: 1.3rem;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal-body {
  padding: 30px 25px;
}

.quick-contacts {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.quick-contact {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background: #f8f9ff;
  border-radius: 12px;
  text-decoration: none;
  color: #1e3c72;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.quick-contact:hover {
  background: white;
  border-color: #1e3c72;
  box-shadow: 0 4px 12px rgba(30, 60, 114, 0.1);
  transform: translateY(-2px);
}

.quick-contact i {
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .dormitory-types {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-stats {
    gap: 30px;
  }

  .quick-nav-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-timeline {
    padding-left: 60px;
    gap: 25px;
  }

  .process-timeline::before {
    left: 20px;
  }

  .step-number {
    left: -45px;
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }

  .step-content {
    padding: 25px;
  }

  .step-content::before {
    left: -9px;
    width: 18px;
    height: 18px;
  }

  .step-main {
    gap: 25px;
  }

  .step-left {
    max-width: 280px;
  }

  .step-icon {
    width: 55px;
    height: 55px;
    font-size: 1.4rem;
    margin-bottom: 14px;
  }

  .step-left h4 {
    font-size: 1.2rem;
  }

  .step-right {
    padding: 18px;
  }

  .details-title {
    font-size: 0.95rem;
    margin-bottom: 14px;
  }

  .details-list li {
    font-size: 0.87rem;
    gap: 7px;
  }

  .step-extra-info {
    padding: 14px;
    font-size: 0.87rem;
  }

  .payment-grid,
  .dormitory-types,
  .services-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .dormitory-types {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .reminders-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}

/* 移动端优化 */
@media (max-width: 480px) {
  .process-timeline {
    padding-left: 50px;
    gap: 20px;
  }

  .process-timeline::before {
    left: 15px;
  }

  .step-number {
    left: -40px;
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .step-content {
    padding: 20px;
  }

  .step-content::before {
    left: -8px;
    width: 16px;
    height: 16px;
  }

  .step-icon {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }

  .step-main {
    flex-direction: column;
    gap: 20px;
  }

  .step-left {
    max-width: 100%;
  }

  .step-icon {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    margin-bottom: 12px;
  }

  .step-left h4 {
    font-size: 1.1rem;
  }

  .step-right {
    padding: 15px;
  }

  .details-title {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }

  .details-list li {
    font-size: 0.85rem;
    gap: 6px;
  }

  .step-extra-info {
    padding: 12px;
    font-size: 0.85rem;
  }
}
</style>