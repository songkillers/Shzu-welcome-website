# 🚀 GitHub Pages 部署指南

## 📋 部署步骤

### 1. 创建GitHub仓库
1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 "+" → "New repository"
3. 仓库名称：`shzu-welcome-website`
4. 选择 "Public"（公开仓库）
5. 勾选 "Add a README file"
6. 点击 "Create repository"

### 2. 连接本地仓库到GitHub
```bash
# 添加远程仓库（替换 YOUR_USERNAME 为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/shzu-welcome-website.git

# 推送主分支
git push -u origin master
```

### 3. 部署到GitHub Pages

#### 方法一：使用GitHub Actions（推荐）

1. 在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. 提交并推送：
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment"
git push
```

#### 方法二：手动部署

1. 运行部署脚本：
```bash
# 修改 deploy.sh 中的 YOUR_USERNAME 为你的GitHub用户名
# 然后运行：
bash deploy.sh
```

2. 或者手动操作：
```bash
# 构建项目
npm run build

# 复制dist文件夹内容到新的gh-pages分支
git subtree push --prefix dist origin gh-pages
```

### 4. 启用GitHub Pages

1. 访问你的GitHub仓库页面
2. 点击 "Settings" 标签
3. 在左侧菜单找到 "Pages"
4. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - Branch 选择 "gh-pages"
   - Folder 选择 "/ (root)"
5. 点击 "Save"

### 5. 访问网站

部署成功后，你的网站将在以下地址可访问：
```
https://YOUR_USERNAME.github.io/shzu-welcome-website/
```

## 🔧 常见问题

### Q: 部署后页面空白？
A: 检查 `vite.config.js` 中的 `base` 配置是否正确

### Q: 图片不显示？
A: 确保图片路径使用 `/` 开头的绝对路径

### Q: 路由404错误？
A: GitHub Pages不支持Vue Router的history模式，需要使用hash模式

## 📝 维护说明

### 更新网站
1. 修改代码
2. 提交更改：
   ```bash
   git add .
   git commit -m "更新内容描述"
   git push
   ```
3. GitHub Actions会自动重新部署

### 查看部署状态
- 访问仓库的 "Actions" 标签查看部署日志
- "Settings" → "Pages" 查看部署状态

---

🎉 **恭喜！你的石河子大学迎新网站现在可以在线访问了！**