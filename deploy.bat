@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM GitHub Pages 全自动部署脚本 - 石河子大学迎新网站 (Windows版本)

echo 🚀 开始全自动部署到 GitHub Pages...

REM 检查是否提供了GitHub用户名
if "%~1"=="" (
    echo ❌ 错误：请提供GitHub用户名
    echo 用法: deploy.bat YOUR_GITHUB_USERNAME
    pause
    exit /b 1
)

set GITHUB_USERNAME=%~1
set REPO_NAME=shzu-welcome-website

echo 👤 GitHub用户名: %GITHUB_USERNAME%
echo 📦 仓库名称: %REPO_NAME%

REM 构建项目
echo 📦 构建项目...
call npm run build

if %ERRORLEVEL% neq 0 (
    echo ❌ 构建失败！
    pause
    exit /b 1
)

REM 检查GitHub远程仓库
echo 🔗 检查远程仓库...
git remote get-url origin >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo 📝 添加GitHub远程仓库...
    git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git
)

REM 推送代码到GitHub
echo 📤 推送代码到GitHub...
git push -u origin master

if %ERRORLEVEL% equ 0 (
    echo ✅ 代码推送成功！
    echo.
    echo 🎯 下一步操作：
    echo 1. 访问: https://github.com/%GITHUB_USERNAME%/%REPO_NAME%
    echo 2. 点击 "Settings" 标签
    echo 3. 在左侧菜单找到 "Pages"
    echo 4. Source选择 "Deploy from a branch"
    echo 5. Branch选择 "gh-pages" 和 "/ ^(root^)"
    echo 6. 点击 "Save"
    echo.
    echo 🌐 网站地址: https://%GITHUB_USERNAME%.github.io/%REPO_NAME%/
    echo 📊 部署状态: https://github.com/%GITHUB_USERNAME%/%REPO_NAME%/actions
    echo.
    echo ⏳ GitHub Actions会自动构建和部署你的网站
    echo 🔄 以后每次推送代码都会自动部署
) else (
    echo ❌ 代码推送失败！请检查：
    echo 1. 网络连接
    echo 2. GitHub凭据
    echo 3. 仓库名称是否正确
    pause
    exit /b 1
)

echo.
echo 🎉 部署脚本执行完成！
echo 💡 提示：首次需要手动在GitHub上启用Pages功能
pause