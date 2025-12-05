# 石河子大学迎新网站 - 项目分享指南

## 🚀 项目分享方案

### 方案一：完整源码分享（推荐）

适合开发者或需要修改项目的接收者

#### 步骤 1：准备分享文件

**需要包含的文件：**
```
shzu-welcome-website/
├── src/                    # 源代码（必需）
├── public/                 # 静态资源（必需）
├── index.html              # HTML模板（必需）
├── package.json            # 项目配置（必需）
├── vite.config.js          # 构建配置（必需）
├── README.md               # 项目说明（可选）
└── SHARING-GUIDE.md        # 本分享指南（可选）
```

**需要排除的文件/文件夹：**
- `node_modules/` - 依赖包，接收者需要自行安装
- `rubbish/` - 开发过程中的废弃文件
- `.claude/` - 开发工具配置
- `package-lock.json` - 可选，建议让接收者重新生成

#### 步骤 2：创建分享包

**方法A：创建ZIP压缩包**
```bash
# 在项目根目录执行
zip -r shzu-welcome-website.zip . -x "node_modules/*" "rubbish/*" ".claude/*" "package-lock.json"
```

**方法B：使用Git（最佳方案）**
```bash
# 如果还没有Git仓库，初始化一个
git init
git add .
git commit -m "Initial commit - 石河子大学迎新网站"

# 创建Git仓库分享链接（推荐使用GitHub/Gitee）
git remote add origin <你的仓库地址>
git push -u origin main
```

#### 步骤 3：给接收者的说明

接收者需要执行以下步骤：

1. **解压文件**（如果使用ZIP方式）
2. **安装Node.js**（建议版本 >= 16.0.0）
3. **安装项目依赖**
   ```bash
   cd shzu-welcome-website
   npm install
   ```
4. **启动开发服务器**
   ```bash
   npm run dev
   ```
5. **访问网站**
   - 打开浏览器访问：`http://localhost:5173`
   - （如果端口被占用，Vite会自动分配其他端口）

### 方案二：生产版本分享

适合只需要查看网站，不需要修改代码的接收者

#### 步骤 1：构建生产版本

```bash
# 在项目根目录执行
npm run build
```

构建完成后会生成 `dist/` 文件夹，包含：
```
dist/
├── index.html
├── assets/
│   ├── index-xxxx.js
│   ├── index-xxxx.css
│   └── 图片资源等
```

#### 步骤 2：分享生产版本

**需要分享的文件：**
- 整个 `dist/` 文件夹

**分享方式：**
1. 将 `dist/` 文件夹压缩为ZIP发送
2. 或者直接将 `dist/` 文件夹内容上传到Web服务器

#### 步骤 3：接收者使用方法

**本地查看：**
1. 解压收到的文件
2. 双击 `index.html` 文件（用浏览器打开）
3. 或使用本地服务器：
   ```bash
   # 使用Python
   python -m http.server 8000

   # 使用Node.js的serve包
   npx serve dist

   # 使用VS Code的Live Server插件
   ```

**部署到服务器：**
1. 将 `dist/` 文件夹内容上传到Web服务器根目录
2. 访问域名即可查看网站

## 📋 分享检查清单

### 分享前确认项目状态

- [ ] 项目可以正常启动（`npm run dev`）
- [ ] 所有页面显示正常
- [ ] 图片资源可以正常加载
- [ ] 路由功能正常
- [ ] 移除了敏感信息和开发相关配置
- [ ] 清理了无用的文件和注释

### 推荐的分享方式

| 场景 | 推荐方式 | 优点 | 缺点 |
|------|----------|------|------|
| 开发者交流 | 完整源码 + Git仓库 | 可修改、可协作 | 需要安装环境 |
| 作品展示 | 生产版本 + 部署 | 即开即用、体积小 | 无法修改 |
| 比赛提交 | 源码 + 部署说明 | 完整展示项目结构 | 需要环境配置 |

## 🛠️ 接收者可能遇到的问题

### 常见问题及解决方案

1. **依赖安装失败**
   ```bash
   # 清除npm缓存
   npm cache clean --force
   # 删除node_modules重新安装
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **端口被占用**
   ```bash
   # 使用指定端口启动
   npm run dev -- --port 3001
   ```

3. **Node.js版本过低**
   - 建议升级到Node.js 16.0.0或更高版本
   - 可从 https://nodejs.org 下载

4. **图片无法加载**
   - 检查 `public/images/` 文件夹是否存在
   - 确认图片路径配置正确

## 📧 分享信息模板

给接收者发送时可以包含以下信息：

```
🎓 石河子大学迎新网站

📁 项目内容：
- 基于Vue.js 3 + Bootstrap 5开发的响应式迎新网站
- 包含首页、校园风采、迎新指南、新生互动四个主要模块
- 使用石河子大学官方校园图片素材

🚀 快速开始：
1. 解压文件到本地目录
2. 打开终端，进入项目目录
3. 执行 npm install 安装依赖
4. 执行 npm run dev 启动开发服务器
5. 在浏览器中访问 http://localhost:5173

💻 环境要求：
- Node.js >= 16.0.0
- npm >= 8.0.0

如有问题，请联系：[你的联系方式]
```

## 🔄 持续维护建议

如果项目需要长期维护或多人协作：

1. **使用Git版本控制**
2. **编写详细的README文档**
3. **添加代码规范和提交规范**
4. **定期更新依赖包**
5. **备份重要版本**

---

**分享愉快！** 🎉

如有任何问题，请参考项目中的README.md或联系项目开发者。