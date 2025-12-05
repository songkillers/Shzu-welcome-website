#!/bin/bash

echo "🚀 石河子大学迎新网站 - 快速部署脚本"

# 构建项目
echo "📦 构建项目..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 构建成功"

    # 添加所有文件
    echo "📤 添加文件到Git..."
    git add .

    # 提交更改
    echo "💾 提交更改..."
    git commit -m "快速部署 - 修复Vue Router为Hash模式

🔧 主要修复:
- 切换Vue Router到createWebHashHistory模式
- 提升GitHub Pages兼容性
- 解决页面空白问题

🎯 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"

    # 推送到GitHub
    echo "🌐 推送到GitHub..."
    git push origin master

    echo "✅ 部署完成！"
    echo ""
    echo "🌐 网站地址: https://songkillers.github.io/Shzu-welcome-website/"
    echo "📊 等待GitHub Pages更新..."

else
    echo "❌ 构建失败！"
    exit 1
fi

echo "🎉 脚本执行完成！"