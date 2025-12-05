# 滚动动画功能使用指南

## 🎬 功能介绍

我们为网站添加了类似PPT的滚动触发动画效果！当你向下滚动页面时，新出现的模块会有平滑的进入动画。

## ✨ 支持的动画类型

### 基础动画
- **`fade-in-up`** - 从下往上淡入 (默认)
- **`fade-in-down`** - 从上往下淡入
- **`fade-in-left`** - 从左往右淡入
- **`fade-in-right`** - 从右往左淡入
- **`slide-in-up`** - 从下往上滑入
- **`slide-in-down`** - 从上往下滑入

### 特效动画
- **`scale-in`** - 缩放进入
- **`rotate-in`** - 旋转进入
- **`zoom-in`** - 放大进入

## 📝 使用方法

### 在模板中添加动画

```vue
<template>
  <!-- 基础用法 - 使用默认fade-in-up动画 -->
  <div data-scroll-animation>
    这个元素会有滚动动画效果
  </div>

  <!-- 指定动画类型 -->
  <div data-scroll-animation data-animation="fade-in-left">
    这个元素会从左往右淡入
  </div>

  <!-- 添加延迟效果 -->
  <div data-scroll-animation data-animation="scale-in" data-delay="400">
    这个元素会延迟400ms后缩放进入
  </div>
</template>
```

### 在Vue组件中引入

```vue
<script setup>
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { initAnimation } = useScrollAnimation()

onMounted(() => {
  // 延迟初始化，确保DOM完全加载
  setTimeout(() => {
    initAnimation()
  }, 300)
})
</script>
```

## 🎨 实际应用示例

### 1. 标题动画
```vue
<h1
  data-scroll-animation
  data-animation="fade-in-down"
>
  页面标题
</h1>
```

### 2. 卡片序列动画
```vue
<div class="row">
  <div
    class="col-md-4"
    data-scroll-animation
    data-animation="fade-in-left"
    data-delay="200"
  >
    <!-- 第一个卡片 -->
  </div>
  <div
    class="col-md-4"
    data-scroll-animation
    data-animation="fade-in-up"
    data-delay="400"
  >
    <!-- 第二个卡片 -->
  </div>
  <div
    class="col-md-4"
    data-scroll-animation
    data-animation="fade-in-right"
    data-delay="600"
  >
    <!-- 第三个卡片 -->
  </div>
</div>
```

### 3. 统计数字动画
```vue
<div class="stats">
  <div data-scroll-animation data-animation="scale-in" data-delay="200">
    <div class="stat-number">100+</div>
    <div class="stat-label">专业</div>
  </div>
  <div data-scroll-animation data-animation="scale-in" data-delay="400">
    <div class="stat-number">3万+</div>
    <div class="stat-label">学生</div>
  </div>
  <div data-scroll-animation data-animation="scale-in" data-delay="600">
    <div class="stat-number">2000+</div>
    <div class="stat-label">教师</div>
  </div>
</div>
```

## ⚙️ 配置参数

| 属性 | 可选值 | 默认值 | 说明 |
|------|--------|--------|------|
| `data-scroll-animation` | 无 | 无 | 启用滚动动画 |
| `data-animation` | 动画类型 | `fade-in-up` | 指定动画效果 |
| `data-delay` | 数字(毫秒) | `0` | 动画延迟时间 |

## 🚀 性能优化

- 使用 `Intersection Observer API`，性能优秀
- 动画触发后会自动取消监听，避免重复计算
- 支持提前触发配置，提升用户体验

## 🎯 触发条件

- 元素10%进入视窗时触发动画
- 提前50px开始监听，确保流畅体验
- 每个元素只会触发一次动画

## 💡 最佳实践

1. **渐进式展示** - 使用不同的延迟时间创建序列动画
2. **层次感** - 重要内容使用更明显的动画
3. **适度使用** - 不要过度使用动画，保持页面简洁
4. **测试优化** - 在不同设备上测试动画效果

## 🔧 技术实现

- **Vue 3 Composition API** - 现代化的组件开发
- **Intersection Observer** - 高性能的滚动监听
- **CSS Transitions** - 流畅的动画效果
- **TypeScript支持** - 更好的开发体验

享受你的新滚动动画效果吧！🎉