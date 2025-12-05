<!-- 迎新指南折叠模块 - 石河子大学迎新主题网页 -->
<!-- 4类服务指引，点击展开/收起，图标旋转效果 -->
<!-- Font Awesome图标: CC BY 4.0协议 - https://fontawesome.com/license -->

<template>
  <div class="guide-accordion">
    <div class="row g-4">
      <!-- 报到流程 -->
      <div class="col-md-6">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingRegistration">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseRegistration"
              aria-expanded="false"
              aria-controls="collapseRegistration"
            >
              <i class="fas fa-user-check me-3 accordion-icon"></i>
              <span class="guide-title">报到流程</span>
              <span class="guide-subtitle">注册→验证→分班→领物品</span>
            </button>
          </h2>
          <div
            id="collapseRegistration"
            class="accordion-collapse collapse"
            aria-labelledby="headingRegistration"
            data-bs-parent="#guideAccordion"
          >
            <div class="accordion-body">
              <div class="guide-content">
                <h5 class="content-title">
                  <i class="fas fa-clipboard-list me-2"></i>
                  新生报到完整流程
                </h5>

                <div class="process-steps">
                  <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                      <h6>身份验证</h6>
                      <p>携带录取通知书、身份证、准考证等相关证件到指定地点进行身份核验。</p>
                    </div>
                  </div>

                  <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                      <h6>信息确认</h6>
                      <p>核对个人信息，填写学籍登记表，确认专业班级分配情况。</p>
                    </div>
                  </div>

                  <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-content">
                      <h6>缴费办理</h6>
                      <p>办理学费、住宿费等费用缴纳手续，领取缴费凭证。</p>
                    </div>
                  </div>

                  <div class="step-item">
                    <div class="step-number">4</div>
                    <div class="step-content">
                      <h6>物品领取</h6>
                      <p>领取校园卡、学生证、宿舍钥匙等重要物品。</p>
                    </div>
                  </div>
                </div>

                <div class="tips-section">
                  <h6><i class="fas fa-lightbulb me-2"></i>温馨提示</h6>
                  <ul>
                    <li>请提前准备好所有必要证件的原件和复印件</li>
                    <li>建议错峰报到，避免排队时间过长</li>
                    <li>如有特殊情况，请及时联系迎新志愿者</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 宿舍分配 -->
      <div class="col-md-6">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingDormitory">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDormitory"
              aria-expanded="false"
              aria-controls="collapseDormitory"
            >
              <i class="fas fa-bed me-3 accordion-icon"></i>
              <span class="guide-title">宿舍分配</span>
              <span class="guide-subtitle">查询→确认→入住→设施报修</span>
            </button>
          </h2>
          <div
            id="collapseDormitory"
            class="accordion-collapse collapse"
            aria-labelledby="headingDormitory"
            data-bs-parent="#guideAccordion"
          >
            <div class="accordion-body">
              <div class="guide-content">
                <h5 class="content-title">
                  <i class="fas fa-home me-2"></i>
                  宿舍入住指南
                </h5>

                <div class="dorm-info">
                  <div class="info-card">
                    <h6><i class="fas fa-users me-2"></i>宿舍类型</h6>
                    <ul>
                      <li>4人间：配备独立卫浴、空调、书桌</li>
                      <li>6人间：配备公共卫浴、空调、储物柜</li>
                      <li>每层楼设有洗衣房和公共活动区</li>
                    </ul>
                  </div>

                  <div class="info-card">
                    <h6><i class="fas fa-tools me-2"></i>入住准备</h6>
                    <ul>
                      <li>床上用品：被褥、枕头、床单被套</li>
                      <li>洗漱用品：毛巾、牙刷、洗浴用品</li>
                      <li>生活用品：水杯、衣架、小锁等</li>
                    </ul>
                  </div>
                </div>

                <div class="process-steps">
                  <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                      <h6>宿舍查询</h6>
                      <p>通过迎新系统查询宿舍分配结果和室友信息。</p>
                    </div>
                  </div>

                  <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                      <h6>领取钥匙</h6>
                      <p>到宿舍管理中心领取宿舍钥匙和门禁卡。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 缴费通道 -->
      <div class="col-md-6">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingPayment">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePayment"
              aria-expanded="false"
              aria-controls="collapsePayment"
            >
              <i class="fas fa-credit-card me-3 accordion-icon"></i>
              <span class="guide-title">缴费通道</span>
              <span class="guide-subtitle">学费→住宿费→其他费用</span>
            </button>
          </h2>
          <div
            id="collapsePayment"
            class="accordion-collapse collapse"
            aria-labelledby="headingPayment"
            data-bs-parent="#guideAccordion"
          >
            <div class="accordion-body">
              <div class="guide-content">
                <h5 class="content-title">
                  <i class="fas fa-wallet me-2"></i>
                  学费缴纳方式
                </h5>

                <div class="payment-methods">
                  <div class="method-item">
                    <div class="method-icon">
                      <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="method-info">
                      <h6>线上缴费</h6>
                      <p>通过学校官方微信公众号、APP或网银缴费，支持支付宝、微信支付。</p>
                      <small class="text-muted">推荐使用，方便快捷</small>
                    </div>
                  </div>

                  <div class="method-item">
                    <div class="method-icon">
                      <i class="fas fa-university"></i>
                    </div>
                    <div class="method-info">
                      <h6>银行转账</h6>
                      <p>通过银行柜台或ATM机转账至学校指定账户。</p>
                      <small class="text-muted">请备注学号和姓名</small>
                    </div>
                  </div>

                  <div class="method-item">
                    <div class="method-icon">
                      <i class="fas fa-money-bill-wave"></i>
                  </div>
                    <div class="method-info">
                      <h6>现场缴费</h6>
                      <p>报到当天在财务处现场现金或刷卡缴费。</p>
                      <small class="text-muted">支持银联卡和现金</small>
                    </div>
                  </div>
                </div>

                <div class="fee-breakdown">
                  <h6><i class="fas fa-list-ul me-2"></i>费用明细</h6>
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>费用项目</th>
                        <th>金额（元/年）</th>
                        <th>备注</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>学费</td>
                        <td>5000-8000</td>
                        <td>按专业不同</td>
                      </tr>
                      <tr>
                        <td>住宿费</td>
                        <td>1200-1600</td>
                        <td>按宿舍类型</td>
                      </tr>
                      <tr>
                        <td>教材费</td>
                        <td>800</td>
                        <td>多退少补</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 校园卡办理 -->
      <div class="col-md-6">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingCampusCard">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCampusCard"
              aria-expanded="false"
              aria-controls="collapseCampusCard"
            >
              <i class="fas fa-id-card me-3 accordion-icon"></i>
              <span class="guide-title">校园卡办理</span>
              <span class="guide-subtitle">申请→制卡→领取→充值</span>
            </button>
          </h2>
          <div
            id="collapseCampusCard"
            class="accordion-collapse collapse"
            aria-labelledby="headingCampusCard"
            data-bs-parent="#guideAccordion"
          >
            <div class="accordion-body">
              <div class="guide-content">
                <h5 class="content-title">
                  <i class="fas fa-credit-card me-2"></i>
                  校园一卡通使用指南
                </h5>

                <div class="card-functions">
                  <div class="function-item">
                    <i class="fas fa-utensils"></i>
                    <span>食堂就餐</span>
                  </div>
                  <div class="function-item">
                    <i class="fas fa-book"></i>
                    <span>图书借阅</span>
                  </div>
                  <div class="function-item">
                    <i class="fas fa-door-open"></i>
                    <span>门禁考勤</span>
                  </div>
                  <div class="function-item">
                    <i class="fas fa-bus"></i>
                    <span>校车乘坐</span>
                  </div>
                  <div class="function-item">
                    <i class="fas fa-shopping-cart"></i>
                    <span>超市消费</span>
                  </div>
                  <div class="function-item">
                    <i class="fas fa-print"></i>
                    <span>打印复印</span>
                  </div>
                </div>

                <div class="process-steps">
                  <div class="step-item">
                    <div class="step-number">1</div>
                    <div class="step-content">
                      <h6>证件准备</h6>
                      <p>准备1寸免冠照片2张，身份证复印件1份。</p>
                    </div>
                  </div>

                  <div class="step-item">
                    <div class="step-number">2</div>
                    <div class="step-content">
                      <h6>现场办理</h6>
                      <p>到校园卡中心填写申请表，现场制卡。</p>
                    </div>
                  </div>

                  <div class="step-item">
                    <div class="step-number">3</div>
                    <div class="step-content">
                      <h6>充值激活</h6>
                      <p>首次充值100元，设置消费密码。</p>
                    </div>
                  </div>
                </div>

                <div class="tips-section">
                  <h6><i class="fas fa-info-circle me-2"></i>重要提醒</h6>
                  <ul>
                    <li>校园卡请妥善保管，遗失需立即挂失</li>
                    <li>可通过校园卡APP或自助机充值</li>
                    <li>消费密码默认为身份证后6位</li>
                    <li>每日消费限额100元，超限需输入密码</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// 组件挂载后的初始化
onMounted(() => {
  // 为所有accordion按钮添加旋转图标效果
  const accordionButtons = document.querySelectorAll('.accordion-button')

  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const icon = this.querySelector('.accordion-icon')
      if (icon) {
        if (this.classList.contains('collapsed')) {
          icon.style.transform = 'rotate(0deg)'
        } else {
          icon.style.transform = 'rotate(180deg)'
        }
      }
    })
  })
})
</script>

<style scoped>
.guide-accordion {
  margin: var(--spacing-xl) 0;
}

.accordion-item {
  border: none;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.accordion-item:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.accordion-button {
  background-color: var(--surface);
  color: var(--text-primary);
  font-weight: var(--fw-semibold);
  padding: var(--spacing-lg);
  border: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  position: relative;
}

.accordion-button:not(.collapsed) {
  background: linear-gradient(135deg, rgba(193, 39, 45, 0.05), rgba(193, 39, 45, 0.1));
  color: var(--primary-color);
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: 0 0 0 3px rgba(193, 39, 45, 0.25);
}

.accordion-button::after {
  display: none; /* 隐藏Bootstrap默认箭头 */
}

.accordion-icon {
  font-size: 24px;
  color: var(--primary-color);
  transition: transform var(--transition-normal);
  flex-shrink: 0;
}

.guide-title {
  font-size: var(--text-lg);
  font-weight: var(--fw-bold);
}

.guide-subtitle {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-left: auto;
}

.accordion-body {
  padding: 0;
  background-color: var(--surface);
}

.guide-content {
  padding: var(--spacing-lg);
}

.content-title {
  color: var(--primary-color);
  font-size: var(--text-h4);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--fw-semibold);
}

/* 步骤样式 */
.process-steps {
  margin: var(--spacing-lg) 0;
}

.step-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
  gap: var(--spacing-md);
}

.step-number {
  width: 32px;
  height: 32px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--fw-bold);
  flex-shrink: 0;
}

.step-content h6 {
  color: var(--text-primary);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--spacing-xs);
}

.step-content p {
  color: var(--text-secondary);
  margin-bottom: 0;
  line-height: var(--lh-normal);
}

/* 宿舍信息卡片 */
.dorm-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.info-card {
  background-color: rgba(193, 39, 45, 0.05);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--primary-color);
}

.info-card h6 {
  color: var(--primary-color);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--spacing-sm);
}

.info-card ul {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.info-card li {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
  font-size: var(--text-sm);
}

/* 缴费方式 */
.payment-methods {
  margin: var(--spacing-lg) 0;
}

.method-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  background-color: rgba(24, 144, 255, 0.05);
  transition: all var(--transition-fast);
}

.method-item:hover {
  background-color: rgba(24, 144, 255, 0.1);
  transform: translateX(4px);
}

.method-icon {
  width: 48px;
  height: 48px;
  background: var(--info-color);
  color: white;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.method-info h6 {
  color: var(--text-primary);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--spacing-xs);
}

.method-info p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
}

/* 校园卡功能 */
.card-functions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.function-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--fw-medium);
  transition: all var(--transition-fast);
}

.function-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.function-item i {
  font-size: 24px;
}

/* 费用表格 */
.fee-breakdown {
  margin: var(--spacing-lg) 0;
}

.fee-breakdown h6 {
  color: var(--primary-color);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--spacing-sm);
}

.table {
  font-size: var(--text-sm);
}

.table th {
  background-color: rgba(193, 39, 45, 0.1);
  color: var(--text-primary);
  font-weight: var(--fw-semibold);
  border: none;
}

.table td {
  color: var(--text-secondary);
  border-color: var(--border-color);
}

/* 温馨提示 */
.tips-section {
  background-color: rgba(250, 173, 20, 0.1);
  border-left: 4px solid var(--warning-color);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-top: var(--spacing-lg);
}

.tips-section h6 {
  color: var(--warning-color);
  font-weight: var(--fw-semibold);
  margin-bottom: var(--spacing-sm);
}

.tips-section ul {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.tips-section li {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
  font-size: var(--text-sm);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .dorm-info {
    grid-template-columns: 1fr;
  }

  .card-functions {
    grid-template-columns: repeat(2, 1fr);
  }

  .method-item {
    flex-direction: column;
    text-align: center;
  }

  .accordion-button {
    padding: var(--spacing-md);
    font-size: var(--text-sm);
  }

  .guide-subtitle {
    display: none;
  }
}

@media (max-width: 576px) {
  .card-functions {
    grid-template-columns: 1fr;
  }

  .step-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .guide-content {
    padding: var(--spacing-md);
  }
}

/* 动画效果 */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.accordion-collapse.show .guide-content {
  animation: slideDown 0.3s ease-out;
}
</style>