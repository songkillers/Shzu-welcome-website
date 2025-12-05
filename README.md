# 石河子大学迎新主题网页

> 石河子大学"网聚创意"易协联创网页设计大赛作品
> 2026级新生迎新主题网页

## 📋 项目概述

本项目是为石河子大学2026级新生设计的迎新主题网页，旨在展示学校风采、传递迎新特色，为新生提供全面的报到指引和互动交流平台。

### 🎯 核心目标

- 展示石河子大学的校园风貌和办学特色
- 提供详细的迎新报到指南
- 建立新生互动交流平台
- 确保所有素材使用合规，符合原创性要求

## 🛠 技术栈

- **前端框架**: Vue 3.4.0 (Composition API)
- **构建工具**: Vite 5.0.8
- **UI框架**: Bootstrap 5.3.2
- **图标库**: Font Awesome 6.5.1
- **包管理器**: npm

## 📁 项目结构

```
shzu-welcome-website/
├── public/                 # 静态资源
├── src/
│   ├── assets/            # 资源文件
│   │   └── css/          # 样式文件
│   │       ├── global.css
│   │       └── variables.scss
│   ├── components/       # 公共组件
│   │   ├── BackToTop.vue
│   │   ├── BannerCarousel.vue
│   │   ├── FAQSection.vue
│   │   ├── FooterSection.vue
│   │   ├── GuideAccordion.vue
│   │   ├── MessageBoard.vue
│   │   └── NavBar.vue
│   ├── router/           # 路由配置
│   │   └── index.js
│   ├── views/            # 页面组件
│   │   ├── Campus.vue
│   │   ├── Guide.vue
│   │   ├── Home.vue
│   │   ├── Interaction.vue
│   │   └── NotFound.vue
│   ├── App.vue          # 根组件
│   └── main.js          # 入口文件
├── index.html           # HTML模板
├── package.json         # 依赖配置
├── vite.config.js       # Vite配置
└── README.md           # 项目说明
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

项目将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 🎨 设计特色

### UI设计

- **整体风格**: 简约学院风融合青春活力感
- **主色调**: 石河子大学主色调 #C1272D (石大河红)
- **布局**: 响应式设计，主要适配电脑端
- **交互**: 流畅的动画效果和用户反馈

### 核心模块

1. **首页Banner轮播**
   - 3秒自动轮播
   - 鼠标悬停暂停
   - 手动切换功能
   - 图片加载失败兜底方案

2. **迎新服务指南**
   - 报到流程指引
   - 宿舍分配信息
   - 缴费通道说明
   - 校园卡办理指南
   - 可折叠展开的交互设计

3. **新生互动模块**
   - 留言板功能
   - 常见问题解答(FAQ)
   - 实时表单验证
   - 提交成功反馈

## 📄 素材来源声明

### 图片素材
- **Unsplash**: https://unsplash.com/ (Unsplash License)
- 占位图: https://placeholder.com/

### 图标素材
- **Font Awesome**: https://fontawesome.com/ (CC BY 4.0)
- **Bootstrap Icons**: https://icons.getbootstrap.com/ (MIT License)

### 代码参考
- **Vue.js**: https://vuejs.org/ (MIT License)
- **Bootstrap**: https://getbootstrap.com/ (MIT License)
- **Vite**: https://vitejs.dev/ (MIT License)

**所有素材均为合规无版权资源，符合赛事原创性要求。**

## 🌐 页面功能

### 首页 (/)
- Banner轮播展示
- 欢迎标语和数据统计
- 快速导航入口
- 校园亮点介绍
- 新生留言板预览

### 校园风采 (/campus)
- 校园地标展示
- 特色社团介绍
- 办学成果展示
- 图文卡片式布局

### 迎新指南 (/guide)
- 完整的报到流程
- 宿舍分配详情
- 缴费方式说明
- 校园卡使用指南
- 重要提醒事项

### 新生互动 (/interaction)
- 留言板发布和查看
- 常见问题解答
- 社交媒体关注
- 联系方式信息

## 📱 响应式设计

项目采用响应式设计，支持多种设备：

- **桌面端**: ≥1200px (主要适配)
- **平板端**: 768px-1199px
- **移动端**: ≤767px

## 🔧 开发规范

### 代码规范
- 使用 Vue 3 Composition API
- 遵循 ESLint 代码规范
- 组件命名采用 PascalCase
- 文件命名采用 kebab-case

### CSS规范
- 使用 SCSS 预处理器
- 采用 BEM 命名规范
- 使用 CSS 变量管理主题
- 响应式设计优先

## 🎯 新手开发指南

### 环境配置

1. **安装 Node.js**
   - 访问 https://nodejs.org 下载最新LTS版本
   - 建议版本 >= 16.0.0

2. **安装代码编辑器**
   - 推荐 VS Code
   - 安装 Vue 3 和 Volar 插件

3. **项目启动**
   ```bash
   # 克隆项目
   git clone <repository-url>

   # 进入项目目录
   cd shzu-welcome-website

   # 安装依赖
   npm install

   # 启动开发服务器
   npm run dev
   ```

### 常见问题

1. **端口被占用**
   ```bash
   # 使用其他端口启动
   npm run dev -- --port 3001
   ```

2. **依赖安装失败**
   ```bash
   # 清除缓存后重新安装
   npm cache clean --force
   npm install
   ```

3. **构建失败**
   - 检查 Node.js 版本是否符合要求
   - 删除 node_modules 重新安装依赖

## 📞 联系方式

如有问题或建议，请联系：

- **项目团队**: 石河子大学迎新网页开发小组
- **邮箱**: webdev@shzu.edu.cn
- **赛事**: 石河子大学"网聚创意"易协联创网页设计大赛

## 📜 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

感谢以下开源项目和资源：

- Vue.js 团队提供优秀的前端框架
- Bootstrap 团队提供UI组件库
- Unsplash 提供高质量免费图片
- Font Awesome 提供图标资源
- 石河子大学提供的项目机会

---

**石河子大学"网聚创意"易协联创网页设计大赛作品**
**2024年12月**