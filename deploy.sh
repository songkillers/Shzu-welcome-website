#!/bin/bash

# GitHub Pages 全自动部署脚本 - 石河子大学迎新网站

echo "🚀 开始全自动部署到 GitHub Pages..."

# 检查是否提供了GitHub用户名
if [ "$1" == "" ]; then
    echo "❌ 错误：请提供GitHub用户名"
    echo "用法: ./deploy.sh YOUR_GITHUB_USERNAME"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="shzu-welcome-website"

echo "👤 GitHub用户名: $GITHUB_USERNAME"
echo "📦 仓库名称: $REPO_NAME"

# 构建项目
echo "📦 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败！"
    exit 1
fi

# 添加GitHub Actions自动部署配置
echo "⚙️ 配置自动部署..."

# 检查是否已经有GitHub Actions配置
if [ ! -d ".github/workflows" ]; then
    mkdir -p .github/workflows
fi

# 提交GitHub Actions配置
git add .github/workflows/deploy.yml
git add deploy.sh
git add DEPLOY-GUIDE.md
git commit -m "添加GitHub Actions自动部署配置

✨ 功能:
- 自动构建Vue.js项目
- 自动部署到GitHub Pages
- 支持CI/CD流程

🎯 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# 添加远程仓库（如果还没有）
if ! git remote get-url origin >/dev/null 2>&1; then
    echo "🔗 添加远程仓库..."
    git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
fi

# 推送代码，触发GitHub Actions
echo "📤 推送代码到GitHub..."
git push -u origin master

if [ $? -eq 0 ]; then
    echo "✅ 代码推送成功！"
    echo ""
    echo "🎯 下一步操作："
    echo "1. 访问: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo "2. 点击 'Settings' 标签"
    echo "3. 在左侧菜单找到 'Pages'"
    echo "4. Source选择 'Deploy from a branch'"
    echo "5. Branch选择 'gh-pages' 和 '/ (root)'"
    echo "6. 点击 'Save'"
    echo ""
    echo "🌐 网站地址: https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
    echo "📊 部署状态: https://github.com/$GITHUB_USERNAME/$REPO_NAME/actions"
else
    echo "❌ 代码推送失败！请检查网络连接和GitHub凭据"
    exit 1
fi

echo "🎉 部署脚本执行完成！"