// 石河子大学图片数据配置 - 确保路径正确
export const SHZU_IMAGES = {
  // 轮播图 - 已复制的图片
  carousel: [
    {
      id: 'gate',
      url: '/images/official/carousel/shzu-gate.jpg',
      alt: '石河子大学中区南门',
      title: '2026级新生，欢迎来到石河子大学',
      description: '知识的殿堂，梦想的起点。石河子大学中区南门，是石大学子的精神象征。'
    },
    {
      id: 'library',
      url: '/images/official/carousel/shzu-library.jpg',
      alt: '石河子大学现代化图书馆',
      title: '探索知识的海洋',
      description: '现代化图书馆设施，藏书丰富，为你的学术追求提供无限可能。'
    },
    {
      id: 'campus-sunset',
      url: '/images/official/carousel/shzu-campus-sunset.jpg',
      alt: '石河子大学晚霞校园',
      title: '四季分明的美丽校园',
      description: '晚霞映照下的美丽校园，春有百花，夏有绿荫，秋有金叶，冬有雪景。'
    },
    {
      id: 'stadium',
      url: '/images/official/carousel/shzu-stadium.jpg',
      alt: '石河子大学现代化体育馆',
      title: '青春活力的运动天地',
      description: '现代化的体育设施，为师生提供优质的运动和健身环境。'
    }
  ],

  // 校园地标
  landmarks: [
    {
      id: 'administration',
      url: '/images/official/landmarks/shzu-administration.jpg',
      alt: '石河子大学行政楼',
      title: '行政办公楼',
      description: '学校行政管理和教学科研的核心建筑'
    },
    {
      id: 'teaching',
      url: '/images/official/landmarks/shzu-teaching.jpg',
      alt: '石河子大学教学楼',
      title: '现代化教学楼',
      description: '配备先进教学设备的多媒体教学楼'
    },
    {
      id: 'museum',
      url: '/images/official/landmarks/shzu-museum.jpg',
      alt: '石河子大学校史馆',
      title: '校史馆',
      description: '展示学校发展历程和重要成就'
    },
    {
      id: 'autumn-pavilion',
      url: '/images/official/landmarks/shzu-autumn-pavilion.jpg',
      alt: '石河子大学秋中红亭',
      title: '秋中红亭',
      description: '校园标志性景观，秋季赏红叶的绝佳地点'
    }
  ],

  // 自然景观
  landscapes: [
    {
      id: 'microwave-lake',
      url: '/images/official/landscapes/shzu-microwave-lake.jpg',
      alt: '石河子大学微波湖',
      title: '微波湖',
      description: '校园内的人工湖，四季景色各异'
    },
    {
      id: 'book-lake',
      url: '/images/official/landscapes/shzu-book-lake.jpg',
      alt: '石河子大学书香湖',
      title: '书香湖',
      description: '充满人文气息的校园湖泊'
    },
    {
      id: 'lakeside',
      url: '/images/official/landscapes/shzu-lakeside.jpg',
      alt: '石河子大学湖畔风景',
      title: '湖畔风景',
      description: '湖光山色，风景如画'
    },
    {
      id: 'aerial-view',
      url: '/images/official/landscapes/shzu-aerial-view.jpg',
      alt: '石河子大学将军山鸟瞰图',
      title: '校园鸟瞰',
      description: '从将军山俯瞰石河子大学全景'
    }
  ],

  // 生活设施
  facilities: [
    {
      id: 'dormitory',
      url: '/images/official/facilities/shzu-dormitory.jpg',
      alt: '石河子大学宿舍楼',
      title: '学生宿舍楼',
      description: '舒适安全的学生公寓，配备现代化生活设施'
    },
    {
      id: 'playground',
      url: '/images/official/facilities/shzu-playground.jpg',
      alt: '石河子大学操场',
      title: '运动场',
      description: '标准400米跑道运动场'
    },
    {
      id: 'swimming-pool',
      url: '/images/official/facilities/shzu-swimming-pool.jpg',
      alt: '石河子大学游泳馆',
      title: '游泳馆',
      description: '现代化室内恒温游泳馆'
    },
    {
      id: 'campus-overview',
      url: '/images/official/facilities/shzu-campus-overview.jpg',
      alt: '石河子大学校园全景',
      title: '校园全景',
      description: '石河子大学整体校园环境'
    }
  ]
}

// 获取图片的工具函数
export function getSHZUImages(category = null) {
  return category ? SHZU_IMAGES[category] || [] : SHZU_IMAGES
}

export function getSHZUImage(category, id) {
  const images = getSHZUImages(category)
  return images.find(img => img.id === id)
}

// 备用图片配置（如果加载失败）
export const FALLBACK_IMAGES = {
  carousel: [
    {
      url: 'https://via.placeholder.com/1920x1080/C1272D/FFFFFF?text=石河子大学校门',
      alt: '石河子大学校门'
    },
    {
      url: 'https://via.placeholder.com/1920x1080/1F4E79/FFFFFF?text=图书馆',
      alt: '石河子大学图书馆'
    },
    {
      url: 'https://via.placeholder.com/1920x1080/52C41A/FFFFFF?text=美丽校园',
      alt: '石河子大学校园'
    },
    {
      url: 'https://via.placeholder.com/1920x1080/FAAD14/FFFFFF?text=体育馆',
      alt: '石河子大学体育馆'
    }
  ]
}

export default SHZU_IMAGES