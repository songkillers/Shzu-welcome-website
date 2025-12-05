import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// Vite配置文件 - 石河子大学迎新主题网页
// 参考文档: https://vitejs.dev/config/
// MIT协议配置示例来源: https://github.com/vuejs/create-vue

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/' : '/', // 生产环境使用根路径，因为GitHub Pages直接从docs文件夹部署
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 配置@别名指向src目录
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@views': resolve(__dirname, 'src/views'),
      '@router': resolve(__dirname, 'src/router'),
      '@css': resolve(__dirname, 'src/assets/css')
    }
  },
  server: {
    port: 3000, // 开发服务器端口
    open: true, // 自动打开浏览器
    cors: true // 开启跨域
  },
  build: {
    outDir: 'docs', // 打包输出目录
    assetsDir: 'assets', // 静态资源目录
    sourcemap: false, // 生产环境不生成sourcemap
    minify: 'terser', // 使用terser压缩
    terserOptions: {
      compress: {
        drop_console: true // 移除console
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/variables.scss";` // 全局注入SCSS变量
      }
    }
  }
})