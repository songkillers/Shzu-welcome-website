// 图片配置文件 - 石河子大学迎新主题网页
// 便于统一管理和替换图片资源

// 图片配置开关
const USE_OFFICIAL_IMAGES = false // 设为true时使用官方图片，false时使用替代图片

// 官方图片配置（需要后续添加）
const officialImages = {
  // 轮播图
  carousel: [
    {
      id: 'gate',
      url: '/images/official/shzu-gate.jpg',
      alt: '石河子大学校门',
      source: '石河子大学官网'
    },
    {
      id: 'library',
      url: '/images/official/shzu-library.jpg',
      alt: '石河子大学图书馆',
      source: '石河子大学官网'
    },
    {
      id: 'campus',
      url: '/images/official/shzu-campus-spring.jpg',
      alt: '石河子大学春季校园',
      source: '石河子大学官网'
    },
    {
      id: 'activities',
      url: '/images/official/shzu-activities.jpg',
      alt: '石河子大学学生活动',
      source: '石河子大学官网'
    }
  ],

  // 校园风光
  landmarks: [
    {
      id: 'main-building',
      url: '/images/official/shzu-main-building.jpg',
      alt: '石河子大学主教学楼',
      source: '石河子大学官网'
    },
    {
      id: 'stadium',
      url: '/images/official/shzu-stadium.jpg',
      alt: '石河子大学体育馆',
      source: '石河子大学官网'
    },
    {
      id: 'museum',
      url: '/images/official/shzu-museum.jpg',
      alt: '石河子大学博物馆',
      source: '石河子大学官网'
    },
    {
      id: 'dormitory',
      url: '/images/official/shzu-dormitory.jpg',
      alt: '石河子大学学生宿舍',
      source: '石河子大学官网'
    }
  ],

  // 生活设施
  facilities: [
    {
      id: 'cafeteria',
      url: '/images/official/shzu-cafeteria.jpg',
      alt: '石河子大学食堂',
      source: '石河子大学官网'
    },
    {
      id: 'lab',
      url: '/images/official/shzu-laboratory.jpg',
      alt: '石河子大学实验室',
      source: '石河子大学官网'
    },
    {
      id: 'classroom',
      url: '/images/official/shzu-classroom.jpg',
      alt: '石河子大学教室',
      source: '石河子大学官网'
    }
  ]
}

// 替代图片配置（当前使用）
const alternativeImages = {
  // 轮播图 - 使用高质量Unsplash图片
  carousel: [
    {
      id: 'gate',
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: '现代化大学校门',
      source: 'Unsplash - 校园建筑',
      fallback: 'https://via.placeholder.com/1920x1080/C1272D/FFFFFF?text=石河子大学校门'
    },
    {
      id: 'library',
      url: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: '现代化图书馆',
      source: 'Unsplash - 学术氛围',
      fallback: 'https://via.placeholder.com/1920x1080/1F4E79/FFFFFF?text=现代化图书馆'
    },
    {
      id: 'campus',
      url: 'https://images.unsplash.com/photo-1577720643272-265f09367456?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: '美丽校园风景',
      source: 'Unsplash - 校园环境',
      fallback: 'https://via.placeholder.com/1920x1080/52C41A/FFFFFF?text=美丽校园风景'
    },
    {
      id: 'activities',
      url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: '学生活动',
      source: 'Unsplash - 校园生活',
      fallback: 'https://via.placeholder.com/1920x1080/FAAD14/FFFFFF?text=多彩校园生活'
    }
  ],

  // 校园地标
  landmarks: [
    {
      id: 'main-building',
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: '现代化教学楼',
      source: 'Unsplash - 教育建筑',
      fallback: 'https://via.placeholder.com/400x300/C1272D/FFFFFF?text=教学楼'
    },
    {
      id: 'stadium',
      url: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: '现代化体育馆',
      source: 'Unsplash - 体育设施',
      fallback: 'https://via.placeholder.com/400x300/1890FF/FFFFFF?text=体育馆'
    },
    {
      id: 'museum',
      url: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: '校园建筑',
      source: 'Unsplash - 建筑摄影',
      fallback: 'https://via.placeholder.com/400x300/52C41A/FFFFFF?text=校史馆'
    },
    {
      id: 'dormitory',
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: '学生宿舍',
      source: 'Unsplash - 住宿环境',
      fallback: 'https://via.placeholder.com/400x300/FAAD14/FFFFFF?text=学生宿舍'
    }
  ],

  // 生活设施
  facilities: [
    {
      id: 'cafeteria',
      url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: '现代化食堂',
      source: 'Unsplash - 餐饮环境',
      fallback: 'https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=学生食堂'
    },
    {
      id: 'lab',
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: '现代化实验室',
      source: 'Unsplash - 科研设施',
      fallback: 'https://via.placeholder.com/400x300/1890FF/FFFFFF?text=实验室'
    },
    {
      id: 'classroom',
      url: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: '现代化教室',
      source: 'Unsplash - 教育环境',
      fallback: 'https://via.placeholder.com/400x300/52C41A/FFFFFF?text=教室'
    }
  ]
}

// 获取图片配置
export function getImageConfig() {
  return USE_OFFICIAL_IMAGES ? officialImages : alternativeImages
}

// 获取指定图片
export function getImage(category, id) {
  const config = getImageConfig()
  const images = config[category] || []
  const image = images.find(img => img.id === id)

  if (!image) {
    console.warn(`图片未找到: ${category}/${id}`)
    return {
      url: 'https://via.placeholder.com/400x300/CCCCCC/FFFFFF?text=图片未找到',
      alt: '图片未找到',
      source: '默认占位图'
    }
  }

  return image
}

// 图片错误处理
export function handleImageError(event, image) {
  console.warn(`图片加载失败: ${image.url}`)
  if (image.fallback) {
    event.target.src = image.fallback
    event.target.alt = `${image.alt} (占位图)`
  }
}

// 切换图片模式
export function toggleImageMode(useOfficial = null) {
  if (useOfficial !== null) {
    localStorage.setItem('useOfficialImages', useOfficial.toString())
  } else {
    localStorage.setItem('useOfficialImages', (!USE_OFFICIAL_IMAGES).toString())
  }
  // 需要刷新页面才能生效
  window.location.reload()
}

// 检查当前模式
export function getCurrentMode() {
  return USE_OFFICIAL_IMAGES ? 'official' : 'alternative'
}

// 导出配置
export { officialImages, alternativeImages, USE_OFFICIAL_IMAGES }