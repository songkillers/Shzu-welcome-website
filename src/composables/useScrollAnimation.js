import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observer = ref(null)
  const animatedElements = ref(new Set())

  // 动画类名配置
  const animationClasses = [
    'fade-in',
    'fade-in-up',
    'fade-in-down',
    'fade-in-left',
    'fade-in-right',
    'slide-in-up',
    'slide-in-down',
    'scale-in',
    'rotate-in',
    'zoom-in'
  ]

  // 创建Intersection Observer
  const createObserver = () => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target
            const animationType = element.dataset.animation || 'fade-in-up'
            const delay = parseInt(element.datasetDelay) || 0

            // 延迟添加动画
            setTimeout(() => {
              // 直接应用样式动画
              element.style.transition = 'all 0.8s ease-out'
              element.style.opacity = '1'
              element.style.transform = 'translate(0, 0) scale(1) rotate(0)'
              element.classList.remove('scroll-hidden')
              animatedElements.value.add(element)
            }, delay)

            observer.value.unobserve(element)
          }
        })
      },
      {
        threshold: 0.1, // 元素10%进入视窗时触发
        rootMargin: '0px 0px -50px 0px' // 提前50px触发
      }
    )
  }

  // 初始化动画
  const initAnimation = (container = document) => {
    const elements = container.querySelectorAll('[data-scroll-animation]')
    elements.forEach((element) => {
      const animationType = element.dataset.animation || 'fade-in-up'

      // 添加初始隐藏状态
      element.classList.add('scroll-hidden')

      // 根据动画类型设置初始状态
      if (animationType === 'fade-in-up' || animationType === 'slide-in-up') {
        element.style.transform = 'translateY(50px)'
      } else if (animationType === 'fade-in-down' || animationType === 'slide-in-down') {
        element.style.transform = 'translateY(-50px)'
      } else if (animationType === 'fade-in-left') {
        element.style.transform = 'translateX(-50px)'
      } else if (animationType === 'fade-in-right') {
        element.style.transform = 'translateX(50px)'
      } else if (animationType === 'scale-in' || animationType === 'zoom-in') {
        element.style.transform = 'scale(0.8)'
      } else if (animationType === 'rotate-in') {
        element.style.transform = 'rotate(-10deg)'
      }

      observer.value.observe(element)
    })
  }

  // 手动添加单个元素动画
  const addAnimation = (element) => {
    if (element && !animatedElements.value.has(element)) {
      element.classList.add('scroll-hidden')
      observer.value.observe(element)
    }
  }

  // 移除动画
  const removeAnimation = (element) => {
    if (observer.value && element) {
      observer.value.unobserve(element)
      animatedElements.value.delete(element)
    }
  }

  // 重置所有动画
  const resetAnimations = () => {
    animatedElements.value.forEach((element) => {
      element.classList.remove('animate__animated', ...animationClasses)
      element.classList.add('scroll-hidden')
      observer.value.observe(element)
    })
    animatedElements.value.clear()
  }

  onMounted(() => {
    createObserver()
    // 延迟初始化，确保DOM完全加载
    setTimeout(() => {
      initAnimation()
    }, 100)
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return {
    initAnimation,
    addAnimation,
    removeAnimation,
    resetAnimations,
    animatedElements
  }
}