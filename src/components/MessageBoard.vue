<!-- 新生留言板组件 - 现代化设计 -->
<template>
  <div class="message-board-container">
    <!-- 留言提交区域 -->
    <div class="submission-section">
      <div class="submission-card">
        <div class="submission-header">
          <div class="header-icon">
            <i class="fas fa-feather-alt"></i>
          </div>
          <div class="header-text">
            <h3>发表留言</h3>
            <p>分享你的期待、疑问和想法</p>
          </div>
        </div>

        <form @submit.prevent="submitMessage" class="submission-form">
          <div class="form-row">
            <div class="input-group">
              <label class="input-label">
                <i class="fas fa-user"></i>
                昵称
              </label>
              <input
                type="text"
                class="modern-input"
                v-model="formData.nickname"
                placeholder="请输入你的昵称"
                :class="{ 'error': errors.nickname }"
                maxlength="20"
              >
              <div class="input-error" v-if="errors.nickname">
                {{ errors.nickname }}
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="input-group full-width">
              <label class="input-label">
                <i class="fas fa-comment-dots"></i>
                留言内容
              </label>
              <textarea
                class="modern-textarea"
                v-model="formData.content"
                rows="4"
                placeholder="分享你对大学生活的期待和想法..."
                :class="{ 'error': errors.content }"
                maxlength="200"
              ></textarea>
              <div class="input-footer">
                <div class="char-count">
                  {{ formData.content.length }}/200
                </div>
                <div class="input-error" v-if="errors.content">
                  {{ errors.content }}
                </div>
              </div>
            </div>
          </div>

          <!-- 表情选择器 -->
          <div class="emoji-selector">
            <label class="emoji-label">添加表情:</label>
            <div class="emoji-grid">
              <button
                type="button"
                class="emoji-btn"
                v-for="emoji in emojis"
                :key="emoji"
                @click="addEmoji(emoji)"
              >
                {{ emoji }}
              </button>
            </div>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <div class="btn-content">
              <i class="fas fa-paper-plane" v-if="!isSubmitting"></i>
              <i class="fas fa-spinner fa-spin" v-if="isSubmitting"></i>
              <span>{{ isSubmitting ? '发布中...' : '发表留言' }}</span>
            </div>
          </button>
        </form>
      </div>
    </div>

    <!-- 留言展示区域 -->
    <div class="messages-section">
      <div class="messages-header">
        <div class="header-left">
          <h3>
            <i class="fas fa-comments"></i>
            新生留言板
          </h3>
          <div class="message-stats">
            <span class="stat-badge">
              <i class="fas fa-chart-line"></i>
              {{ totalMessages }} 条留言
            </span>
            <span class="stat-badge">
              <i class="fas fa-users"></i>
              {{ uniqueUsers }} 位同学参与
            </span>
          </div>
        </div>
        <div class="header-right">
          <button class="refresh-btn" @click="refreshMessages">
            <i class="fas fa-sync-alt"></i>
            刷新
          </button>
        </div>
      </div>

      <!-- 示例留言 -->
      <div class="example-messages" v-if="showExamples">
        <div class="example-header">
          <i class="fas fa-star"></i>
          <h4>示例留言</h4>
          <span>来看看其他同学的留言</span>
        </div>

        <div class="messages-grid">
          <div v-for="message in exampleMessages" :key="message.id" class="message-card example">
            <div class="message-avatar">
              <div class="avatar-placeholder">
                <i class="fas fa-user-graduate"></i>
              </div>
            </div>
            <div class="message-body">
              <div class="message-header">
                <div class="author-info">
                  <h5>{{ message.nickname }}</h5>
                  <span class="user-badge">新生</span>
                </div>
                <div class="message-time">
                  {{ formatTime(message.createdAt) }}
                </div>
              </div>
              <div class="message-content">
                {{ message.content }}
              </div>
              <div class="message-footer">
                <div class="message-tags">
                  <span class="tag">#期待</span>
                  <span class="tag">#新生生活</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 用户留言 -->
      <div class="user-messages">
        <div v-if="userMessages.length === 0 && !showExamples" class="empty-state">
          <div class="empty-icon">
            <i class="fas fa-comments"></i>
          </div>
          <h3>还没有留言</h3>
          <p>快来发表第一条留言，分享你的期待吧！</p>
        </div>

        <div v-else class="messages-grid">
          <div
            v-for="message in displayMessages"
            :key="message.id"
            class="message-card"
            :class="{
              'own-message': message.isOwn,
              'example': !message.isOwn && showExamples
            }"
          >
            <div class="message-avatar">
              <div class="avatar-placeholder" :class="{ 'own': message.isOwn }">
                <i class="fas" :class="message.isOwn ? 'fa-user' : 'fa-user-graduate'"></i>
              </div>
            </div>

            <div class="message-body">
              <div class="message-header">
                <div class="author-info">
                  <h5>
                    {{ message.nickname }}
                    <span class="own-badge" v-if="message.isOwn">
                      <i class="fas fa-check-circle"></i>
                      我的留言
                    </span>
                  </h5>
                  <span class="user-badge">{{ message.isOwn ? '我' : '新生' }}</span>
                </div>
                <div class="message-time">
                  <i class="far fa-clock"></i>
                  {{ formatTime(message.createdAt) }}
                </div>
              </div>

              <div class="message-content">
                {{ message.content }}
              </div>

              <div class="message-footer">
                <div class="message-tags" v-if="!message.isOwn && showExamples">
                  <span class="tag">#期待</span>
                  <span class="tag">#分享</span>
                </div>
                <div class="message-actions" v-if="message.isOwn">
                  <button class="action-btn like-btn">
                    <i class="far fa-heart"></i>
                    <span>喜欢</span>
                  </button>
                  <button class="action-btn delete-btn" @click="deleteMessage(message.id)">
                    <i class="fas fa-trash"></i>
                    <span>删除</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 成功提示 -->
    <div class="success-overlay" v-if="showSuccess" @click="showSuccess = false">
      <div class="success-modal" @click.stop>
        <div class="success-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <h3>留言发表成功！</h3>
        <p>感谢您的留言，期待在石大与您相遇！</p>
        <button class="success-btn" @click="showSuccess = false">
          确定
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

// Vue3响应式数据管理
const formData = reactive({
  nickname: '',
  content: ''
})

const errors = reactive({
  nickname: '',
  content: ''
})

const isSubmitting = ref(false)
const showExamples = ref(true)
const showSuccess = ref(false)

// 表情选择器
const emojis = ['😊', '😍', '🎉', '💪', '📚', '🏫', '👋', '💯', '🌟', '❤️', '🎯', '🚀']

// 示例留言数据
const exampleMessages = ref([
  {
    id: 1,
    nickname: '2024级小明',
    content: '期待已久的大学生活终于要开始了！希望能在这里认识更多志同道合的朋友，一起学习，一起成长！💪',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2天前
    isOwn: false
  },
  {
    id: 2,
    nickname: '2024级小红',
    content: '学长学姐们好，请问开学需要准备什么？第一次离家这么远，有点紧张又有点期待呢！😊',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1天前
    isOwn: false
  },
  {
    id: 3,
    nickname: '2024级小李',
    content: '石河子真的很美，期待见到大家！听说秋天的时候校园特别漂亮，已经迫不及待想拍照了！📸',
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3小时前
    isOwn: false
  }
])

// 用户留言数据
const userMessages = ref([])

// 计算属性
const displayMessages = computed(() => {
  const allMessages = [...userMessages.value, ...exampleMessages.value]
  return allMessages
    .sort((a, b) => b.createdAt - a.createdAt) // 按时间倒序
    .slice(0, 20) // 限制显示最多20条
})

const totalMessages = computed(() => {
  return userMessages.value.length + exampleMessages.value.length
})

const uniqueUsers = computed(() => {
  const allMessages = [...userMessages.value, ...exampleMessages.value]
  const uniqueNicknames = new Set(allMessages.map(msg => msg.nickname))
  return uniqueNicknames.size
})

// 添加表情
const addEmoji = (emoji) => {
  formData.content += emoji
}

// 刷新留言
const refreshMessages = () => {
  // 模拟刷新效果
  const btn = document.querySelector('.refresh-btn i')
  if (btn) {
    btn.style.transform = 'rotate(360deg)'
    setTimeout(() => {
      btn.style.transform = 'rotate(0deg)'
    }, 500)
  }
}

// 表单验证
const validateForm = () => {
  errors.nickname = ''
  errors.content = ''

  if (!formData.nickname.trim()) {
    errors.nickname = '请输入昵称'
    return false
  }

  if (formData.nickname.trim().length < 2) {
    errors.nickname = '昵称至少需要2个字符'
    return false
  }

  if (!formData.content.trim()) {
    errors.content = '请输入留言内容'
    return false
  }

  if (formData.content.trim().length < 5) {
    errors.content = '留言内容至少需要5个字符'
    return false
  }

  // 检查敏感词（简单示例）
  const sensitiveWords = ['广告', '推广', '微信', 'QQ']
  const hasSensitiveWord = sensitiveWords.some(word =>
    formData.content.includes(word) || formData.nickname.includes(word)
  )

  if (hasSensitiveWord) {
    errors.content = '留言内容包含不当词汇'
    return false
  }

  return true
}

// 提交留言
const submitMessage = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // 模拟API请求延迟
    await new Promise(resolve => setTimeout(resolve, 1000))

    // 创建新留言
    const newMessage = {
      id: Date.now(),
      nickname: formData.nickname.trim(),
      content: formData.content.trim(),
      createdAt: new Date(),
      isOwn: true
    }

    // 添加到留言列表（限制每个用户最多3条）
    if (userMessages.value.length >= 3) {
      userMessages.value.shift() // 移除最旧的留言
    }
    userMessages.value.push(newMessage)

    // 重置表单
    formData.nickname = ''
    formData.content = ''

    // 隐藏示例留言
    showExamples.value = false

    // 显示成功提示
    showSuccess.value = true

  } catch (error) {
    console.error('留言提交失败:', error)
    alert('留言提交失败，请稍后重试')
  } finally {
    isSubmitting.value = false
  }
}

// 删除留言
const deleteMessage = (messageId) => {
  if (confirm('确定要删除这条留言吗？')) {
    const index = userMessages.value.findIndex(msg => msg.id === messageId)
    if (index > -1) {
      userMessages.value.splice(index, 1)
    }
  }
}

// 格式化时间
const formatTime = (date) => {
  const now = new Date()
  const diff = now - date
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return '刚刚'
  if (minutes < 60) return `${minutes}分钟前`
  if (hours < 24) return `${hours}小时前`
  if (days < 7) return `${days}天前`

  return date.toLocaleDateString('zh-CN')
}
</script>

<style scoped>
/* 留言板容器 */
.message-board-container {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 40px;
  padding: 40px 0;
  max-width: 1400px;
  margin: 0 auto;
}

/* 提交区域 */
.submission-section {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.submission-card {
  background: white;
  border-radius: 20px;
  padding: 0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 2px solid #e8f0fe;
  overflow: hidden;
}

.submission-header {
  background: linear-gradient(135deg, #1e3c72 0%, #64b5f6 100%);
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
  color: white;
}

.header-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  backdrop-filter: blur(10px);
}

.header-text h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 5px;
}

.header-text p {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.9;
}

.submission-form {
  padding: 30px;
}

.form-row {
  margin-bottom: 25px;
}

.input-group {
  position: relative;
}

.input-group.full-width {
  width: 100%;
}

.input-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1e3c72;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.input-label i {
  width: 16px;
  text-align: center;
}

.modern-input,
.modern-textarea {
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #e8f0fe;
  border-radius: 12px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background: #f8f9ff;
  box-sizing: border-box;
}

.modern-input:focus,
.modern-textarea:focus {
  outline: none;
  border-color: #1e3c72;
  background: white;
  box-shadow: 0 0 0 4px rgba(30, 60, 114, 0.1);
}

.modern-input.error,
.modern-textarea.error {
  border-color: #ef5350;
  background: #fff5f5;
}

.modern-textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.input-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.char-count {
  font-size: 0.85rem;
  color: #666;
}

.input-error {
  font-size: 0.85rem;
  color: #ef5350;
  font-weight: 500;
}

/* 表情选择器 */
.emoji-selector {
  margin-bottom: 25px;
  padding: 20px;
  background: #f8f9ff;
  border-radius: 12px;
  border: 1px solid #e8f0fe;
}

.emoji-label {
  display: block;
  color: #1e3c72;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.emoji-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}

.emoji-btn {
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  background: white;
  border-radius: 10px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.emoji-btn:hover {
  border-color: #1e3c72;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(30, 60, 114, 0.2);
}

.submit-btn {
  width: 100%;
  padding: 18px 30px;
  background: linear-gradient(135deg, #1e3c72 0%, #64b5f6 100%);
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(30, 60, 114, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 留言展示区域 */
.messages-section {
  min-height: 600px;
}

.messages-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e8f0fe;
}

.header-left h3 {
  color: #1e3c72;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.message-stats {
  display: flex;
  gap: 15px;
}

.stat-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #e8f0fe;
  color: #1e3c72;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.refresh-btn {
  background: #f8f9ff;
  border: 2px solid #e8f0fe;
  color: #1e3c72;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.refresh-btn:hover {
  background: #e8f0fe;
  transform: rotate(180deg);
}

.refresh-btn i {
  transition: transform 0.5s ease;
}

/* 示例留言 */
.example-messages {
  margin-bottom: 40px;
}

.example-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding: 15px 20px;
  background: linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%);
  border-radius: 12px;
  border-left: 4px solid #ffc107;
}

.example-header i {
  color: #ffc107;
  font-size: 1.2rem;
}

.example-header h4 {
  color: #856404;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.example-header span {
  color: #856404;
  font-size: 0.9rem;
}

/* 留言网格 */
.messages-grid {
  display: grid;
  gap: 20px;
}

.message-card {
  background: white;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 2px solid #e8f0fe;
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.message-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(30, 60, 114, 0.15);
  border-color: #1e3c72;
}

.message-card.example {
  border-left: 4px solid #ffc107;
  background: linear-gradient(135deg, #fff9e6 0%, #ffffff 100%);
}

.message-card.own-message {
  border-left: 4px solid #4caf50;
  background: linear-gradient(135deg, #e8f5e8 0%, #ffffff 100%);
}

.message-avatar {
  flex-shrink: 0;
}

.avatar-placeholder {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #e8f0fe 0%, #bbdefb 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e3c72;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.avatar-placeholder.own {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  color: #4caf50;
}

.message-body {
  flex: 1;
  min-width: 0;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.author-info h5 {
  color: #1e3c72;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.own-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #4caf50;
  color: white;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 600;
}

.user-badge {
  background: #e8f0fe;
  color: #1e3c72;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 500;
}

.message-time {
  color: #999;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.message-content {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
  word-wrap: break-word;
}

.message-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.message-tags {
  display: flex;
  gap: 8px;
}

.tag {
  background: #e8f0fe;
  color: #1e3c72;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.message-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  border: 1px solid #e8f0fe;
  background: white;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.like-btn:hover {
  border-color: #ef5350;
  color: #ef5350;
}

.delete-btn:hover {
  border-color: #ef5350;
  color: #ef5350;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.empty-icon {
  font-size: 4rem;
  color: #e8f0fe;
  margin-bottom: 20px;
}

.empty-state h3 {
  color: #666;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 10px;
}

.empty-state p {
  color: #999;
  font-size: 1rem;
  margin: 0;
}

/* 成功提示 */
.success-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.success-modal {
  background: white;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  max-width: 400px;
  animation: successPop 0.3s ease-out;
}

@keyframes successPop {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.success-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 2.5rem;
}

.success-modal h3 {
  color: #1e3c72;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
}

.success-modal p {
  color: #666;
  font-size: 1rem;
  margin: 0;
  margin-bottom: 25px;
}

.success-btn {
  background: linear-gradient(135deg, #1e3c72 0%, #64b5f6 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.success-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(30, 60, 114, 0.3);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .message-board-container {
    grid-template-columns: 350px 1fr;
    gap: 30px;
  }
}

@media (max-width: 1024px) {
  .message-board-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .submission-section {
    position: static;
  }

  .submission-card {
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .message-board-container {
    padding: 20px 0;
  }

  .submission-form,
  .message-card {
    padding: 20px;
  }

  .emoji-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .messages-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .message-stats {
    flex-wrap: wrap;
  }

  .message-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .message-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .message-card {
    padding: 15px;
    flex-direction: column;
    gap: 15px;
  }

  .message-avatar {
    align-self: flex-start;
  }

  .submission-header {
    padding: 20px;
  }

  .submission-form {
    padding: 20px;
  }

  .emoji-selector {
    padding: 15px;
  }

  .emoji-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }

  .emoji-btn {
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
  }
}
</style>